let arr = ["forest", "tree", "high_mountain"];
let result = true
for (let i = 0; i < arr.length - 1; i++) {
  if (typeof arr[i] != typeof arr[i + 1]) {
    result = false
  }
}
console.log(result)
