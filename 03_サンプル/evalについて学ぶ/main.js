const ok2button = document.getElementById("ok2")
const ok1button = document.getElementById("ok1")
for (let i = 0; i < 3; i++) {
  eval(
    "const a" + String(i) + "= document.getElementById('a" + String(i) + "')",
  )
}

ok1button.onclick = function () {
  a1.textContent = a1.textContent + "a"
}

ok2button.onclick = function () {
  a2.textContent = "b"
}
for (let i = 0; i < 3; i++) {
  eval("ok" + i + "button.onclick = function(){ a" + i + ".textContent = " + i)
}
