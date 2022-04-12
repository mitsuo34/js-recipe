const inputNumber = document.getElementById("number")
const send = document.getElementById("send")

const genki = function (num) {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!")
    } else {
      console.log(i)
    }
  }
}

send.onclick = function () {
  let number = inputNumber.value
  genki(number)
}
