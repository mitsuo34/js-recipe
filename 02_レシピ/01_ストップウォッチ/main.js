const display = document.getElementById("display")
const Switch = document.getElementById("switch")
let count = 0
let id = null
const countUp = function () {
  count += 1
  display.textContent = count / 100
}

Switch.onclick = function () {
  if (id === null) {
    id = setInterval(countUp, 10)
    Switch.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    GamepadButton.textContent = "start"
  }
}
