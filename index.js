// GAD 7
document.getElementById('GADsubmitBtn').addEventListener('click', function() {
    let totalScore = 0;
    
    for (let i = 1; i <= 7; i++) {
        let selectElement = document.getElementById('GAD0' + i);
        let value = parseInt(selectElement.value) || 0;
        totalScore += value;
    }
  
    document.querySelector('.GAD-7-Total').innerText = totalScore;
 
    let GADanxietyLevel = '';
    if (totalScore >= 0 && totalScore <= 4) {
        GADanxietyLevel = 'Minimal Anxiety';
    } else if (totalScore >= 5 && totalScore <= 9) {
        GADanxietyLevel = 'Mild Anxiety';
    } else if (totalScore >= 10 && totalScore <= 14) {
        GADanxietyLevel = 'Moderate Anxiety';
    } else if (totalScore >= 15 && totalScore <= 21) {
        GADanxietyLevel = 'Severe Anxiety';
    }
 
    document.getElementById('GAD-7-translate').innerText = GADanxietyLevel;

    let GADq10Answer = document.getElementById('GAD08').value;
    document.getElementById('GAD-7-Q8-answer').innerText = 'Q8 Answer: ' + GADq10Answer;
});

//PHQ 9
document.getElementById('PHQ-9-submitBtn').addEventListener('click', function() {
    let PHQtotalScore = 0;
    
    for (let i = 1; i <= 9; i++) {  
        let selectElement = document.getElementById('PHQ-9-0' + i);
        let value = parseInt(selectElement.value) || 0;
        PHQtotalScore += value;
    }

    document.querySelector('.PHQ-9-Total').innerText = PHQtotalScore;

    let PHQdepressionLevel = '';
    if (PHQtotalScore >= 0 && PHQtotalScore <= 4) {
        PHQdepressionLevel = 'Minimal Depression';
    } else if (PHQtotalScore >= 5 && PHQtotalScore <= 9) {
        PHQdepressionLevel = 'Mild Depression';
    } else if (PHQtotalScore >= 10 && PHQtotalScore <= 14) {
        PHQdepressionLevel = 'Moderate Depression';
    } else if (PHQtotalScore >= 15 && PHQtotalScore <= 19) {
        PHQdepressionLevel = 'Moderately Severe Depression';
    } else if (PHQtotalScore >= 20 && PHQtotalScore <= 27) {
        PHQdepressionLevel = 'Severe Depression';
    }

    document.getElementById('PHQ-9-translate').innerText = PHQdepressionLevel;

    let PHQq10Answer = document.getElementById('PHQ-9-10').value;
    document.getElementById('PHQ-9-Q10-answer').innerText = 'Q10 Answer: ' + PHQq10Answer;
});

//MDQ
document.getElementById('MDQsubmitBtn').addEventListener('click', function() {
    let MDQtotalScore = 0;

    for (let i = 1; i <= 13; i++) {
        let questionId = i < 10 ? 'MDQ-0' + i : 'MDQ-' + i;  
        let selectElement = document.getElementById(questionId);
        if (selectElement) {
            let value = parseInt(selectElement.value) || 0;
            MDQtotalScore += value;
        }
    }

    document.querySelector('.MDQ-Total').innerText = MDQtotalScore;

    let MDQLevel = '';
    if (MDQtotalScore >= 0 && MDQtotalScore <= 6) {
        MDQLevel = 'Low possibility of mood disorder.';
    } else if (MDQtotalScore >= 7 && MDQtotalScore <= 50) {
        MDQLevel = 'Mood disorder symptoms are present.';
    }
    document.getElementById('MDQ-translate').innerText = MDQLevel;


    document.getElementById('MDQ-2').addEventListener('change', function() {
        let MDQq2Element = document.getElementById('MDQ-2');
        if (MDQq2Element) {
            let MDQq2Answer = MDQq2Element.value;
            let answerText;
            if (MDQq2Answer === 'Yes') {
                answerText = 'Mood disorder symptoms are present.';
            } else if (MDQq2Answer === 'No') {
                answerText = 'Low possibility of mood disorder.';
            } else {
                answerText = ''; // Default text when no option is selected
            }
            document.getElementById('MDQ-2-answer').innerText = '#2: ' + answerText;
        }
    });

    document.getElementById('MDQ-3').addEventListener('change', function() {
        let MDQq3Element = document.getElementById('MDQ-3');
        if (MDQq3Element) {
            let MDQq3Answer = MDQq3Element.value;
            let answerText;
            if (MDQq3Answer === 'Moderate Problem' || MDQq3Answer === 'Serious Problem') {
                answerText = 'Mood disorder symptoms are present.';
            } else {
                answerText = 'Low possibility of mood disorder.';
            }
            document.getElementById('MDQ-3-answer').innerText = '#3: ' + answerText;
        }
    });

});

