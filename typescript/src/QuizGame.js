import promptSync from "prompt-sync";
let array = [
  {
    no: 1,
    question: "wkrkrmml",
    answer: "yes",
  },
  {
    no: 2,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 3,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 4,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 5,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 6,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 7,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 8,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 9,
    question: "dlgmlfmg",
    answer: "no",
  },
  {
    no: 10,
    question: "dlgmlfmg",
    answer: "no",
  },
];

// let getRandomQuestion = 0;
// for (let i = 0; i < array.length; i++) {
//   getRandomQuestion = Math.floor(Math.random() * array.length);
//   // console.log(array[getRandomQuestion].no);
// }

let score = 0;

function displayQuestion() {
  array.forEach(() => {
    let getRandomQuestion = Math.floor(Math.random() * array.length);

    console.log(
      "Id:" +
        array[getRandomQuestion].no +
        " Question:" +
        array[getRandomQuestion].question
    );
    const prompt = promptSync();
    let answer = prompt("Enter your answer:");
    if (array[getRandomQuestion].answer === answer) {
      score++;
    }
  });
  console.log("Your score is:" + score);
}

function getQuestion(answer) {
  array.forEach((a) => {
    if (a[getRandomQuestion].answer === answer) {
      score++;
    }
  });
}

displayQuestion();
