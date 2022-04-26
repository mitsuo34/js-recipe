const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const next1 = document.getElementById("next1")

let num = 0

// クイズの内容
const quizes = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",
    choices: [
      {
        text: "ゴリアテ",
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
        right: false,
      },
      {
        text: "ゼニガメ",
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
        right: false,
      },
      {
        text: "ガニメデ",
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
        right: true,
      },
    ],
  },
  {
    text: "今何問目でしょう？",
    image: "Two.jpeg",
    choices: [
      {
        text: "に",
        feedback: "正解！",
        right: true,
      },
      {
        text: "1",
        feedback: "残念！",
        right: false,
      },
      {
        text: "4",
        feedback: "残念",
        right: true,
      },
    ],
  },
  {
    text: "城の名前は何でしょう？",
    image: "maruoka.png",
    choices: [
      {
        text: "丸岡城",
        feedback: "正解！",
        right: true,
      },
      {
        text: "丸亀城",
        feedback: "残念！",
        right: false,
      },
      {
        text: "ガニメデ",
        feedback: "残念！ガニメデは、木星の第三惑星だよ！",
        right: false,
      },
    ],
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function (a) {
  // 問題文を表示
  quizText.textContent = "Q. " + quizes[a].text

  // 画像を表示
  quizImage.src = "./images/" + quizes[a].image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quizes[a].choices[0].text
  choice2.textContent = quizes[a].choices[1].text
  choice3.textContent = quizes[a].choices[2].text
  feedback.textContent = ""
}

// choiceNumber番目の選択肢を選択
const choose = function (a, choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quizes[a].choices[choiceNumber].feedback
}

const nextbtnCreate = function () {
  const nextbtn = document.createElement("button")
  nextbtn.textContent = "次の問題へ"
  next1.append(nextbtn)
  nextbtn.onclick = function () {
    if (num < 2) {
      nextbtn.remove()
      num += 1
      reloadQuiz(num)
    } else {
      nextbtn.remove()
      num -= 2
      reloadQuiz(num)
    }
  }
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(num, 0)
  if (quizes[num].choices[0].right) {
    nextbtnCreate()
  }
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(num, 1)
  if (quizes[num].choices[1].right) {
    nextbtnCreate()
  }
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(num, 2)
  if (quizes[num].choices[2].right === true) {
    nextbtnCreate()
  }
}

// reloadQuiz関数 を実行して、クイズを画面に表示する'
reloadQuiz(num)
