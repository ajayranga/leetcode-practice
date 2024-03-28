class Calculator {
    result;
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return new Calculator(this.result);
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return new Calculator(this.result);
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return new Calculator(this.result);

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            this.result = "Division by zero is not allowed";
        } else
            this.result /= value;
        return new Calculator(this.result);
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result **= value;
        return new Calculator(this.result);
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}