// GAD-7 Div Generator
document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.getElementById("questions-container");

  const numberOfQuestions = 220;
  const questionsPerBlock = 10;

  const reverseMappingQuestions = new Set([
    7, 30, 35, 58, 87, 90, 96, 97, 98, 131, 142, 155, 164, 177, 210, 215,
  ]);

  for (
    let blockStart = 1;
    blockStart <= numberOfQuestions;
    blockStart += questionsPerBlock
  ) {
    const blockDiv = document.createElement("div");
    blockDiv.className = "questions PID5-questions";

    const blockHeader = document.createElement("h3");
    blockHeader.textContent = `${blockStart}-${Math.min(
      blockStart + questionsPerBlock - 1,
      numberOfQuestions
    )}`;
    blockDiv.appendChild(blockHeader);

    for (
      let i = blockStart;
      i < blockStart + questionsPerBlock && i <= numberOfQuestions;
      i++
    ) {
      const questionDiv = document.createElement("div");
      questionDiv.className = "input-group mb-3";

      const label = document.createElement("label");
      label.className = "input-group-text custom-label";
      label.setAttribute("for", `PID5-${i}`);
      label.textContent = `Q${i}`;

      const buttonGroup = document.createElement("div");
      buttonGroup.id = `PID5-${i}`;
      buttonGroup.className = "btn-group selection-cont";
      buttonGroup.setAttribute("role", "group");
      buttonGroup.setAttribute("aria-labelledby", `PID5-${i}Label`);

      for (let j = 0; j <= 3; j++) {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.className = "btn-check";
        radioInput.id = `PID5-${i}-${j}`;
        radioInput.name = `PID5-${i}`;
        radioInput.value = reverseMappingQuestions.has(i) ? 3 - j : j;
        radioInput.setAttribute("autocomplete", "off");

        const radioLabel = document.createElement("label");
        radioLabel.className =
          j === 3
            ? "btn btn-outline-primary custom-radio-last"
            : "btn btn-outline-primary custom-radio";
        radioLabel.setAttribute("for", `PID5-${i}-${j}`);
        radioLabel.textContent = j;

        buttonGroup.appendChild(radioInput);
        buttonGroup.appendChild(radioLabel);
      }

      questionDiv.appendChild(label);
      questionDiv.appendChild(buttonGroup);

      blockDiv.appendChild(questionDiv);

      if (i === numberOfQuestions) {
        const submitButton = document.createElement("button");
        submitButton.id = "PID5submitBtn";
        submitButton.className = "btn btn-primary mt-4";
        submitButton.textContent = "Submit";

        blockDiv.appendChild(submitButton);
      }
    }
    mainContainer.appendChild(blockDiv);
  }
});

// GAD 7 Calculator
document.getElementById("GADsubmitBtn").addEventListener("click", function () {
  let totalScore = 0;

  for (let i = 1; i <= 7; i++) {
    let selectedValue = document.querySelector(
      `input[name="GAD0${i}"]:checked`
    );
    if (selectedValue) {
      totalScore += parseInt(selectedValue.value) || 0;
    }
  }

  document.querySelector(".GAD-7-Total").innerText = totalScore;
  document.querySelector(".TRI-GAD-7-Total").innerText = totalScore;

  let GADanxietyLevel = "";
  if (totalScore >= 0 && totalScore <= 4) {
    GADanxietyLevel = "Minimal Anxiety";
  } else if (totalScore >= 5 && totalScore <= 9) {
    GADanxietyLevel = "Mild Anxiety";
  } else if (totalScore >= 10 && totalScore <= 14) {
    GADanxietyLevel = "Moderate Anxiety";
  } else if (totalScore >= 15 && totalScore <= 21) {
    GADanxietyLevel = "Severe Anxiety";
  }

  document.getElementById("GAD-7-translate").innerText = GADanxietyLevel;
  document.getElementById("TRI-GAD-7-translate").innerText = GADanxietyLevel;

  let GADq10Answer = document.getElementById("GAD08").value;
  document.getElementById("TRI-GAD-7-Q8-answer").innerText = GADq10Answer;
  document.getElementById("GAD-7-Q8-answer").innerText =
    "Q8 Answer: " + GADq10Answer;
});

//PHQ 9
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("PHQ-9-submitBtn")
    .addEventListener("click", function () {
      let PHQtotalScore = 0;

      for (let i = 1; i <= 9; i++) {
        let radioButtons = document.getElementsByName("PHQ-9-0" + i);
        for (let j = 0; j < radioButtons.length; j++) {
          if (radioButtons[j].checked) {
            PHQtotalScore += parseInt(radioButtons[j].value);
            break;
          }
        }
      }

      document.querySelector(".TRI-PHQ-9-Total").innerText = PHQtotalScore;
      document.querySelector(".PHQ-9-Total").innerText = PHQtotalScore;

      let PHQdepressionLevel = "";
      if (PHQtotalScore >= 0 && PHQtotalScore <= 4) {
        PHQdepressionLevel = "Minimal Depression";
      } else if (PHQtotalScore >= 5 && PHQtotalScore <= 9) {
        PHQdepressionLevel = "Mild Depression";
      } else if (PHQtotalScore >= 10 && PHQtotalScore <= 14) {
        PHQdepressionLevel = "Moderate Depression";
      } else if (PHQtotalScore >= 15 && PHQtotalScore <= 19) {
        PHQdepressionLevel = "Moderately Severe Depression";
      } else if (PHQtotalScore >= 20 && PHQtotalScore <= 27) {
        PHQdepressionLevel = "Severe Depression";
      }

      document.getElementById("PHQ-9-translate").innerText = PHQdepressionLevel;
      document.getElementById("TRI-PHQ-9-translate").innerText =
        PHQdepressionLevel;

      let PHQq10Answer = document.getElementById("PHQ-9-10").value;
      document.getElementById("PHQ-9-Q10-answer").innerText =
        "Q10 Answer: " + PHQq10Answer;
      document.getElementById("TRI-PHQ-9-Q10-answer").innerText = PHQq10Answer;
    });
});

//MDQ
document.addEventListener("DOMContentLoaded", function () {
  const mdqSpecialDiv = document.querySelector(".MDQ-special");
  const partOneDiv = document.createElement("div");
  partOneDiv.className = "questions MDQ-questions";

  for (let i = 1; i <= 13; i++) {
    const questionDiv = document.createElement("div");
    questionDiv.className = "input-group mb-3";

    const label = document.createElement("label");
    label.className = "input-group-text custom-label";
    label.setAttribute("for", `MDQ-${i < 10 ? "0" : ""}${i}`);
    label.textContent = `Q${i}`;

    const btnGroupDiv = document.createElement("div");
    btnGroupDiv.id = `MDQ-${i < 10 ? "0" : ""}${i}`;
    btnGroupDiv.className = "btn-group selection-cont";
    btnGroupDiv.role = "group";
    btnGroupDiv.setAttribute(
      "aria-labelledby",
      `MDQ-${i < 10 ? "0" : ""}${i}Label`
    );

    const noInput = document.createElement("input");
    noInput.type = "radio";
    noInput.className = "btn-check";
    noInput.id = `MDQ-${i < 10 ? "0" : ""}${i}-no`;
    noInput.name = `MDQ-${i < 10 ? "0" : ""}${i}`;
    noInput.value = "0";
    noInput.autocomplete = "off";

    const yesInput = document.createElement("input");
    yesInput.type = "radio";
    yesInput.className = "btn-check";
    yesInput.id = `MDQ-${i < 10 ? "0" : ""}${i}-yes`;
    yesInput.name = `MDQ-${i < 10 ? "0" : ""}${i}`;
    yesInput.value = "1";
    yesInput.autocomplete = "off";

    const noLabel = document.createElement("label");
    noLabel.className = "btn btn-outline-primary custom-radio-last";
    noLabel.setAttribute("for", `MDQ-${i < 10 ? "0" : ""}${i}-no`);
    noLabel.textContent = "No";

    const yesLabel = document.createElement("label");
    yesLabel.className = "btn btn-outline-primary custom-radio";
    yesLabel.setAttribute("for", `MDQ-${i < 10 ? "0" : ""}${i}-yes`);
    yesLabel.textContent = "Yes";

    btnGroupDiv.appendChild(noInput);
    btnGroupDiv.appendChild(noLabel);
    btnGroupDiv.appendChild(yesInput);
    btnGroupDiv.appendChild(yesLabel);

    questionDiv.appendChild(label);
    questionDiv.appendChild(btnGroupDiv);

    partOneDiv.appendChild(questionDiv);
  }

  const partTwoDiv = document.createElement("div");
  partTwoDiv.className = "questions MDQ-questions";

  const questionsData = [
    {
      id: "2",
      text: "Question #2",
      options: [
        { value: "No", text: "No" },
        { value: "Yes", text: "Yes" },
      ],
    },
    {
      id: "3",
      text: "Question #3",
      options: [
        { value: "No Problem", text: "NP" },
        { value: "Minor Problem", text: "MI" },
        { value: "Moderate Problem", text: "MO" },
        { value: "Serious Problem", text: "SP" },
      ],
    },
    {
      id: "4",
      text: "Question #4",
      options: [
        { value: "No", text: "No" },
        { value: "Yes", text: "Yes" },
      ],
    },
    {
      id: "5",
      text: "Question #5",
      options: [
        { value: "No", text: "No" },
        { value: "Yes", text: "Yes" },
      ],
    },
  ];

  questionsData.forEach((q) => {
    const h3 = document.createElement("h3");
    h3.textContent = q.text;

    const questionDiv = document.createElement("div");
    questionDiv.className = "input-group mb-3";

    const label = document.createElement("label");
    label.className = "input-group-text";
    label.setAttribute("for", `MDQ-${q.id}`);
    label.textContent = `#${q.id}`;

    const btnGroupDiv = document.createElement("div");
    btnGroupDiv.id = `MDQ-${q.id}`;
    btnGroupDiv.className = "btn-group selection-cont";
    btnGroupDiv.role = "group";
    btnGroupDiv.setAttribute("aria-labelledby", `MDQ-${q.id}Label`);

    q.options.forEach((option, index) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.className = "btn-check";
      input.id = `MDQ-${q.id}-${index}`;
      input.name = `MDQ-${q.id}`;
      input.value = option.value;
      input.autocomplete = "off";

      const label = document.createElement("label");
      label.className = `btn btn-outline-primary ${
        index === q.options.length - 1 ? "custom-radio-last" : "custom-radio"
      }`;
      label.setAttribute("for", `MDQ-${q.id}-${index}`);
      label.textContent = option.text;

      btnGroupDiv.appendChild(input);
      btnGroupDiv.appendChild(label);
    });

    questionDiv.appendChild(label);
    questionDiv.appendChild(btnGroupDiv);

    partTwoDiv.appendChild(h3);
    partTwoDiv.appendChild(questionDiv);
  });

  const submitBtn = document.createElement("button");
  submitBtn.id = "MDQsubmitBtn";
  submitBtn.className = "btn btn-primary";
  submitBtn.textContent = "Submit";
  partTwoDiv.appendChild(submitBtn);

  mdqSpecialDiv.innerHTML = "";
  mdqSpecialDiv.appendChild(partOneDiv);
  mdqSpecialDiv.appendChild(partTwoDiv);
});
document.addEventListener("DOMContentLoaded", function () {
  function countYesAnswers() {
    let yesCount = 0;
    for (let i = 1; i <= 13; i++) {
      let questionId = "MDQ-" + (i < 10 ? "0" + i : i);
      let selectedValue = document.querySelector(
        `div#${questionId} input[type="radio"]:checked`
      );
      if (selectedValue && selectedValue.value === "1") {
        yesCount++;
      }
    }
    return yesCount;
  }

  function updateQuestion2And3() {
    // Question 2
    let q2Value = document.querySelector(
      'div#MDQ-2 input[type="radio"]:checked'
    );
    let q2AnswerText = "";
    if (q2Value) {
      if (q2Value.value === "Yes") {
        q2AnswerText = "Mood disorder symptoms are present.";
      } else if (q2Value.value === "No") {
        q2AnswerText = "Low possibility of mood disorder.";
      }
    }
    document.getElementById("TRI-MDQ-2-translate").innerText = q2AnswerText;
    document.getElementById("MDQ-2-answer").innerText =
      "Q2: " + (q2Value ? q2Value.value : "-");
    document.getElementById("TRI-MDQ-2-answer").innerText =
      '"' + (q2Value ? q2Value.value : "-") + '"';

    // Question 3
    let q3Value = document.querySelector(
      'div#MDQ-3 input[type="radio"]:checked'
    );
    let q3AnswerText = "";
    if (q3Value) {
      if (
        q3Value.value === "Moderate Problem" ||
        q3Value.value === "Serious Problem"
      ) {
        q3AnswerText = "Mood disorder symptoms are present.";
      } else {
        q3AnswerText = "Low possibility of mood disorder.";
      }
    }
    document.getElementById("TRI-MDQ-3-translate").innerText = q3AnswerText;
    document.getElementById("MDQ-3-answer").innerText =
      "Q3: " + (q3Value ? q3Value.value : "-");
    document.getElementById("TRI-MDQ-3-answer").innerText =
      '"' + (q3Value ? q3Value.value : "-") + '"';
  }

  document
    .getElementById("MDQsubmitBtn")
    .addEventListener("click", function () {
      let yesCount = countYesAnswers();

      document.querySelector(".MDQ-Total").innerText = yesCount;
      document.querySelector(".TRI-MDQ-Total").innerText = yesCount;

      let MDQLevel;
      if (yesCount >= 0 && yesCount <= 6) {
        MDQLevel = "Low possibility of mood disorder.";
      } else if (yesCount >= 7) {
        MDQLevel = "Mood disorder symptoms are present.";
      }

      document.getElementById("MDQ-translate").innerText = MDQLevel;
      document.getElementById("TRI-MDQ-translate").innerText = MDQLevel;

      updateQuestion2And3();
    });
});

