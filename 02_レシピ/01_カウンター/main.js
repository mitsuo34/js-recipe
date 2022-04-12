const plus1 = document.getElementById("plus1")
const number = document.getElementById("number")
const dobbule = document.getElementById("dobbule")
const minus1 = document.getElementById("minus1")
let num = 0

plus1.onclick = function () {
  num += 1
  number.textContent = num
}

dobbule.onclick = function () {
  num *= 2
  number.textContent = num
}

minus1.onclick = function () {
  num -= 1
  number.textContent = num
}
