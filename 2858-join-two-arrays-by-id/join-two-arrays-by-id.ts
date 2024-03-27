type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const result: Record<string, ArrayType> = {};
    for (let itm of arr1) {
        result[itm.id] = itm;
    }
    for (let itm of arr2) {
        if (result.hasOwnProperty(itm.id)) {
            result[itm.id] = { ...result[itm.id], ...itm }
        } else {
            result[itm.id] = itm;
        }
    }
    return Object.values(result)
};