//Bipolar
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".bipolar-special");
  
    function createQuestion(questionNumber) {
      const questionDiv = document.createElement("div");
      questionDiv.className = "input-group mb-3";
  
      const label = document.createElement("label");
      label.setAttribute("for", `BIP-${questionNumber}`);
      label.className = "input-group-text custom-label";
      label.textContent = `Q${questionNumber}`;
      questionDiv.appendChild(label);
  
      const buttonGroup = document.createElement("div");
      buttonGroup.className = "btn-group selection-cont";
      buttonGroup.role = "group";
      buttonGroup.setAttribute("aria-labelledby", `BIP-${questionNumber}Label`);
  
      const options = [
        { id: `BIP-${questionNumber}-0`, value: 0, text: "NM" },
        { id: `BIP-${questionNumber}-1`, value: 1, text: "SM" },
        { id: `BIP-${questionNumber}-2`, value: 2, text: "MM" },
      ];
  
      options.forEach((option) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.className = "btn-check";
        input.id = option.id;
        input.name = `BIP-${questionNumber}`;
        input.value = option.value;
        input.autocomplete = "off";
  
        const label = document.createElement("label");
        label.className =
          option.id === `BIP-${questionNumber}-2`
            ? "btn btn-outline-primary custom-radio-last"
            : "btn btn-outline-primary custom-radio";
        label.setAttribute("for", option.id);
        label.textContent = option.text;
  
        buttonGroup.appendChild(input);
        buttonGroup.appendChild(label);
      });
  
      questionDiv.appendChild(buttonGroup);
      return questionDiv;
    }
  
    function createQuestions(start, end) {
      const questionsDiv = document.createElement("div");
      questionsDiv.className = "questions bipolar-questions";
      const header = document.createElement("h3");
      header.textContent = `Questions ${start}-${end}`;
      questionsDiv.appendChild(header);
  
      for (let i = start; i <= end; i++) {
        questionsDiv.appendChild(createQuestion(i));
      }
  
      return questionsDiv;
    }
  
    function createSubmitButton() {
      const buttonDiv = document.createElement("div");
      buttonDiv.className = "text-center mt-4";
      const button = document.createElement("button");
      button.id = "bipolar-submitBtn";
      button.className = "btn btn-primary";
      button.textContent = "Submit";
      buttonDiv.appendChild(button);
      return buttonDiv;
    }
  
    const questions1to9 = createQuestions(1, 9);
    const questions10to18 = createQuestions(10, 18);
    const questions19to27 = createQuestions(19, 27);
  
    container.appendChild(questions1to9);
    container.appendChild(questions10to18);
    container.appendChild(questions19to27);
    questions19to27.appendChild(createSubmitButton());
  
    document
      .getElementById("bipolar-submitBtn")
      .addEventListener("click", function () {
        let BipolartotalScore = 0;
        let allAnswered = true;
  
        for (let i = 1; i <= 27; i++) {
          const selectedOption = document.querySelector(
            `input[name="BIP-${i}"]:checked`
          );
          if (selectedOption) {
            BipolartotalScore += parseInt(selectedOption.value, 10);
          } else {
            allAnswered = false;
            break; 
          }
        }
  
        if (!allAnswered) {
          document.querySelector(".Bipolar-Total").innerText = "Please answer all questions.";
          document.querySelector(".TRI-Bipolar-Total").innerText = "";
          document.getElementById("Bipolar-translate").innerText = "";
          document.getElementById("TRI-Bipolar-translate").innerText = "";
          return;
        }
  
        function checkBipolarLevel() {
          let BipolarLevel = "Unknown";
          if (BipolartotalScore >= 0 && BipolartotalScore <= 21) {
            BipolarLevel = "Low possibility of Bipolar I or II disorder";
          } else if (BipolartotalScore >= 22 && BipolartotalScore <= 50) {
            BipolarLevel = "Suggest Possible Bipolar I or II Disorder";
          } else {
            BipolarLevel = "High possibility of Bipolar I or II disorder"; // Adjusted if needed
          }
  
          document.getElementById("Bipolar-translate").innerText = BipolarLevel;
          document.getElementById("TRI-Bipolar-translate").innerText = BipolarLevel;
        }
        checkBipolarLevel();
  
        document.querySelector(".Bipolar-Total").innerText =
          "Total: " + BipolartotalScore;
        document.querySelector(".TRI-Bipolar-Total").innerText =
          BipolartotalScore;
      });
});
  


