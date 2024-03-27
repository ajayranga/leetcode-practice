type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const arr1Map = new Map();
    const arr2Map = new Map();
    for (let obj of arr1) {
        arr1Map.set(obj.id, obj)
    }
    for (let obj of arr2) {
        arr2Map.set(obj.id, obj)
    }
    const ans: ArrayType[] = [];
    for (let [id, val] of arr1Map) {
        if (arr2Map.has(id)) {
            ans.push({ ...val, ...arr2Map.get(id) })
        } else {
            ans.push(val)
        }
    }

    for (let [id, val] of arr2Map) {
        if (!arr1Map.has(id)) {
            ans.push(val)
        }
    }
    return ans.sort((a, b) => a.id - b.id);
};