/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
            let newArr = [];
            for (let itm of obj) {
                if (itm && typeof itm === 'object') {
                    newArr.push(compactObject(itm))
                } else {
                    if (Boolean(itm)) {
                        newArr.push(itm)
                    }
                }
            }
            return newArr;
        } else {
            let newObj = {};
            for (let key in obj) {
                if (obj[key] && typeof obj[key] === 'object') {
                    newObj[key] = compactObject(obj[key]);
                } else {
                    if (Boolean(obj[key])) {
                        newObj[key] = (obj[key]);
                    }
                }
            }
            return newObj;
        }
    }
    // for (let key in obj) {
    //     if (Boolean(obj[key])) {
    //         if (typeof obj[key] === 'object') {
    //             obj[key] = compactObject(obj[key])
    //         }
    //     } else {
    //         let ommittedObj = {};
    //         for (let key2 in obj) {
    //             if (key2 !== key) {
    //                 ommittedObj[key2] = obj[key2]
    //             }
    //         }
    //         obj = ommittedObj;
    //     }
    // }
    // return obj
};