//ADHD
const adhdSections = [
    { id: "ADHD1", title: "I.", numQuestions: 7, totalPoints: 21 },
    { id: "ADHD2", title: "II.", numQuestions: 8, totalPoints: 24 },
    { id: "ADHD3", title: "III.", numQuestions: 12, totalPoints: 36 },
    { id: "ADHD4", title: "IV.", numQuestions: 5, totalPoints: 15 },
    { id: "ADHD5", title: "V.", numQuestions: 11, totalPoints: 33 },
    { id: "ADHD6", title: "VI.", numQuestions: 9, totalPoints: 27 },
    { id: "ADHD7", title: "VII.", numQuestions: 5, totalPoints: 15 },
    { id: "ADHD8", title: "VIII.", numQuestions: 6, totalPoints: 18 },
  ];
  
  function generateADHDRadioButtons(questionId) {
    const labels = ["N", "J", "P", "V"];
    let html = "";
    for (let i = 0; i <= 3; i++) {
      html += `
        <input type="radio" class="btn-check" id="${questionId}-${i}" name="${questionId}" value="${i}" autocomplete="off">
        <label class="btn btn-outline-primary ${
          i === 3 ? "custom-radio-last" : "custom-radio"
        }" for="${questionId}-${i}">${labels[i]}</label>
      `;
    }
    return html;
  }
  
  function generateADHDQuestionBlocks(sectionId, numQuestions) {
    let html = "";
    for (let i = 1; i <= numQuestions; i++) {
      html += `
        <div class="input-group input-group-adhd mb-3">
          <label for="${sectionId}-${i}" class="input-group-text custom-label">Q${i}</label>
          <div id="${sectionId}-${i}" class="btn-group selection-cont selection-cont-adhd" role="group" aria-labelledby="${sectionId}-${i}Label">
            ${generateADHDRadioButtons(`${sectionId}-${i}`)}
          </div>
        </div>
      `;
    }
  
    if (sectionId === "ADHD8") {
      html += `<button id="ADHD-submitBtn" class="btn btn-primary">Submit</button>`;
    }
    return html;
  }
  
  function generateADHDQuestionnaire() {
    let html = "";
    adhdSections.forEach((section) => {
      html += `
        <div class="questions ADHD-questions">
          <h3>${section.title}</h3>
          ${generateADHDQuestionBlocks(section.id, section.numQuestions)}
        </div>
      `;
    });
    return html;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".ADHD-special").innerHTML = generateADHDQuestionnaire();
    
    document.getElementById("ADHD-submitBtn").addEventListener("click", function () {
      function calculateAndDisplayScores(
        part,
        prefix,
        maxQuestions,
        totalPoints,
        elementId,
        TRITotalid,
        TRIPercentageid,
        TRITranslateid
      ) {
        let totalScore = 0;
        for (let i = 1; i <= maxQuestions; i++) {
          let id = `${prefix}-${i}`;
          let selectedElement = document.querySelector(`input[name="${id}"]:checked`);
          if (selectedElement) {
            let value = parseInt(selectedElement.value) || 0;
            totalScore += value;
          } else {
            console.warn("Element with ID " + id + " not found.");
          }
        }
  
        let percentage = Math.round((totalScore / totalPoints) * 100);
        let adhdLevel = " ";
  
        if (percentage >= 0 && percentage <= 34) {
          adhdLevel = "-";
        } else if (percentage >= 35 && percentage <= 49) {
          adhdLevel = "Mild to Moderate Difficulties";
        } else if (percentage >= 50 && percentage <= 69) {
          adhdLevel = "Moderate to Severe Difficulties";
        } else if (percentage >= 70) {
          adhdLevel = "Major Interference";
        }
  
        let displayElement = document.getElementById(elementId);
        let displayElement2 = document.getElementById(TRITotalid);
        let displayElement3 = document.getElementById(TRIPercentageid);
        let displayElement4 = document.getElementById(TRITranslateid);
  
        // Display total score, percentage, and level of ADHD difficulty
        if (displayElement2) displayElement2.innerText = totalScore;
        if (displayElement3) displayElement3.innerText = percentage;
        if (displayElement4) displayElement4.innerText = adhdLevel;
  
        if (displayElement) {
          displayElement.innerText =
            part +
            " Scored " +
            totalScore +
            " out of " +
            totalPoints +
            " which has a percentage of " +
            percentage +
            "%";
        } else {
          console.warn("Display element with ID " + elementId + " not found.");
        }
        console.log(
          part +
            " " +
            prefix +
            " Scored " +
            totalScore +
            " out of " +
            totalPoints +
            " with a percentage of " +
            percentage +
            "%"
        );
      }
  
      // Calculate and display scores for each ADHD section
      calculateAndDisplayScores(
        "I.",
        "ADHD1",
        7,
        21,
        "ADHD1-translate",
        "TRI-ADHD-1-TOTAL",
        "TRI-ADHD1-PERCENT",
        "TRI-ADHD-1-TRANSLATE"
      );
      calculateAndDisplayScores(
        "II.",
        "ADHD2",
        8,
        24,
        "ADHD2-translate",
        "TRI-ADHD-2-TOTAL",
        "TRI-ADHD2-PERCENT",
        "TRI-ADHD-2-TRANSLATE"
      );
      calculateAndDisplayScores(
        "III.",
        "ADHD3",
        12,
        36,
        "ADHD3-translate",
        "TRI-ADHD-3-TOTAL",
        "TRI-ADHD3-PERCENT",
        "TRI-ADHD-3-TRANSLATE"
      );
      calculateAndDisplayScores(
        "IV.",
        "ADHD4",
        5,
        15,
        "ADHD4-translate",
        "TRI-ADHD-4-TOTAL",
        "TRI-ADHD4-PERCENT",
        "TRI-ADHD-4-TRANSLATE"
      );
      calculateAndDisplayScores(
        "V.",
        "ADHD5",
        11,
        33,
        "ADHD5-translate",
        "TRI-ADHD-5-TOTAL",
        "TRI-ADHD5-PERCENT",
        "TRI-ADHD-5-TRANSLATE"
      );
      calculateAndDisplayScores(
        "VI.",
        "ADHD6",
        9,
        27,
        "ADHD6-translate",
        "TRI-ADHD-6-TOTAL",
        "TRI-ADHD6-PERCENT",
        "TRI-ADHD-6-TRANSLATE"
      );
      calculateAndDisplayScores(
        "VII.",
        "ADHD7",
        5,
        15,
        "ADHD7-translate",
        "TRI-ADHD-7-TOTAL",
        "TRI-ADHD7-PERCENT",
        "TRI-ADHD-7-TRANSLATE"
      );
      calculateAndDisplayScores(
        "VIII.",
        "ADHD8",
        6,
        18,
        "ADHD8-translate",
        "TRI-ADHD-8-TOTAL",
        "TRI-ADHD8-PERCENT",
        "TRI-ADHD-8-TRANSLATE"
      );
    });
});
  











// Life Satisfaction
document.addEventListener("DOMContentLoaded", function () {
  const lifeSatisfactionDiv = document.querySelector(
    ".Life-Satisfaction-special"
  );
  const numberOfQuestions = 5;

  // Generate radio button inputs
  let htmlContent = "";
  for (let i = 1; i <= numberOfQuestions; i++) {
    htmlContent += `
            <div class="input-group input-group-life mb-3">
                <label class="input-group-text" for="Life-Satisfaction${i}">Q${i}</label>
                <div id="Life-Satisfaction${i}" class="btn-group selection-cont" role="group" aria-labelledby="Life-Satisfaction${i}Label">
                    <input type="radio" class="btn-check" id="Life-Satisfaction${i}-1" name="Life-Satisfaction${i}" value="1" autocomplete="off">
                    <label class="btn btn-outline-primary custom-radio" for="Life-Satisfaction${i}-1">1</label>
                    <input type="radio" class="btn-check" id="Life-Satisfaction${i}-2" name="Life-Satisfaction${i}" value="2" autocomplete="off">
                    <label class="btn btn-outline-primary custom-radio" for="Life-Satisfaction${i}-2">2</label>
                    <input type="radio" class="btn-check" id="Life-Satisfaction${i}-3" name="Life-Satisfaction${i}" value="3" autocomplete="off">
                    <label class="btn btn-outline-primary custom-radio" for="Life-Satisfaction${i}-3">3</label>
                    <input type="radio" class="btn-check" id="Life-Satisfaction${i}-4" name="Life-Satisfaction${i}" value="4" autocomplete="off">
                    <label class="btn btn-outline-primary custom-radio" for="Life-Satisfaction${i}-4">4</label>
                    <input type="radio" class="btn-check" id="Life-Satisfaction${i}-5" name="Life-Satisfaction${i}" value="5" autocomplete="off">
                    <label class="btn btn-outline-primary custom-radio" for="Life-Satisfaction${i}-5">5</label>
                    <input type="radio" class="btn-check" id="Life-Satisfaction${i}-6" name="Life-Satisfaction${i}" value="6" autocomplete="off">
                    <label class="btn btn-outline-primary custom-radio" for="Life-Satisfaction${i}-6">6</label>
                    <input type="radio" class="btn-check" id="Life-Satisfaction${i}-7" name="Life-Satisfaction${i}" value="7" autocomplete="off">
                    <label class="btn btn-outline-primary custom-radio-last" for="Life-Satisfaction${i}-7">7</label>
                </div>
            </div>
        `;
  }

  // Add the submit button at the end
  htmlContent += `
        <button id="Life-Satisfaction-submitBtn" class="btn btn-primary">Submit</button>
    `;

  // Insert the generated HTML into the div
  lifeSatisfactionDiv.innerHTML = htmlContent;

  // Existing script for handling the submit button click
  document
    .getElementById("Life-Satisfaction-submitBtn")
    .addEventListener("click", function () {
      let LifeSatisfactiontotalScore = 0;

      for (let i = 1; i <= numberOfQuestions; i++) {
        let selectedValue = document.querySelector(
          `div#Life-Satisfaction${i} input[type="radio"]:checked`
        );
        let value = parseInt(selectedValue ? selectedValue.value : 0) || 0;
        LifeSatisfactiontotalScore += value;
      }

      document.querySelector(".Life-Satisfaction-Total").innerText =
        LifeSatisfactiontotalScore;
      document.querySelector(".TRI-Life-Satisfaction-Total").innerText =
        LifeSatisfactiontotalScore;

      let LifeSatisfactionLevel = "";
      if (LifeSatisfactiontotalScore >= 0 && LifeSatisfactiontotalScore <= 9) {
        LifeSatisfactionLevel = "Extremely Dissatisfied";
      } else if (
        LifeSatisfactiontotalScore >= 10 &&
        LifeSatisfactiontotalScore <= 14
      ) {
        LifeSatisfactionLevel = "Dissatisfied";
      } else if (
        LifeSatisfactiontotalScore >= 15 &&
        LifeSatisfactiontotalScore <= 19
      ) {
        LifeSatisfactionLevel = "Slightly Dissatisfied";
      } else if (LifeSatisfactiontotalScore == 20) {
        LifeSatisfactionLevel = "Neutral";
      } else if (
        LifeSatisfactiontotalScore >= 21 &&
        LifeSatisfactiontotalScore <= 25
      ) {
        LifeSatisfactionLevel = "Slightly Satisfied";
      } else if (
        LifeSatisfactiontotalScore >= 26 &&
        LifeSatisfactiontotalScore <= 30
      ) {
        LifeSatisfactionLevel = "Satisfied";
      } else if (
        LifeSatisfactiontotalScore >= 31 &&
        LifeSatisfactiontotalScore <= 35
      ) {
        LifeSatisfactionLevel = "Extremely Satisfied";
      }

      document.getElementById("Life-Satisfaction-translate").innerText =
        LifeSatisfactionLevel;
      document.getElementById("TRI-Life-Satisfaction-translate").innerText =
        LifeSatisfactionLevel;
    });
});

//BAI
document.getElementById("BAI-submitBtn").addEventListener("click", function () {
  let BAItotalScore = 0;

  for (let i = 1; i <= 21; i++) {
    let selectedValue = document.querySelector(
      'input[name="BAI-' + i + '"]:checked'
    );

    // If a radio button is selected, get its value; otherwise, default to 0
    let value = selectedValue ? parseInt(selectedValue.value) : 0;
    BAItotalScore += value;
  }

  // Update the total score display
  document.querySelector(".BAI-Total").innerText = BAItotalScore;
  document.querySelector(".TRI-BAI-Total").innerText = BAItotalScore;

  // Determine the anxiety level based on the total score
  let BAILevel = "";
  if (BAItotalScore >= 0 && BAItotalScore <= 21) {
    BAILevel = "Low Anxiety";
  } else if (BAItotalScore >= 22 && BAItotalScore <= 35) {
    BAILevel = "Moderate Anxiety";
  } else if (BAItotalScore >= 36) {
    BAILevel = "Potential concerning levels of anxiety";
  }

  // Update the anxiety level display
  document.getElementById("BAI-translate").innerText = BAILevel;
  document.getElementById("TRI-BAI-translate").innerText = BAILevel;
});

