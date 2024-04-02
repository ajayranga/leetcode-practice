function evalRPN(tokens: string[]): number {
    const allOperators = new Set('*/-+'.split(''));
    const stack: (string | number)[] = [];
    for (let i = 0; i < tokens.length; i++) {
        if (allOperators.has(tokens[i])) {
            let num2 = +stack.pop()!;
            let num1 = +stack.pop()!;
            if (tokens[i] === '*') {
                stack.push(num1 * num2);
            } else if (tokens[i] === '+') {
                stack.push(num1 + num2);
            } else if (tokens[i] === '-') {
                stack.push(num1 - num2);
            } else if (tokens[i] === '/') {
                stack.push(Math.trunc(num1 / num2));
            }
        } else stack.push(tokens[i]);
    }
    return +stack[0];
}