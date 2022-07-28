let ans = prompt("enter any name")
let arr= []
let vowel = "aeiou"
for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
        if (ans[i]==vowel[j]) {
            arr.push(ans[i])
        }
    }
}
console.log(arr.length)