//Bipolar
document.getElementById('Bipolar-submitBtn').addEventListener('click', function() {
    let BipolartotalScore = 0;
    
    for (let i = 1; i <= 27; i++) {
        // Format the ID to match 'Bipolar-01', 'Bipolar-02', ..., 'Bipolar-27'
        let id = 'Bipolar-' + ('0' + i).slice(-2);
        let selectElement = document.getElementById(id);
        let value = parseInt(selectElement.value) || 0;
        BipolartotalScore += value;
    }

    document.querySelector('.Bipolar-Total').innerText = BipolartotalScore;

    let BipolarLevel = '';
    if (BipolartotalScore >= 0 && BipolartotalScore <= 21) {
        BipolarLevel = 'The Likelihood of the individual having the condition is low but cannot be excluded';
    } else if (BipolartotalScore >= 22 && BipolartotalScore <= 50) {
        BipolarLevel = 'Suggest Possible Bipolar I or II Disorder';
    }

    document.getElementById('Bipolar-translate').innerText = BipolarLevel;
});

//ADHD
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ADHD-submitBtn').addEventListener('click', function() {

        // Function to calculate and update score and percentage
        function calculateAndDisplayScores(part, prefix, maxQuestions, totalPoints, elementId) {
            let totalScore = 0;
            for (let i = 1; i <= maxQuestions; i++) {
                let id = prefix + '-' + i;  // Updated to match the new ID format
                let selectElement = document.getElementById(id);
                if (selectElement) {
                    let value = parseInt(selectElement.value) || 0;
                    totalScore += value;
                } else {
                    console.warn("Element with ID " + id + " not found.");
                }
            }
            let percentage = (totalScore / totalPoints * 100).toFixed(2);
            let displayElement = document.getElementById(elementId);
            if (displayElement) {
                displayElement.innerText = part + " "+ "Scored " + totalScore + " out of " + totalPoints + " which has a percentage of " + percentage + "%";
            } else {
                console.warn("Display element with ID " + elementId + " not found.");
            }
            console.log(part + " " + prefix + " Scored " + totalScore + " out of " + totalPoints + " which has a percentage of " + percentage + "%");
        }

        // ADHD1
        calculateAndDisplayScores("I.",'ADHD1', 7, 21, 'ADHD1-translate');

        // ADHD2
        calculateAndDisplayScores("II.",'ADHD2', 8, 24, 'ADHD2-translate');

        // ADHD3
        calculateAndDisplayScores("III.",'ADHD3', 6, 36, 'ADHD3-translate');

        // ADHD4
        calculateAndDisplayScores("IV.",'ADHD4', 5, 15, 'ADHD4-translate');

        // ADHD5
        calculateAndDisplayScores("V.",'ADHD5', 11, 33, 'ADHD5-translate');

        // ADHD6
        calculateAndDisplayScores("VI.",'ADHD6', 9, 27, 'ADHD6-translate');

        // ADHD7
        calculateAndDisplayScores("VII.",'ADHD7', 5, 15, 'ADHD7-translate');

        // ADHD8
        calculateAndDisplayScores("VIII.",'ADHD8', 6, 18, 'ADHD8-translate');

    });
});

























