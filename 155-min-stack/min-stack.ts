class MinStack {
    head;

    push(val: number): void {
        if (this.head) {
            this.head = new StackNode(val, Math.min(val, this.head.min), this.head)
        } else {
            this.head = new StackNode(val, val, this.head)
        }
    }

    pop(): void {
        this.head = this.head.next;
    }

    top(): number {
        return this.head.val;
    }

    getMin(): number {
        return this.head.min;
    }
}
class StackNode {
    val;
    min;
    next;
    constructor(v, m, n) {
        this.val = v;
        this.min = m;
        this.next = n;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */