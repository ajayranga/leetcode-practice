type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    allSubscriptions;
    constructor() {
        this.allSubscriptions = new Map<string, number[]>()
    }

    subscribe(eventName: string, callback: Callback): Subscription {
        if (this.allSubscriptions.has(eventName)) {
            this.allSubscriptions.set(eventName, [...this.allSubscriptions.get(eventName), callback])
        } else {
            this.allSubscriptions.set(eventName, [callback])
        }
        return {
            unsubscribe: (idx?: number) => {
                this.allSubscriptions.set(eventName, this.allSubscriptions.get(eventName).filter((cbk) => cbk !== callback))
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        if (this.allSubscriptions.has(eventName)) {
            return this.allSubscriptions.get(eventName)
                .map(cbk => cbk(...args))
        } else {
            return [];
        }
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */