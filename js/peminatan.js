const questions = [
  { text: "I enjoy writing code and building apps from scratch.", field: "Programming" },
  { text: "I like solving logic problems and algorithms.", field: "Programming" },
  { text: "I’m curious about new programming languages.", field: "Programming" },
  { text: "I feel satisfied when a feature I code works perfectly.", field: "Programming" },
  { text: "I often code in my free time.", field: "Programming" },
  { text: "I’m interested in analyzing numbers and finding patterns.", field: "Data" },
  { text: "I enjoy working with Excel, Google Sheets, or analytics tools.", field: "Data" },
  { text: "I like reading reports and interpreting statistics.", field: "Data" },
  { text: "I’m curious how data can support decisions.", field: "Data" },
  { text: "I’ve tried visualizing data or creating dashboards.", field: "Data" },
  { text: "I’m interested in app or website interface design.", field: "UI/UX" },
  { text: "I enjoy making designs that look clean and user-friendly.", field: "UI/UX" },
  { text: "I care about the user’s experience using apps.", field: "UI/UX" },
  { text: "I often notice colors, layouts, and shapes in digital products.", field: "UI/UX" },
  { text: "I’ve created a prototype with Figma, Canva, or other design tools.", field: "UI/UX" },
  { text: "I’m curious about how devices connect with each other.", field: "Network" },
  { text: "I’m interested in networks, IPs, and cybersecurity.", field: "Network" },
  { text: "I enjoy configuring WiFi or LAN setups.", field: "Network" },
  { text: "I wonder how the internet transmits data.", field: "Network" },
  { text: "I like setting up routers or learning about switches.", field: "Network" }
];

let current = 0;
let scores = { Programming: 0, Data: 0, "UI/UX": 0, Network: 0 };
let answers = [];

function startTest() {
  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');

  document.body.classList.add('quiz-active');

  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById('questionText').innerText = `Question ${current + 1} of ${questions.length}: ${q.text}`;
  document.getElementById('options').innerHTML = `
    <label><input type="radio" name="answer" value="1" class="mr-2"> Strongly Disagree</label><br>
    <label><input type="radio" name="answer" value="2" class="mr-2"> Disagree</label><br>
    <label><input type="radio" name="answer" value="3" class="mr-2"> Neutral</label><br>
    <label><input type="radio" name="answer" value="4" class="mr-2"> Agree</label><br>
    <label><input type="radio" name="answer" value="5" class="mr-2"> Strongly Agree</label>
  `;

  if (answers[current]) {
    document.querySelector(`input[name="answer"][value="${answers[current]}"]`).checked = true;
  }
}

function nextQuestion() {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return alert("Please select an answer!");

  answers[current] = parseInt(selected.value);
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (current === 0) {
    // Kembali ke layar awal
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('startScreen').classList.remove('hidden');
    document.body.classList.remove('quiz-active');
  } else {
    current--;
    showQuestion();
  }
}


function showResult() {
  answers.forEach((value, index) => {
    const field = questions[index].field;
    scores[field] += value;
  });

  const highest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('hidden');
  document.getElementById('resultText').innerText = `You are most interested in: ${highest[0]}!`;
}