//BDI
document.getElementById("BDI-submitBtn").addEventListener("click", function () {
  let BDItotalScore = 0;

  for (let i = 1; i <= 21; i++) {
    let selectedValue = document.querySelector(
      'input[name="BDI-' + i + '"]:checked'
    );

    // If a radio button is selected, get its value; otherwise, default to 0
    let value = selectedValue ? parseInt(selectedValue.value) : 0;
    BDItotalScore += value;
  }

  // Update the total score display
  document.querySelector(".BDI-Total").innerText = BDItotalScore;
  document.querySelector(".TRI-BDI-Total").innerText = BDItotalScore;

  // Determine the anxiety level based on the total score
  let BDILevel = "";
  if (BDItotalScore = 0) {
    BDILevel = "-";
  } else if (BDItotalScore >= 1 && BDItotalScore <= 10) {
    BDILevel = "These ups and downs are considered normal";
  } else if (BDItotalScore >= 11 && BDItotalScore <= 16) {
    BDILevel = "Mild mood disturbance";
  } else if (BDItotalScore >= 17 && BDItotalScore <= 20) {
    BDILevel = "Borderline clinical depression";
  } else if (BDItotalScore >= 21 && BDItotalScore <= 30) {
    BDILevel = "Moderate depression";
  } else if (BDItotalScore >= 31 && BDItotalScore <= 40) {
    BDILevel = "Severe depression";
  } else if (BDItotalScore >= 40) {
    BDILevel = "Extreme depression";
  }

  // Update the anxiety level display
  document.getElementById("BDI-translate").innerText = BDILevel;
  document.getElementById("TRI-BDI-translate").innerText = BDILevel;
});

//EQ
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("EQ-submitBtn")
    .addEventListener("click", function () {
      function calculateAndDisplayScores(
        part,
        prefix,
        totalElementId,
        translateElementId,
        additionalTextElementId
      ) {
        let totalScore = 0;
        for (let i = 1; i <= 10; i++) {
          let id = `${prefix}-${i}`;
          let selectedElement = document.querySelector(
            `input[name="${id}"]:checked`
          );
          if (selectedElement) {
            let value = parseInt(selectedElement.value) || 0;
            totalScore += value;
          }
        }

        let totalElement = document.getElementById(totalElementId);
        if (totalElement) {
          totalElement.innerText = totalScore;
        } else {
          console.warn(
            "Total score element with ID " + totalElementId + " not found."
          );
        }

        let additionalText;
        if (totalScore <= 24) {
          additionalText =
            "Area for enrichment: Requires attention and development";
        } else if (totalScore <= 34) {
          additionalText = "Effective functioning: Consider Strengthening";
        } else if (totalScore <= 40) {
          additionalText =
            "Enhanced skills: Use as leverage to develop weaker areas";
        } else {
          additionalText = "Score out of range";
        }

        let translateElement = document.getElementById(translateElementId);
        if (translateElement) {
          translateElement.innerText =
            part + " Scored " + totalScore + ": " + additionalText;
          console.log(part + " Scored " + totalScore + ": " + additionalText);
        } else {
          console.warn(
            "Translate element with ID " + translateElementId + " not found."
          );
        }

        let additionalTextElement = document.getElementById(
          additionalTextElementId
        );
        if (additionalTextElement) {
          additionalTextElement.innerText = additionalText;
        } else {
          console.warn(
            "Additional text element with ID " +
              additionalTextElementId +
              " not found."
          );
        }
      }

      // Process each part
      console.log("Processing EQEA");
      calculateAndDisplayScores(
        "EA",
        "EA",
        "TRI-TOTAL-EQ-EA",
        "EQEA-translate",
        "TRI-TRANSLATE-EQ-EA"
      );

      console.log("Processing EQEM");
      calculateAndDisplayScores(
        "EM",
        "EM",
        "TRI-TOTAL-EQ-EM",
        "EQEM-translate",
        "TRI-TRANSLATE-EQ-EM"
      );

      console.log("Processing EQSEA");
      calculateAndDisplayScores(
        "SEA",
        "SEA",
        "TRI-TOTAL-EQ-SEA",
        "EQSEA-translate",
        "TRI-TRANSLATE-EQ-SEA"
      );

      console.log("Processing EQRM");
      calculateAndDisplayScores(
        "RM",
        "RM",
        "TRI-TOTAL-EQ-RM",
        "EQRM-translate",
        "TRI-TRANSLATE-EQ-RM"
      );
    });
});

function calculateTotalScore(ids) {
  let totalScore = 0;
  let selectedValues = [];

  ids.forEach((id) => {
    let selectedRadio = document.querySelector(`input[name="${id}"]:checked`);
    if (selectedRadio) {
      let value = parseInt(selectedRadio.value) || 0;
      totalScore += value;
      selectedValues.push(value); // Store only the value for display
    } else {
      console.warn(`No selection found for ID "${id}".`);
    }
  });

  return { totalScore, selectedValues };
}

function calculateProratedValue(totalScore, numberOfIds) {
  if (numberOfIds === 0) return 0; // Avoid division by zero
  return Math.round((totalScore * 220) / numberOfIds);
}

