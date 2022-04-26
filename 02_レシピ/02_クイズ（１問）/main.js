const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const feedback = document.getElementById("feedback")

for (let i; i < 3; i++) {
  eval("const choice" + i + " = document.getElementById('choice-" + i + "')")
}

// クイズの内容
const quiz = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
    ],
  },
  {
    text: "今何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "1",
        feedback: "残念さっき１問解いたじゃん",
      },
      {
        text: "2",
        feedback: "正解、やるじゃん",
      },
      {
        text: "3",
        feedback: "残念お馬鹿さん",
      },
    ],
  },
  {
    text: "この城は何城？",
    image: "maruoka.png",
    choices: [
      {
        text: "丸岡城",
        feedback: "正解",
      },
      {
        text: "丸亀城",
        feedback: "残念！ちがう",
      },
      {
        text: "丸子城",
        feedback: "残念。",
      },
    ],
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz[i].text

  // 画像を表示
  quizImage.src = "./images/" + quiz[i].image

  // 選択肢（ボタン）の中身を表示
  for (let j = 0; j < quiz[i]; j++) choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
