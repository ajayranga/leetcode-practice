function isValid(s: string): boolean {
    const brcStack = [];
    const brcMapObj = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    const openBrc = new Set('({['.split(''));
    const clsBrc = new Set(')]}'.split(''));
    for (let i = 0; i < s.length; i++) {
        if (openBrc.has(s[i])) {
            brcStack.push(s[i])
        } else if (clsBrc.has(s[i])) {
            let lastBrc = brcStack.pop();
            if (brcMapObj[s[i]] !== lastBrc) {
                return false
            }
        }
    }
    return brcStack.length === 0;
};