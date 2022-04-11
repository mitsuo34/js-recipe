const inputNumber = document.getElementById("number")
const send = document.getElementById("send")
const number = inputNumber.value

const genki = function (Number) {
  for (let i = 1; i < Number; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!")
    } else {
      console.log(i)
    }
  }
}

send.onclick = function () {
  genki(number)
}
