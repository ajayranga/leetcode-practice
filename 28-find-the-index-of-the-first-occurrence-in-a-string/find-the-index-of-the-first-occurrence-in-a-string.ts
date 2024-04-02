function strStr(haystack: string, needle: string): number {
    let j = 0;
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] === needle[j]) {
            let matched = true;
            for (let k = 1; k < needle.length; k++) {
                if (haystack[i + k] !== needle[k]) {
                    matched = false
                    break;
                }
            }
            if (matched) {
                return i
            }
        }
    }
    return -1;
};