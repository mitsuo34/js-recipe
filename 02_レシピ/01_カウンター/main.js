const plus1 = document.getElementById("plus1")
const number = document.getElementById("number")
let num = 0

plus1.onclick = function () {
  num += 1
  number.textContent = num
}
