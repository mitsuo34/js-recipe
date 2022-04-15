const figure = document.getElementById("figure")
const round_btn = document.getElementById("round_btn")
const square_btn = document.getElementById("square_btn")
const transition_btn = document.getElementById("transition_btn")
const quickly_btn = document.getElementById("quickly_btn")

const toRound = function () {
  figure.classList.add("rounded")
}
const noRound = function () {
  figure.classList.remove("rounded")
}
const toTransition = function () {
  figure.classList.add("transition")
}
const noTransition = function () {
  figure.classList.remove("transition")
}

round_btn.onclick = function () {
  toRound()
}
square_btn.onclick = function () {
  noRound()
}
transition_btn.onclick = function () {
  toTransition()
}
quickly_btn.onclick = function () {
  noTransition()
}