function generateIdList(prefix, start, end) {
  let ids = [];
  for (let i = start; i <= end; i++) {
    ids.push(`${prefix}-${i}`);
  }
  return ids;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("PID5submitBtn")
    .addEventListener("click", function () {
      //#--------Total Score----------#//
      const idsToInclude = generateIdList("PID5", 1, 220); // Generate IDs from PID5-1 to PID5-220

      let result = calculateTotalScore(idsToInclude);
      let totalScore = result.totalScore;

      document.querySelector(".PID5-Total").innerText =
        "Total Score: " + totalScore;

      //#--------Anhedonia----------#//
      const Anhedonia = [
        "PID5-1",
        "PID5-23",
        "PID5-26",
        "PID5-30",
        "PID5-124",
        "PID5-155",
        "PID5-157",
        "PID5-189",
      ];

      let AnhedoniaResult = calculateTotalScore(Anhedonia);
      let AnhedoniaTotalScore = AnhedoniaResult.totalScore;
      let AnhedoniaSelectedValues = AnhedoniaResult.selectedValues;

      // Calculate prorated Anhedonia value
      let proratedAnhedonia = calculateProratedValue(
        AnhedoniaTotalScore,
        Anhedonia.length
      );

      // Calculate Anhedonia Average
      let averageAnhedonia =
        Anhedonia.length === 0 ? 0 : proratedAnhedonia / Anhedonia.length;

      // Display results
      document.getElementById("PID5-Anhedonia").innerText =
        "Anhedonia: " + AnhedoniaTotalScore;
      document.getElementById(
        "Anhedonia-Total-Partial-Raw-Facet-Score"
      ).innerText =
        AnhedoniaSelectedValues.join(", ") + " = " + AnhedoniaTotalScore;
      document.getElementById("Anhedonia-Prorated-Raw-Facet-Score").innerText =
        proratedAnhedonia;
      document.getElementById("Anhedonia-Average-Raw-Facet-Score").innerText =
        Math.round(averageAnhedonia);

      //#--------Anxiousness----------#//
      const Anxiousness = [
        "PID5-79",
        "PID5-93",
        "PID5-95",
        "PID5-96",
        "PID5-109",
        "PID5-110",
        "PID5-130",
        "PID5-141",
        "PID5-174",
      ];

      let AnxiousnessResult = calculateTotalScore(Anxiousness);
      let AnxiousnessTotalScore = AnxiousnessResult.totalScore;
      let AnxiousnessSelectedValues = AnxiousnessResult.selectedValues;

      // Calculate prorated Anxiousness value
      let proratedAnxiousness = calculateProratedValue(
        AnxiousnessTotalScore,
        Anxiousness.length
      );

      // Calculate Anxiousness Average
      let averageAnxiousness =
        Anxiousness.length === 0 ? 0 : proratedAnxiousness / Anxiousness.length;

      // Display results
      document.getElementById("PID5-Anxiousness").innerText =
        "Anxiousness: " + AnxiousnessTotalScore;
      document.getElementById(
        "Anxiousness-Total-Partial-Raw-Facet-Score"
      ).innerText =
        AnxiousnessSelectedValues.join(", ") + " = " + AnxiousnessTotalScore;
      document.getElementById(
        "Anxiousness-Prorated-Raw-Facet-Score"
      ).innerText = proratedAnxiousness;
      document.getElementById("Anxiousness-Average-Raw-Facet-Score").innerText =
        Math.round(averageAnxiousness);

      //#--------AttentionSeeking----------#//
      let AttentionSeeking = [
        "PID5-14",
        "PID5-43",
        "PID5-74",
        "PID5-111",
        "PID5-113",
        "PID5-173",
        "PID5-191",
        "PID5-211",
      ];

      let AttentionSeekingResult = calculateTotalScore(AttentionSeeking);
      let AttentionSeekingTotalScore = AttentionSeekingResult.totalScore;
      let AttentionSeekingSelectedValues =
        AttentionSeekingResult.selectedValues;

      // Calculate prorated AttentionSeeking value
      let proratedAttentionSeeking = calculateProratedValue(
        AttentionSeekingTotalScore,
        AttentionSeeking.length
      );

      // Calculate AttentionSeeking Average
      let averageAttentionSeeking =
        AttentionSeeking.length === 0
          ? 0
          : proratedAttentionSeeking / AttentionSeeking.length;

      // Display results
      document.getElementById("PID5-AttentionSeeking").innerText =
        "Attention Seeking: " + AttentionSeekingTotalScore;
      document.getElementById(
        "AttentionSeeking-Total-Partial-Raw-Facet-Score"
      ).innerText =
        AttentionSeekingSelectedValues.join(", ") +
        " = " +
        AttentionSeekingTotalScore;
      document.getElementById(
        "AttentionSeeking-Prorated-Raw-Facet-Score"
      ).innerText = proratedAttentionSeeking;
      document.getElementById(
        "AttentionSeeking-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageAttentionSeeking);

      //#--------Callousness----------#//
      const Callousness = [
        "PID5-11",
        "PID5-13",
        "PID5-19",
        "PID5-54",
        "PID5-72",
        "PID5-73",
        "PID5-90",
        "PID5-153",
        "PID5-166",
        "PID5-183",
        "PID5-198",
        "PID5-200",
        "PID5-207",
        "PID5-208",
      ];

      let CallousnessResult = calculateTotalScore(Callousness);
      let CallousnessTotalScore = CallousnessResult.totalScore;
      let CallousnessSelectedValues = CallousnessResult.selectedValues;

      // Calculate prorated Callousness value
      let proratedCallousness = calculateProratedValue(
        CallousnessTotalScore,
        Callousness.length
      );

      // Calculate Callousness Average
      let averageCallousness =
        Callousness.length === 0 ? 0 : proratedCallousness / Callousness.length;

      // Display results
      document.getElementById("PID5-Callousness").innerText =
        "Callousness: " + CallousnessTotalScore;
      document.getElementById(
        "Callousness-Total-Partial-Raw-Facet-Score"
      ).innerText =
        CallousnessSelectedValues.join(", ") + " = " + CallousnessTotalScore;
      document.getElementById(
        "Callousness-Prorated-Raw-Facet-Score"
      ).innerText = proratedCallousness;
      document.getElementById("Callousness-Average-Raw-Facet-Score").innerText =
        Math.round(averageCallousness);

      //#--------Deceitfulness----------#//
      const Deceitfulness = [
        "PID5-41",
        "PID5-53",
        "PID5-56",
        "PID5-76",
        "PID5-126",
        "PID5-134",
        "PID5-142",
        "PID5-206",
        "PID5-214",
        "PID5-218",
      ];

      let DeceitfulnessResult = calculateTotalScore(Deceitfulness);
      let DeceitfulnessTotalScore = DeceitfulnessResult.totalScore;
      let DeceitfulnessSelectedValues = DeceitfulnessResult.selectedValues;

      // Calculate prorated Deceitfulness value
      let proratedDeceitfulness = calculateProratedValue(
        DeceitfulnessTotalScore,
        Deceitfulness.length
      );

      // Calculate Deceitfulness Average
      let averageDeceitfulness =
        Deceitfulness.length === 0
          ? 0
          : proratedDeceitfulness / Deceitfulness.length;

      // Display results
      document.getElementById("PID5-Deceitfulness").innerText =
        "Deceitfulness: " + DeceitfulnessTotalScore;
      document.getElementById(
        "Deceitfulness-Total-Partial-Raw-Facet-Score"
      ).innerText =
        DeceitfulnessSelectedValues.join(", ") +
        " = " +
        DeceitfulnessTotalScore;
      document.getElementById(
        "Deceitfulness-Prorated-Raw-Facet-Score"
      ).innerText = proratedDeceitfulness;
      document.getElementById(
        "Deceitfulness-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageDeceitfulness);

      //#--------Depressivity----------#//
      const Depressivity = [
        "PID5-27",
        "PID5-61",
        "PID5-66",
        "PID5-81",
        "PID5-86",
        "PID5-104",
        "PID5-119",
        "PID5-148",
        "PID5-151",
        "PID5-163",
        "PID5-168",
        "PID5-169",
        "PID5-178",
        "PID5-212",
      ];

      let DepressivityResult = calculateTotalScore(Depressivity);
      let DepressivityTotalScore = DepressivityResult.totalScore;
      let DepressivitySelectedValues = DepressivityResult.selectedValues;

      // Calculate prorated Depressivity value
      let proratedDepressivity = calculateProratedValue(
        DepressivityTotalScore,
        Depressivity.length
      );

      // Calculate Depressivity Average
      let averageDepressivity =
        Depressivity.length === 0
          ? 0
          : proratedDepressivity / Depressivity.length;

      // Display results
      document.getElementById("PID5-Depressivity").innerText =
        "Depressivity: " + DepressivityTotalScore;
      document.getElementById(
        "Depressivity-Total-Partial-Raw-Facet-Score"
      ).innerText =
        DepressivitySelectedValues.join(", ") + " = " + DepressivityTotalScore;
      document.getElementById(
        "Depressivity-Prorated-Raw-Facet-Score"
      ).innerText = proratedDepressivity;
      document.getElementById(
        "Depressivity-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageDepressivity);

      //#--------Distractibility----------#//
      const Distractibility = [
        "PID5-6",
        "PID5-29",
        "PID5-47",
        "PID5-68",
        "PID5-88",
        "PID5-118",
        "PID5-132",
        "PID5-144",
        "PID5-199",
      ];

      let DistractibilityResult = calculateTotalScore(Distractibility);
      let DistractibilityTotalScore = DistractibilityResult.totalScore;
      let DistractibilitySelectedValues = DistractibilityResult.selectedValues;

      // Calculate prorated Distractibility value
      let proratedDistractibility = calculateProratedValue(
        DistractibilityTotalScore,
        Distractibility.length
      );

      // Calculate Distractibility Average
      let averageDistractibility =
        Distractibility.length === 0
          ? 0
          : proratedDistractibility / Distractibility.length;

      // Display results
      document.getElementById("PID5-Distractibility").innerText =
        "Distractibility: " + DistractibilityTotalScore;
      document.getElementById(
        "Distractibility-Total-Partial-Raw-Facet-Score"
      ).innerText =
        DistractibilitySelectedValues.join(", ") +
        " = " +
        DistractibilityTotalScore;
      document.getElementById(
        "Distractibility-Prorated-Raw-Facet-Score"
      ).innerText = proratedDistractibility;
      document.getElementById(
        "Distractibility-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageDistractibility);

      //#--------Eccentricity----------#//
      const Eccentricity = [
        "PID5-5",
        "PID5-21",
        "PID5-24",
        "PID5-25",
        "PID5-33",
        "PID5-52",
        "PID5-55",
        "PID5-70",
        "PID5-71",
        "PID5-152",
        "PID5-172",
        "PID5-185",
        "PID5-205",
      ];

      let EccentricityResult = calculateTotalScore(Eccentricity);
      let EccentricityTotalScore = EccentricityResult.totalScore;
      let EccentricitySelectedValues = EccentricityResult.selectedValues;

      // Calculate prorated Eccentricity value
      let proratedEccentricity = calculateProratedValue(
        EccentricityTotalScore,
        Eccentricity.length
      );

      // Calculate Eccentricity Average
      let averageEccentricity =
        Eccentricity.length === 0
          ? 0
          : proratedEccentricity / Eccentricity.length;

      // Display results
      document.getElementById("PID5-Eccentricity").innerText =
        "Eccentricity: " + EccentricityTotalScore;
      document.getElementById(
        "Eccentricity-Total-Partial-Raw-Facet-Score"
      ).innerText =
        EccentricitySelectedValues.join(", ") + " = " + EccentricityTotalScore;
      document.getElementById(
        "Eccentricity-Prorated-Raw-Facet-Score"
      ).innerText = proratedEccentricity;
      document.getElementById(
        "Eccentricity-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageEccentricity);

      //#--------EmotionalLability----------#//
      const EmotionalLability = [
        "PID5-18",
        "PID5-62",
        "PID5-102",
        "PID5-122",
        "PID5-138",
        "PID5-165",
        "PID5-181",
      ];

      let EmotionalLabilityResult = calculateTotalScore(EmotionalLability);
      let EmotionalLabilityTotalScore = EmotionalLabilityResult.totalScore;
      let EmotionalLabilitySelectedValues =
        EmotionalLabilityResult.selectedValues;

      // Calculate prorated EmotionalLability value
      let proratedEmotionalLability = calculateProratedValue(
        EmotionalLabilityTotalScore,
        EmotionalLability.length
      );

      // Calculate EmotionalLability Average
      let averageEmotionalLability =
        EmotionalLability.length === 0
          ? 0
          : proratedEmotionalLability / EmotionalLability.length;

      // Display results
      document.getElementById("PID5-EmotionalLability").innerText =
        "Emotional Lability: " + EmotionalLabilityTotalScore;
      document.getElementById(
        "EmotionalLability-Total-Partial-Raw-Facet-Score"
      ).innerText =
        EmotionalLabilitySelectedValues.join(", ") +
        " = " +
        EmotionalLabilityTotalScore;
      document.getElementById(
        "EmotionalLability-Prorated-Raw-Facet-Score"
      ).innerText = proratedEmotionalLability;
      document.getElementById(
        "EmotionalLability-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageEmotionalLability);

      //#--------Grandiosity----------#//
      const Grandiosity = [
        "PID5-40",
        "PID5-65",
        "PID5-114",
        "PID5-179",
        "PID5-187",
        "PID5-197",
      ];

      let GrandiosityResult = calculateTotalScore(Grandiosity);
      let GrandiosityTotalScore = GrandiosityResult.totalScore;
      let GrandiositySelectedValues = GrandiosityResult.selectedValues;

      // Calculate prorated Grandiosity value
      let proratedGrandiosity = calculateProratedValue(
        GrandiosityTotalScore,
        Grandiosity.length
      );

      // Calculate Grandiosity Average
      let averageGrandiosity =
        Grandiosity.length === 0 ? 0 : proratedGrandiosity / Grandiosity.length;

      // Display results
      document.getElementById("PID5-Grandiosity").innerText =
        "Grandiosity: " + GrandiosityTotalScore;
      document.getElementById(
        "Grandiosity-Total-Partial-Raw-Facet-Score"
      ).innerText =
        GrandiositySelectedValues.join(", ") + " = " + GrandiosityTotalScore;
      document.getElementById(
        "Grandiosity-Prorated-Raw-Facet-Score"
      ).innerText = proratedGrandiosity;
      document.getElementById("Grandiosity-Average-Raw-Facet-Score").innerText =
        Math.round(averageGrandiosity);

      //#--------Hostility----------#//
      const Hostility = [
        "PID5-28",
        "PID5-32",
        "PID5-38",
        "PID5-85",
        "PID5-92",
        "PID5-116",
        "PID5-158",
        "PID5-170",
        "PID5-188",
        "PID5-216",
      ];

      let HostilityResult = calculateTotalScore(Hostility);
      let HostilityTotalScore = HostilityResult.totalScore;
      let HostilitySelectedValues = HostilityResult.selectedValues;

      // Calculate prorated Hostility value
      let proratedHostility = calculateProratedValue(
        HostilityTotalScore,
        Hostility.length
      );

      // Calculate Hostility Average
      let averageHostility =
        Hostility.length === 0 ? 0 : proratedHostility / Hostility.length;

      // Display results
      document.getElementById("PID5-Hostility").innerText =
        "Hostility: " + HostilityTotalScore;
      document.getElementById(
        "Hostility-Total-Partial-Raw-Facet-Score"
      ).innerText =
        HostilitySelectedValues.join(", ") + " = " + HostilityTotalScore;
      document.getElementById("Hostility-Prorated-Raw-Facet-Score").innerText =
        proratedHostility;
      document.getElementById("Hostility-Average-Raw-Facet-Score").innerText =
        Math.round(averageHostility);

      //#--------Impulsivity----------#//
      const Impulsivity = [
        "PID5-4",
        "PID5-16",
        "PID5-17",
        "PID5-22",
        "PID5-58",
        "PID5-204",
      ];

      let ImpulsivityResult = calculateTotalScore(Impulsivity);
      let ImpulsivityTotalScore = ImpulsivityResult.totalScore;
      let ImpulsivitySelectedValues = ImpulsivityResult.selectedValues;

      // Calculate prorated Impulsivity value
      let proratedImpulsivity = calculateProratedValue(
        ImpulsivityTotalScore,
        Impulsivity.length
      );

      // Calculate Impulsivity Average
      let averageImpulsivity =
        Impulsivity.length === 0 ? 0 : proratedImpulsivity / Impulsivity.length;

      // Display results
      document.getElementById("PID5-Impulsivity").innerText =
        "Impulsivity: " + ImpulsivityTotalScore;
      document.getElementById(
        "Impulsivity-Total-Partial-Raw-Facet-Score"
      ).innerText =
        ImpulsivitySelectedValues.join(", ") + " = " + ImpulsivityTotalScore;
      document.getElementById(
        "Impulsivity-Prorated-Raw-Facet-Score"
      ).innerText = proratedImpulsivity;
      document.getElementById("Impulsivity-Average-Raw-Facet-Score").innerText =
        Math.round(averageImpulsivity);

      //#--------IntimacyAvoidance----------#//
      const IntimacyAvoidance = [
        "PID5-89",
        "PID5-97",
        "PID5-108",
        "PID5-120",
        "PID5-145",
        "PID5-203",
      ];

      let IntimacyAvoidanceResult = calculateTotalScore(IntimacyAvoidance);
      let IntimacyAvoidanceTotalScore = IntimacyAvoidanceResult.totalScore;
      let IntimacyAvoidanceSelectedValues =
        IntimacyAvoidanceResult.selectedValues;

      // Calculate prorated IntimacyAvoidance value
      let proratedIntimacyAvoidance = calculateProratedValue(
        IntimacyAvoidanceTotalScore,
        IntimacyAvoidance.length
      );

      // Calculate IntimacyAvoidance Average
      let averageIntimacyAvoidance =
        IntimacyAvoidance.length === 0
          ? 0
          : proratedIntimacyAvoidance / IntimacyAvoidance.length;

      // Display results
      document.getElementById("PID5-IntimacyAvoidance").innerText =
        "Intimacy Avoidance: " + IntimacyAvoidanceTotalScore;
      document.getElementById(
        "IntimacyAvoidance-Total-Partial-Raw-Facet-Score"
      ).innerText =
        IntimacyAvoidanceSelectedValues.join(", ") +
        " = " +
        IntimacyAvoidanceTotalScore;
      document.getElementById(
        "IntimacyAvoidance-Prorated-Raw-Facet-Score"
      ).innerText = proratedIntimacyAvoidance;
      document.getElementById(
        "IntimacyAvoidance-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageIntimacyAvoidance);

      //#--------Irresponsibility----------#//
      const Irresponsibility = [
        "PID5-31",
        "PID5-129",
        "PID5-156",
        "PID5-160",
        "PID5-171",
        "PID5-201",
        "PID5-210",
      ];

      let IrresponsibilityResult = calculateTotalScore(Irresponsibility);
      let IrresponsibilityTotalScore = IrresponsibilityResult.totalScore;
      let IrresponsibilitySelectedValues =
        IrresponsibilityResult.selectedValues;

      // Calculate prorated Irresponsibility value
      let proratedIrresponsibility = calculateProratedValue(
        IrresponsibilityTotalScore,
        Irresponsibility.length
      );

      // Calculate Irresponsibility Average
      let averageIrresponsibility =
        Irresponsibility.length === 0
          ? 0
          : proratedIrresponsibility / Irresponsibility.length;

      // Display results
      document.getElementById("PID5-Irresponsibility").innerText =
        "Irresponsibility: " + IrresponsibilityTotalScore;
      document.getElementById(
        "Irresponsibility-Total-Partial-Raw-Facet-Score"
      ).innerText =
        IrresponsibilitySelectedValues.join(", ") +
        " = " +
        IrresponsibilityTotalScore;
      document.getElementById(
        "Irresponsibility-Prorated-Raw-Facet-Score"
      ).innerText = proratedIrresponsibility;
      document.getElementById(
        "Irresponsibility-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageIrresponsibility);

      //#--------Manipulativeness----------#//
      const Manipulativeness = [
        "PID5-107",
        "PID5-125",
        "PID5-162",
        "PID5-180",
        "PID5-219",
      ];

      let ManipulativenessResult = calculateTotalScore(Manipulativeness);
      let ManipulativenessTotalScore = ManipulativenessResult.totalScore;
      let ManipulativenessSelectedValues =
        ManipulativenessResult.selectedValues;

      // Calculate prorated Manipulativeness value
      let proratedManipulativeness = calculateProratedValue(
        ManipulativenessTotalScore,
        Manipulativeness.length
      );

      // Calculate Manipulativeness Average
      let averageManipulativeness =
        Manipulativeness.length === 0
          ? 0
          : proratedManipulativeness / Manipulativeness.length;

      // Display results
      document.getElementById("PID5-Manipulativeness").innerText =
        "Manipulativeness: " + ManipulativenessTotalScore;
      document.getElementById(
        "Manipulativeness-Total-Partial-Raw-Facet-Score"
      ).innerText =
        ManipulativenessSelectedValues.join(", ") +
        " = " +
        ManipulativenessTotalScore;
      document.getElementById(
        "Manipulativeness-Prorated-Raw-Facet-Score"
      ).innerText = proratedManipulativeness;
      document.getElementById(
        "Manipulativeness-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageManipulativeness);

      //#--------PerceptualDysregulation----------#//
      const PerceptualDysregulation = [
        "PID5-36",
        "PID5-37",
        "PID5-42",
        "PID5-44",
        "PID5-59",
        "PID5-77",
        "PID5-83",
        "PID5-154",
        "PID5-192",
        "PID5-193",
        "PID5-213",
        "PID5-217",
      ];

      let PerceptualDysregulationResult = calculateTotalScore(
        PerceptualDysregulation
      );
      let PerceptualDysregulationTotalScore =
        PerceptualDysregulationResult.totalScore;
      let PerceptualDysregulationSelectedValues =
        PerceptualDysregulationResult.selectedValues;

      // Calculate prorated PerceptualDysregulation value
      let proratedPerceptualDysregulation = calculateProratedValue(
        PerceptualDysregulationTotalScore,
        PerceptualDysregulation.length
      );

      // Calculate PerceptualDysregulation Average
      let averagePerceptualDysregulation =
        PerceptualDysregulation.length === 0
          ? 0
          : proratedPerceptualDysregulation / PerceptualDysregulation.length;

      // Display results
      document.getElementById("PID5-PerceptualDysregulation").innerText =
        "Perceptual Dysregulation: " + PerceptualDysregulationTotalScore;
      document.getElementById(
        "PerceptualDysregulation-Total-Partial-Raw-Facet-Score"
      ).innerText =
        PerceptualDysregulationSelectedValues.join(", ") +
        " = " +
        PerceptualDysregulationTotalScore;
      document.getElementById(
        "PerceptualDysregulation-Prorated-Raw-Facet-Score"
      ).innerText = proratedPerceptualDysregulation;
      document.getElementById(
        "PerceptualDysregulation-Average-Raw-Facet-Score"
      ).innerText = Math.round(averagePerceptualDysregulation);

      //#--------Perseveration----------#//
      const Perseveration = [
        "PID5-46",
        "PID5-51",
        "PID5-60",
        "PID5-78",
        "PID5-80",
        "PID5-100",
        "PID5-121",
        "PID5-128",
        "PID5-137",
      ];

      let PerseverationResult = calculateTotalScore(Perseveration);
      let PerseverationTotalScore = PerseverationResult.totalScore;
      let PerseverationSelectedValues = PerseverationResult.selectedValues;

      // Calculate prorated Perseveration value
      let proratedPerseveration = calculateProratedValue(
        PerseverationTotalScore,
        Perseveration.length
      );

      // Calculate Perseveration Average
      let averagePerseveration =
        Perseveration.length === 0
          ? 0
          : proratedPerseveration / Perseveration.length;

      // Display results
      document.getElementById("PID5-Perseveration").innerText =
        "Perseveration: " + PerseverationTotalScore;
      document.getElementById(
        "Perseveration-Total-Partial-Raw-Facet-Score"
      ).innerText =
        PerseverationSelectedValues.join(", ") +
        " = " +
        PerseverationTotalScore;
      document.getElementById(
        "Perseveration-Prorated-Raw-Facet-Score"
      ).innerText = proratedPerseveration;
      document.getElementById(
        "Perseveration-Average-Raw-Facet-Score"
      ).innerText = Math.round(averagePerseveration);

      //#--------RestrictedAffectivity----------#//
      const RestrictedAffectivity = [
        "PID5-8",
        "PID5-45",
        "PID5-84",
        "PID5-91",
        "PID5-101",
        "PID5-167",
        "PID5-184",
      ];

      let RestrictedAffectivityResult = calculateTotalScore(
        RestrictedAffectivity
      );
      let RestrictedAffectivityTotalScore =
        RestrictedAffectivityResult.totalScore;
      let RestrictedAffectivitySelectedValues =
        RestrictedAffectivityResult.selectedValues;

      // Calculate prorated RestrictedAffectivity value
      let proratedRestrictedAffectivity = calculateProratedValue(
        RestrictedAffectivityTotalScore,
        RestrictedAffectivity.length
      );

      // Calculate RestrictedAffectivity Average
      let averageRestrictedAffectivity =
        RestrictedAffectivity.length === 0
          ? 0
          : proratedRestrictedAffectivity / RestrictedAffectivity.length;

      // Display results
      document.getElementById("PID5-RestrictedAffectivity").innerText =
        "Restricted Affectivity: " + RestrictedAffectivityTotalScore;
      document.getElementById(
        "RestrictedAffectivity-Total-Partial-Raw-Facet-Score"
      ).innerText =
        RestrictedAffectivitySelectedValues.join(", ") +
        " = " +
        RestrictedAffectivityTotalScore;
      document.getElementById(
        "RestrictedAffectivity-Prorated-Raw-Facet-Score"
      ).innerText = proratedRestrictedAffectivity;
      document.getElementById(
        "RestrictedAffectivity-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageRestrictedAffectivity);

      //#--------RigidPerfectionism----------#//
      const RigidPerfectionism = [
        "PID5-34",
        "PID5-49",
        "PID5-105",
        "PID5-115",
        "PID5-123",
        "PID5-135",
        "PID5-140",
        "PID5-176",
        "PID5-196",
        "PID5-22",
      ];

      let RigidPerfectionismResult = calculateTotalScore(RigidPerfectionism);
      let RigidPerfectionismTotalScore = RigidPerfectionismResult.totalScore;
      let RigidPerfectionismSelectedValues =
        RigidPerfectionismResult.selectedValues;

      // Calculate prorated RigidPerfectionism value
      let proratedRigidPerfectionism = calculateProratedValue(
        RigidPerfectionismTotalScore,
        RigidPerfectionism.length
      );

      // Calculate RigidPerfectionism Average
      let averageRigidPerfectionism =
        RigidPerfectionism.length === 0
          ? 0
          : proratedRigidPerfectionism / RigidPerfectionism.length;

      // Display results
      document.getElementById("PID5-RigidPerfectionism").innerText =
        "Rigid Perfectionism: " + RigidPerfectionismTotalScore;
      document.getElementById(
        "RigidPerfectionism-Total-Partial-Raw-Facet-Score"
      ).innerText =
        RigidPerfectionismSelectedValues.join(", ") +
        " = " +
        RigidPerfectionismTotalScore;
      document.getElementById(
        "RigidPerfectionism-Prorated-Raw-Facet-Score"
      ).innerText = proratedRigidPerfectionism;
      document.getElementById(
        "RigidPerfectionism-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageRigidPerfectionism);

      //#--------Risktaking----------#//
      const Risktaking = [
        "PID5-3",
        "PID5-7",
        "PID5-35",
        "PID5-39",
        "PID5-48",
        "PID5-67",
        "PID5-69",
        "PID5-87",
        "PID5-98",
        "PID5-112",
        "PID5-159",
        "PID5-164",
        "PID5-195",
        "PID5-215",
      ];

      let RisktakingResult = calculateTotalScore(Risktaking);
      let RisktakingTotalScore = RisktakingResult.totalScore;
      let RisktakingSelectedValues = RisktakingResult.selectedValues;

      // Calculate prorated Risktaking value
      let proratedRisktaking = calculateProratedValue(
        RisktakingTotalScore,
        Risktaking.length
      );

      // Calculate Risktaking Average
      let averageRisktaking =
        Risktaking.length === 0 ? 0 : proratedRisktaking / Risktaking.length;

      // Display results
      document.getElementById("PID5-Risktaking").innerText =
        "Risk taking: " + RisktakingTotalScore;
      document.getElementById(
        "Risktaking-Total-Partial-Raw-Facet-Score"
      ).innerText =
        RisktakingSelectedValues.join(", ") + " = " + RisktakingTotalScore;
      document.getElementById("Risktaking-Prorated-Raw-Facet-Score").innerText =
        proratedRisktaking;
      document.getElementById("Risktaking-Average-Raw-Facet-Score").innerText =
        Math.round(averageRisktaking);

      //#--------SeparationInsecurity----------#//
      const SeparationInsecurity = [
        "PID5-12",
        "PID5-50",
        "PID5-57",
        "PID5-64",
        "PID5-127",
        "PID5-149",
        "PID5-175",
      ];

      let SeparationInsecurityResult =
        calculateTotalScore(SeparationInsecurity);
      let SeparationInsecurityTotalScore =
        SeparationInsecurityResult.totalScore;
      let SeparationInsecuritySelectedValues =
        SeparationInsecurityResult.selectedValues;

      // Calculate prorated SeparationInsecurity value
      let proratedSeparationInsecurity = calculateProratedValue(
        SeparationInsecurityTotalScore,
        SeparationInsecurity.length
      );

      // Calculate SeparationInsecurity Average
      let averageSeparationInsecurity =
        SeparationInsecurity.length === 0
          ? 0
          : proratedSeparationInsecurity / SeparationInsecurity.length;

      // Display results
      document.getElementById("PID5-SeparationInsecurity").innerText =
        "Separation Insecurity: " + SeparationInsecurityTotalScore;
      document.getElementById(
        "SeparationInsecurity-Total-Partial-Raw-Facet-Score"
      ).innerText =
        SeparationInsecuritySelectedValues.join(", ") +
        " = " +
        SeparationInsecurityTotalScore;
      document.getElementById(
        "SeparationInsecurity-Prorated-Raw-Facet-Score"
      ).innerText = proratedSeparationInsecurity;
      document.getElementById(
        "SeparationInsecurity-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageSeparationInsecurity);

      //#--------Submissiveness----------#//
      const Submissiveness = ["PID5-9", "PID5-15", "PID5-63", "PID5-202"];

      let SubmissivenessResult = calculateTotalScore(Submissiveness);
      let SubmissivenessTotalScore = SubmissivenessResult.totalScore;
      let SubmissivenessSelectedValues = SubmissivenessResult.selectedValues;

      // Calculate prorated Submissiveness value
      let proratedSubmissiveness = calculateProratedValue(
        SubmissivenessTotalScore,
        Submissiveness.length
      );

      // Calculate Submissiveness Average
      let averageSubmissiveness =
        Submissiveness.length === 0
          ? 0
          : proratedSubmissiveness / Submissiveness.length;

      // Display results
      document.getElementById("PID5-Submissiveness").innerText =
        "Submissiveness: " + SubmissivenessTotalScore;
      document.getElementById(
        "Submissiveness-Total-Partial-Raw-Facet-Score"
      ).innerText =
        SubmissivenessSelectedValues.join(", ") +
        " = " +
        SubmissivenessTotalScore;
      document.getElementById(
        "Submissiveness-Prorated-Raw-Facet-Score"
      ).innerText = proratedSubmissiveness;
      document.getElementById(
        "Submissiveness-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageSubmissiveness);

      //#--------Suspiciousness----------#//
      const Suspiciousness = [
        "PID5-2",
        "PID5-103",
        "PID5-117",
        "PID5-131",
        "PID5-133",
        "PID5-177",
        "PID5-190",
      ];

      let SuspiciousnessResult = calculateTotalScore(Suspiciousness);
      let SuspiciousnessTotalScore = SuspiciousnessResult.totalScore;
      let SuspiciousnessSelectedValues = SuspiciousnessResult.selectedValues;

      // Calculate prorated Suspiciousness value
      let proratedSuspiciousness = calculateProratedValue(
        SuspiciousnessTotalScore,
        Suspiciousness.length
      );

      // Calculate Suspiciousness Average
      let averageSuspiciousness =
        Suspiciousness.length === 0
          ? 0
          : proratedSuspiciousness / Suspiciousness.length;

      // Display results
      document.getElementById("PID5-Suspiciousness").innerText =
        "Suspiciousness: " + SuspiciousnessTotalScore;
      document.getElementById(
        "Suspiciousness-Total-Partial-Raw-Facet-Score"
      ).innerText =
        SuspiciousnessSelectedValues.join(", ") +
        " = " +
        SuspiciousnessTotalScore;
      document.getElementById(
        "Suspiciousness-Prorated-Raw-Facet-Score"
      ).innerText = proratedSuspiciousness;
      document.getElementById(
        "Suspiciousness-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageSuspiciousness);

      //#--------Unusualbeliefsandexperiences----------#//
      const Unusualbeliefsandexperiences = [
        "PID5-94",
        "PID5-99",
        "PID5-106",
        "PID5-139",
        "PID5-143",
        "PID5-150",
        "PID5-194",
        "PID5-209",
      ];

      let UnusualbeliefsandexperiencesResult = calculateTotalScore(
        Unusualbeliefsandexperiences
      );
      let UnusualbeliefsTotalScore =
        UnusualbeliefsandexperiencesResult.totalScore;
      let UnusualbeliefsandexperiencesSelectedValues =
        UnusualbeliefsandexperiencesResult.selectedValues;

      // Calculate prorated Unusualbeliefsandexperiences value
      let proratedUnusualbeliefsandexperiences = calculateProratedValue(
        UnusualbeliefsTotalScore,
        Unusualbeliefsandexperiences.length
      );

      // Calculate Unusualbeliefsandexperiences Average
      let averageUnusualbeliefsandexperiences =
        Unusualbeliefsandexperiences.length === 0
          ? 0
          : proratedUnusualbeliefsandexperiences /
            Unusualbeliefsandexperiences.length;

      // Display results
      document.getElementById("PID5-Unusualbeliefsandexperiences").innerText =
        "Unusual beliefs and experiences: " + UnusualbeliefsTotalScore;
      document.getElementById(
        "Unusualbeliefsandexperiences-Total-Partial-Raw-Facet-Score"
      ).innerText =
        UnusualbeliefsandexperiencesSelectedValues.join(", ") +
        " = " +
        UnusualbeliefsTotalScore;
      document.getElementById(
        "Unusualbeliefsandexperiences-Prorated-Raw-Facet-Score"
      ).innerText = proratedUnusualbeliefsandexperiences;
      document.getElementById(
        "Unusualbeliefsandexperiences-Average-Raw-Facet-Score"
      ).innerText = Math.round(averageUnusualbeliefsandexperiences);

      //#--------Withdrawal----------#//
      const Withdrawal = [
        "PID5-10",
        "PID5-20",
        "PID5-75",
        "PID5-82",
        "PID5-136",
        "PID5-146",
        "PID5-147",
        "PID5-161",
        "PID5-182",
        "PID5-186",
      ];

      let WithdrawalResult = calculateTotalScore(Withdrawal);
      let WithdrawalTotalScore = WithdrawalResult.totalScore;
      let WithdrawalSelectedValues = WithdrawalResult.selectedValues;

      // Calculate prorated Withdrawal value
      let proratedWithdrawal = calculateProratedValue(
        WithdrawalTotalScore,
        Withdrawal.length
      );

      // Calculate Withdrawal Average
      let averageWithdrawal =
        Withdrawal.length === 0 ? 0 : proratedWithdrawal / Withdrawal.length;

      // Display results
      document.getElementById("PID5-Withdrawal").innerText =
        "Withdrawal: " + WithdrawalTotalScore;
      document.getElementById(
        "Withdrawal-Total-Partial-Raw-Facet-Score"
      ).innerText =
        WithdrawalSelectedValues.join(", ") + " = " + WithdrawalTotalScore;
      document.getElementById("Withdrawal-Prorated-Raw-Facet-Score").innerText =
        proratedWithdrawal;
      document.getElementById("Withdrawal-Average-Raw-Facet-Score").innerText =
        Math.round(averageWithdrawal);

      let negativeAffect =
        averageEmotionalLability +
        averageAnxiousness +
        averageSeparationInsecurity;

      let detachment =
        averageWithdrawal + averageAnhedonia + averageIntimacyAvoidance;

      let antagonism =
        averageManipulativeness + averageDeceitfulness + averageGrandiosity;

      let disinhibition =
        averageIrresponsibility + averageImpulsivity + averageDistractibility;

      let psychoticism =
        averageUnusualbeliefsandexperiences +
        averageEccentricity +
        averagePerceptualDysregulation;

      document.getElementById("TRI-negativeAffect").innerText =
        negativeAffect.toFixed(1);
      document.getElementById("TRI-detachment").innerText =
        detachment.toFixed(1);
      document.getElementById("TRI-antagonism").innerText =
        antagonism.toFixed(1);
      document.getElementById("TRI-disinhibition").innerText =
        disinhibition.toFixed(1);
      document.getElementById("TRI-psychoticism").innerText =
        psychoticism.toFixed(1);

      document.getElementById(
        "NegativeAffectTotalofAverageFacetScores"
      ).innerText =
        EmotionalLabilityTotalScore +
        ", " +
        AnxiousnessTotalScore +
        ", " +
        SeparationInsecurityTotalScore +
        " = " +
        negativeAffect.toFixed(1);
      document.getElementById(
        "NegativeAffectOverallAverageofFacetScores"
      ).innerText = (negativeAffect / 3).toFixed(1);
      document.getElementById(
        "TRI-NegativeAffectOverallAverageofFacetScores"
      ).innerText = (negativeAffect / 3).toFixed(1);

      document.getElementById("DetachmentTotalofAverageFacetScores").innerText =
        WithdrawalTotalScore +
        ", " +
        AnhedoniaTotalScore +
        ", " +
        IntimacyAvoidanceTotalScore +
        " = " +
        detachment.toFixed(1);
      document.getElementById(
        "DetachmentOverallAverageofFacetScores"
      ).innerText = (detachment / 3).toFixed(1);
      document.getElementById(
        "TRI-DetachmentOverallAverageofFacetScores"
      ).innerText = (detachment / 3).toFixed(1);

      document.getElementById("AntagonismTotalofAverageFacetScores").innerText =
        ManipulativenessTotalScore +
        ", " +
        DeceitfulnessTotalScore +
        ", " +
        GrandiosityTotalScore +
        " = " +
        antagonism.toFixed(1);
      document.getElementById(
        "AntagonismOverallAverageofFacetScores"
      ).innerText = (antagonism / 3).toFixed(1);
      document.getElementById(
        "TRI-AntagonismOverallAverageofFacetScores"
      ).innerText = (antagonism / 3).toFixed(1);

      document.getElementById(
        "DisinhibitionTotalofAverageFacetScores"
      ).innerText =
        IrresponsibilityTotalScore +
        ", " +
        ImpulsivityTotalScore +
        ", " +
        DistractibilityTotalScore +
        " = " +
        disinhibition.toFixed(1);
      document.getElementById(
        "DisinhibitionOverallAverageofFacetScores"
      ).innerText = (disinhibition / 3).toFixed(1);
      document.getElementById(
        "TRI-DisinhibitionOverallAverageofFacetScores"
      ).innerText = (disinhibition / 3).toFixed(1);

      document.getElementById(
        "PsychoticismTotalofAverageFacetScores"
      ).innerText =
        UnusualbeliefsTotalScore +
        ", " +
        EccentricityTotalScore +
        ", " +
        PerceptualDysregulationTotalScore +
        " = " +
        psychoticism.toFixed(1);
      document.getElementById(
        "PsychoticismOverallAverageofFacetScores"
      ).innerText = (psychoticism / 3).toFixed(1);
      document.getElementById(
        "TRI-PsychoticismOverallAverageofFacetScores"
      ).innerText = (psychoticism / 3).toFixed(1);
    });
});

//PintTable
function handleInputChange() {
  var fullnameInput = document.getElementById("fullname");
  var name = fullnameInput.value.trim();

  if (name === "") {
    fullnameInput.classList.remove("is-valid");
    fullnameInput.classList.add("is-invalid");
  } else {
    fullnameInput.classList.remove("is-invalid");
    fullnameInput.classList.add("is-valid");
  }
}
function printTable() {
  var fullnameInput = document.getElementById("fullname");
  var name = fullnameInput.value.trim();

  // Validate the input before printing
  if (name === "") {
    fullnameInput.classList.remove("is-valid");
    fullnameInput.classList.add("is-invalid");
    alert("Please enter a full name before printing.");
    return; // Exit the function if input is empty
  } else {
    fullnameInput.classList.remove("is-invalid");
    fullnameInput.classList.add("is-valid");
  }

  // Access the table HTML
  var tableHTML = document.getElementById("PIDTable").outerHTML;
  var additionalTableHTML = document.getElementById("PIDTable-2").outerHTML;
  var TestResultsHTML = document.getElementById(
    "TestResultsAndInterpretation"
  ).outerHTML;

  // Create a new window for printing
  var printWindow = window.open("", "", "height=600,width=800");
  printWindow.document.write("<html><head><title>Excelsus Report</title>");
  printWindow.document.write("<style>");
  printWindow.document.write(
    "table { border-collapse: collapse; width: 100%; }"
  );
  printWindow.document.write(
    "th, td { border: 1px solid black; padding: 8px; text-align: left; }"
  );
  printWindow.document.write("thead { display: none; }"); // Hide thead entirely
  printWindow.document.write("tfoot { display: table-row-group; }");
  printWindow.document.write(
    "@media print { thead { display: none; } tfoot { display: table-row-group; } }"
  ); // Ensure thead is not printed
  printWindow.document.write("</style>");
  printWindow.document.write("</head><body>");
  printWindow.document.write("<h3><br/></h3>");

  // Print Full Name
  printWindow.document.write("<h2>Full Name: " + name + "</h2>");
  printWindow.document.write("<h3><br/></h3>");

  // Print PID Table
  printWindow.document.write("<h2>PID</h2>");
  printWindow.document.write(
    "<table>" +
      tableHTML.replace("<thead>", "<tbody>").replace("</thead>", "") +
      "</table>"
  );

  // Print PID Table 2
  printWindow.document.write("<h4>Domain</h4>");
  printWindow.document.write(
    "<table>" +
      additionalTableHTML
        .replace("<thead>", "<tbody>")
        .replace("</thead>", "") +
      "</table>"
  );
  printWindow.document.write("<h3><br/></h3>");

  // Print Test Results
  printWindow.document.write("<h2>Test Results And Interpretation</h2>");
  printWindow.document.write(TestResultsHTML);
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

document.getElementById("burger-icon").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const menuContainer = document.getElementById("menu-container");

  sidebar.classList.toggle("expanded");
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  var readyDiv = document.getElementById("ready");
  var readyDivPosition = readyDiv.getBoundingClientRect();

  var threshold = 0;

  if (
    readyDivPosition.top < window.innerHeight - threshold &&
    readyDivPosition.bottom >= 0
  ) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});

document
  .getElementById("table-show-hide-button")
  .addEventListener("click", function () {
    var overallResults = document.querySelector(".over-all-results");
    var questionsAndResults = document.querySelector(".questions-and-results");

    // Array of all the PID5 element IDs
    var pid5Elements = [
      "PID5-Anhedonia",
      "PID5-Anxiousness",
      "PID5-AttentionSeeking",
      "PID5-Callousness",
      "PID5-Deceitfulness",
      "PID5-Depressivity",
      "PID5-Distractibility",
      "PID5-Eccentricity",
      "PID5-EmotionalLability",
      "PID5-Grandiosity",
      "PID5-Hostility",
      "PID5-Impulsivity",
      "PID5-IntimacyAvoidance",
      "PID5-Irresponsibility",
      "PID5-Manipulativeness",
      "PID5-PerceptualDysregulation",
      "PID5-Perseveration",
      "PID5-RestrictedAffectivity",
      "PID5-RigidPerfectionism",
      "PID5-Risktaking",
      "PID5-SeparationInsecurity",
      "PID5-Submissiveness",
      "PID5-Suspiciousness",
      "PID5-Unusualbeliefsandexperiences",
      "PID5-Withdrawal",
    ];

    var pid5TotalElements = document.querySelectorAll(".PID5-Total");
    // Toggle display of overallResults and questionsAndResults width
    if (
      overallResults.style.display === "none" ||
      overallResults.style.display === ""
    ) {
      if (window.innerWidth <= 400) {
        questionsAndResults.style.width = "100%";
      } else {
        questionsAndResults.style.width = "50%";
      }

      overallResults.style.display = "block";

      // Hide all PID5 elements
      pid5Elements.forEach(function (id) {
        document.getElementById(id).style.display = "block";
      });

      pid5TotalElements.forEach(function (element) {
        element.style.display = "block";
      });
    } else {
      questionsAndResults.style.width = "100%";
      overallResults.style.display = "none";

      // Show all PID5 elements
      pid5Elements.forEach(function (id) {
        document.getElementById(id).style.display = "none";
      });

      pid5TotalElements.forEach(function (element) {
        element.style.display = "none";
      });
    }
  });
