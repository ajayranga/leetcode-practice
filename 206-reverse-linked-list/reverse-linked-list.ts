function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null, current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev;
};