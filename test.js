// const get2ndMax = (arr) => {
//   let max = arr[0],
//     secMax = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     max = Math.max(max, arr[i]);
//   }
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > secMax && arr[i] < max) {
//       secMax = arr[i];
//     }
//   }
//   return secMax;
// };
// console.clear();
// // console.log(get2ndMax([1, 2, 3, 4, 1, 11, 22]));
// const isAnagram = (str1, str2) => {
//   const frqMap1 = new Map();
//   const frqMap2 = new Map();
//   for (let i = 0, j = 0; i < str1.length || j < str2.length; i++, j++) {
//     if (i < str1.length) {
//       frqMap1.set(str1[i], frqMap1.get(str1[i]) ? frqMap1.get(str1[i]) + 1 : 1);
//     }
//     if (j < str2.length) {
//       frqMap2.set(str2[j], frqMap2.get(str2[j]) ? frqMap2.get(str2[j]) + 1 : 1);
//     }
//   }
//   if (
//     Array.from(frqMap1.entries()).length !==
//     Array.from(frqMap2.entries()).length
//   ) {
//     return false;
//   }
//   for (let [key, _] of frqMap1) {
//     if (frqMap2.get(key) !== frqMap2.get(key)) {
//       return false;
//     }
//   }
//   return true;
//   //   return str1.split('').sort().join('') === str2.split('').sort().join('');// nlog(n)
// };
// console.log(isAnagram('abc', 'cba'));
// console.log(isAnagram('abc', 'cbas'));
function QuestionsMarks(str) {
  let fst = 0,
    pairExist = false;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      fst = +str[i];
      let r = i + 1,
        cntQue = 0;
      while (+str[r] !== 10 - fst && r < str.length) {
        if (str[r] === '?') {
          cntQue++;
        }
        r++;
      }
      if (r < str.length) {
        pairExist = true;
        if (cntQue !== 3) {
          return false;
        }
      }
    }
  }
  if (!pairExist) {
    return false;
  }
  return true;
}
console.clear();
// keep this function call here
console.log(QuestionsMarks('aa6?9'));
