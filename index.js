// GAD 7
document.getElementById('GADsubmitBtn').addEventListener('click', function() {
    let totalScore = 0;
    
    for (let i = 1; i <= 7; i++) {
        let selectElement = document.getElementById('GAD0' + i);
        let value = parseInt(selectElement.value) || 0;
        totalScore += value;
    }

    document.querySelector('.TRI-GAD-7-Total').innerText = totalScore;
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
    document.getElementById('TRI-GAD-7-translate').innerText = GADanxietyLevel;

    let GADq10Answer = document.getElementById('GAD08').value;
    document.getElementById('TRI-GAD-7-Q8-answer').innerText = GADq10Answer;
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

    document.querySelector('.TRI-PHQ-9-Total').innerText = PHQtotalScore;
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
    document.getElementById('TRI-PHQ-9-translate').innerText = PHQdepressionLevel;

    let PHQq10Answer = document.getElementById('PHQ-9-10').value;
    document.getElementById('PHQ-9-Q10-answer').innerText = 'Q10 Answer: ' + PHQq10Answer;
    document.getElementById('TRI-PHQ-9-Q10-answer').innerText = PHQq10Answer;
});

//MDQ
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
        document.getElementById('TRI-MDQ-2-answer').innerText = answerText;

        document.getElementById('TRI-MDQ-2-answer').innerText = '"'+ MDQq2Answer +'"';
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
        document.getElementById('TRI-MDQ-3-answer').innerText = answerText;

        document.getElementById('TRI-MDQ-3-answer').innerText = '"'+ MDQq3Answer +'"';
    }
});

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
    document.querySelector('.TRI-MDQ-Total').innerText = MDQtotalScore;

    let MDQLevel = '';
    if (MDQtotalScore >= 0 && MDQtotalScore <= 6) {
        MDQLevel = 'Low possibility of mood disorder.';
    } else if (MDQtotalScore >= 7 && MDQtotalScore <= 50) {
        MDQLevel = 'Mood disorder symptoms are present.';
    }
    document.getElementById('MDQ-translate').innerText = MDQLevel;
    document.getElementById('TRI-MDQ-translate').innerText = MDQLevel;




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
    document.querySelector('.TRI-Bipolar-Total').innerText = BipolartotalScore;

    let BipolarLevel = '';
    if (BipolartotalScore >= 0 && BipolartotalScore <= 21) {
        BipolarLevel = 'The Likelihood of the individual having the condition is low but cannot be excluded';
    } else if (BipolartotalScore >= 22 && BipolartotalScore <= 50) {
        BipolarLevel = 'Suggest Possible Bipolar I or II Disorder';
    }

    document.getElementById('Bipolar-translate').innerText = BipolarLevel;
    document.getElementById('TRI-Bipolar-translate').innerText = BipolarLevel;
});

//ADHD
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('ADHD-submitBtn').addEventListener('click', function() {

        // Function to calculate and update score and percentage
        function calculateAndDisplayScores(part, prefix, maxQuestions, totalPoints, elementId, TRITotalid, TRIPercentageid, TRITranslateid) {
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

            let adhdlevel = "";
            if (percentage >= 0 && percentage <= 34 ){
                adhdlevel = "No Difficulties";
            } else if (percentage >= 35 && percentage <= 49){
                adhdlevel = "Mild to Moderate Difficulties";
            } else if (percentage >= 50 && percentage <= 69){
                adhdlevel = "Severe Difficulties";
            } else if (percentage >= 70 ){
                adhdlevel = "Major Interference";
            }





            let displayElement = document.getElementById(elementId);
            let displayElement2 = document.getElementById(TRITotalid);
            let displayElement3 = document.getElementById(TRIPercentageid);
            let displayElement4 = document.getElementById(TRITranslateid);


            displayElement2.innerText = totalScore;
            displayElement3.innerText = percentage;
            displayElement4.innerText = adhdlevel;

            if (displayElement) {
                displayElement.innerText = part + " "+ "Scored " + totalScore + " out of " + totalPoints + " which has a percentage of " + percentage + "%";
            } else {
                console.warn("Display element with ID " + elementId + " not found.");
            }
            console.log(part + " " + prefix + " Scored " + totalScore + " out of " + totalPoints + " which has a percentage of " + percentage + "%");
        }

        // ADHD1
        calculateAndDisplayScores("I.",'ADHD1', 7, 21, 'ADHD1-translate', 'TRI-ADHD-1-TOTAL' , 'TRI-ADHD1-PERCENT' , 'TRI-ADHD-1-TRANSLATE');

        // ADHD2
        calculateAndDisplayScores("II.",'ADHD2', 8, 24, 'ADHD2-translate' , 'TRI-ADHD-2-TOTAL' , 'TRI-ADHD2-PERCENT' , 'TRI-ADHD-2-TRANSLATE');

        // ADHD3
        calculateAndDisplayScores("III.",'ADHD3', 6, 36, 'ADHD3-translate' , 'TRI-ADHD-3-TOTAL' , 'TRI-ADHD3-PERCENT' , 'TRI-ADHD-3-TRANSLATE');

        // ADHD4
        calculateAndDisplayScores("IV.",'ADHD4', 5, 15, 'ADHD4-translate' , 'TRI-ADHD-4-TOTAL' , 'TRI-ADHD4-PERCENT' , 'TRI-ADHD-4-TRANSLATE');

        // ADHD5
        calculateAndDisplayScores("V.",'ADHD5', 11, 33, 'ADHD5-translate' , 'TRI-ADHD-5-TOTAL' , 'TRI-ADHD5-PERCENT' , 'TRI-ADHD-5-TRANSLATE');

        // ADHD6
        calculateAndDisplayScores("VI.",'ADHD6', 9, 27, 'ADHD6-translate' , 'TRI-ADHD-6-TOTAL' , 'TRI-ADHD6-PERCENT' , 'TRI-ADHD-6-TRANSLATE');

        // ADHD7
        calculateAndDisplayScores("VII.",'ADHD7', 5, 15, 'ADHD7-translate' , 'TRI-ADHD-7-TOTAL' , 'TRI-ADHD7-PERCENT' , 'TRI-ADHD-7-TRANSLATE');

        // ADHD8
        calculateAndDisplayScores("VIII.",'ADHD8', 6, 18, 'ADHD8-translate' , 'TRI-ADHD-8-TOTAL' , 'TRI-ADHD8-PERCENT' , 'TRI-ADHD-8-TRANSLATE');

    });
});

// Life Satisfaction
document.getElementById('Life-Satisfaction-submitBtn').addEventListener('click', function() {
    let LifeSatisfactiontotalScore = 0;

    for (let i = 1; i <= 5; i++) {
        let selectElement = document.getElementById('Life-Satisfaction' + i);
        let value = parseInt(selectElement.value) || 0;
        LifeSatisfactiontotalScore += value;  // Fixed variable name
    }

    document.querySelector('.Life-Satisfaction-Total').innerText = LifeSatisfactiontotalScore;
    document.querySelector('.TRI-Life-Satisfaction-Total').innerText = LifeSatisfactiontotalScore;

    let LifeSatisfactionLevel = '';
    if (LifeSatisfactiontotalScore >= 0 && LifeSatisfactiontotalScore <= 9) {
        LifeSatisfactionLevel = 'Extremely Dissatisfied';
    } else if (LifeSatisfactiontotalScore >= 10 && LifeSatisfactiontotalScore <= 14) {
        LifeSatisfactionLevel = 'Dissatisfied';
    } else if (LifeSatisfactiontotalScore >= 15 && LifeSatisfactiontotalScore <= 19) {
        LifeSatisfactionLevel = 'Slightly Dissatisfied';
    } else if (LifeSatisfactiontotalScore == 20) {
        LifeSatisfactionLevel = 'Neutral';
    } else if (LifeSatisfactiontotalScore >= 21 && LifeSatisfactiontotalScore <= 25) {
        LifeSatisfactionLevel = 'Slightly Satisfied';
    } else if (LifeSatisfactiontotalScore >= 26 && LifeSatisfactiontotalScore <= 30) {
        LifeSatisfactionLevel = 'Satisfied';
    } else if (LifeSatisfactiontotalScore >= 31 && LifeSatisfactiontotalScore <= 35) {
        LifeSatisfactionLevel = 'Extremely Satisfied';
    }

    document.getElementById('Life-Satisfaction-translate').innerText = LifeSatisfactionLevel;
    document.getElementById('TRI-Life-Satisfaction-translate').innerText = LifeSatisfactionLevel;
});


//BAI
document.getElementById('BAI-submitBtn').addEventListener('click', function() {
    let BAItotalScore = 0;

    for (let i = 1; i <= 5; i++) {
        let selectElement = document.getElementById('BAI-' + i);
        let value = parseInt(selectElement.value) || 0;
        BAItotalScore += value;  // Fixed variable name
    }

    document.querySelector('.BAI-Total').innerText = BAItotalScore;
    document.querySelector('.TRI-BAI-Total').innerText = BAItotalScore;

    let BAILevel = '';
    if (BAItotalScore >= 0 && BAItotalScore <= 21) {
        BAILevel = 'Low Anxiety';
    } else if (BAItotalScore >= 22 && BAItotalScore <= 35) {
        BAILevel = 'Moderate Anxiety';
    } else if (BAItotalScore >= 36) {
        BAILevel = 'Potential concerning levels of anxiety';
    }

    document.getElementById('BAI-translate').innerText = BAILevel;
    document.getElementById('TRI-BAI-translate').innerText = BAILevel;
});


//BDI
document.getElementById('BDI-submitBtn').addEventListener('click', function() {
    let BDItotalScore = 0;

    for (let i = 1; i <= 5; i++) {
        let selectElement = document.getElementById('BDI-' + i);
        let value = parseInt(selectElement.value) || 0;
        BDItotalScore += value;  // Fixed variable name
    }

    document.querySelector('.BDI-Total').innerText = BDItotalScore;
    document.querySelector('.TRI-BDI-Total').innerText = BDItotalScore;

    let BDILevel = '';
    if (BDItotalScore >= 0 && BDItotalScore <= 10) {
        BDILevel = 'These ups and downs are considered normal';
    } else if (BDItotalScore >= 11 && BDItotalScore <= 16) {
        BDILevel = 'Mild mood disturbance';
    } else if (BDItotalScore >= 17 && BDItotalScore <= 20) {
        BDILevel = 'Borderline clinical depression';
    } else if (BDItotalScore == 21 && BDItotalScore <= 30) {
        BDILevel = 'Moderate depression';
    } else if (BDItotalScore >= 31 && BDItotalScore <= 40) {
        BDILevel = 'Severe depression';
    } else if (BDItotalScore >= 40) {
        BDILevel = 'Extreme depression';
    }

    document.getElementById('BDI-translate').innerText = BDILevel;
    document.getElementById('TRI-BDI-translate').innerText = BDILevel;
});

//EQ
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('EQ-submitBtn').addEventListener('click', function() {

        // Function to calculate and update score and percentage
        function calculateAndDisplayScores(part, prefix, elementId) {
            let totalScore = 0;
            for (let i = 1; i <= 10; i++) {
                let id = prefix + '-' + i;  // Updated to match the new ID format
                let selectElement = document.getElementById(id);
                if (selectElement) {
                    let value = parseInt(selectElement.value) || 0;
                    totalScore += value;
                } else {
                    console.warn("Element with ID " + id + " not found.");
                }
            }

            let displayElement = document.getElementById(elementId);
            
            if (displayElement) {
                // Determine the additional text based on the score
                let additionalText;
                if (totalScore <= 24) {
                    additionalText = "Area for enrichment: Requires attention and development";
                } else if (totalScore <= 34) {
                    additionalText = "Effective functioning: Consider Strengthening";
                } else if (totalScore <= 40) {
                    additionalText = "Enhanced skills: Use as leverage to develop weaker areas";
                } else {
                    additionalText = "Score out of range";
                }

                displayElement.innerText = part + " Scored " + totalScore + ": " + additionalText;
                console.log(part + " Scored " + totalScore + ": " + additionalText);
            } else {
                console.warn("Display element with ID " + elementId + " not found.");
            }
        }

        // Debugging: Ensure each part is processed
        console.log("Processing EQEA");
        calculateAndDisplayScores("EA -", 'EQEA', 'EQEA-translate');

        console.log("Processing EQEM");
        calculateAndDisplayScores("EM -", 'EQEM', 'EQEM-translate');

        console.log("Processing EQSEA");
        calculateAndDisplayScores("SEA -", 'EQSEA', 'EQSEA-translate');

        console.log("Processing EQRM");
        calculateAndDisplayScores("RM -", 'EQRM', 'EQRM-translate');

    });
});

// PID5-5
function calculateTotalScore(ids) {
    let totalScore = 0;
    let selectedValues = [];
    
    ids.forEach(id => {
        let selectElement = document.getElementById(id);
        if (selectElement) { // Check if the element exists
            let value = parseInt(selectElement.value) || 0;
            totalScore += value;
            selectedValues.push(value); // Store only the value for display
        } else {
            console.warn(`Element with ID "${id}" not found.`);
        }
    });

    return { totalScore, selectedValues };
}

function calculateProratedValue(totalScore, numberOfIds) {
    if (numberOfIds === 0) return 0; // Avoid division by zero
    return Math.ceil((totalScore * 220) / numberOfIds);
}

function generateIdList(prefix, start, end) {
    let ids = [];
    for (let i = start; i <= end; i++) {
        ids.push(`${prefix}-${i}`);
    }
    return ids;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('PID5submitBtn').addEventListener('click', function() {
        //#--------Total Score----------#//
        const idsToInclude = generateIdList('PID5', 1, 220); // Generate IDs from PID5-1 to PID5-220

        let result = calculateTotalScore(idsToInclude);
        let totalScore = result.totalScore;

        document.querySelector('.PID5-Total').innerText = 'Total Score: ' + totalScore;

        //#--------Anhedonia----------#//
        const Anhedonia = ['PID5-1', 'PID5-23', 'PID5-26', 'PID5-30', 'PID5-124', 'PID5-155', 'PID5-157', 'PID5-189'];
        
        let AnhedoniaResult = calculateTotalScore(Anhedonia);
        let AnhedoniaTotalScore = AnhedoniaResult.totalScore;
        let AnhedoniaSelectedValues = AnhedoniaResult.selectedValues;

        // Calculate prorated Anhedonia value
        let proratedAnhedonia = calculateProratedValue(AnhedoniaTotalScore, Anhedonia.length);

        // Calculate Anhedonia Average
        let averageAnhedonia = Anhedonia.length === 0 ? 0 : proratedAnhedonia / Anhedonia.length;

        // Display results
        document.getElementById('PID5-Anhedonia').innerText = 'Anhedonia: ' + AnhedoniaTotalScore;
        document.getElementById('Anhedonia-Total-Partial-Raw-Facet-Score').innerText = AnhedoniaSelectedValues.join(', ') + ' = ' + AnhedoniaTotalScore;
        document.getElementById('Anhedonia-Prorated-Raw-Facet-Score').innerText = proratedAnhedonia;
        document.getElementById('Anhedonia-Average-Raw-Facet-Score').innerText = averageAnhedonia.toFixed(2);

        //#--------Anxiousness----------#//
        const Anxiousness = ['PID5-79', 'PID5-93', 'PID5-95', 'PID5-96', 'PID5-109', 'PID5-110', 'PID5-130', 'PID5-141', 'PID5-174'];
        
        let AnxiousnessResult = calculateTotalScore(Anxiousness);
        let AnxiousnessTotalScore = AnxiousnessResult.totalScore;
        let AnxiousnessSelectedValues = AnxiousnessResult.selectedValues;

        // Calculate prorated Anxiousness value
        let proratedAnxiousness = calculateProratedValue(AnxiousnessTotalScore, Anxiousness.length);

        // Calculate Anxiousness Average
        let averageAnxiousness = Anxiousness.length === 0 ? 0 : proratedAnxiousness / Anxiousness.length;

        // Display results
        document.getElementById('PID5-Anxiousness').innerText = 'Anxiousness: ' + AnxiousnessTotalScore;
        document.getElementById('Anxiousness-Total-Partial-Raw-Facet-Score').innerText = AnxiousnessSelectedValues.join(', ') + ' = ' + AnxiousnessTotalScore;
        document.getElementById('Anxiousness-Prorated-Raw-Facet-Score').innerText = proratedAnxiousness;
        document.getElementById('Anxiousness-Average-Raw-Facet-Score').innerText = averageAnxiousness.toFixed(2);

        //#--------AttentionSeeking----------#//
        let AttentionSeeking = ['PID5-14', 'PID5-43', 'PID5-74', 'PID5-111', 'PID5-113', 'PID5-173', 'PID5-191', 'PID5-211'];
        
        let AttentionSeekingResult = calculateTotalScore(AttentionSeeking);
        let AttentionSeekingTotalScore = AttentionSeekingResult.totalScore;
        let AttentionSeekingSelectedValues = AttentionSeekingResult.selectedValues;

        // Calculate prorated AttentionSeeking value
        let proratedAttentionSeeking = calculateProratedValue(AttentionSeekingTotalScore, AttentionSeeking.length);

        // Calculate AttentionSeeking Average
        let averageAttentionSeeking = AttentionSeeking.length === 0 ? 0 : proratedAttentionSeeking / AttentionSeeking.length;

        // Display results
        document.getElementById('PID5-AttentionSeeking').innerText = 'Attention Seeking: ' + AttentionSeekingTotalScore;
        document.getElementById('AttentionSeeking-Total-Partial-Raw-Facet-Score').innerText = AttentionSeekingSelectedValues.join(', ') + ' = ' + AttentionSeekingTotalScore;
        document.getElementById('AttentionSeeking-Prorated-Raw-Facet-Score').innerText = proratedAttentionSeeking;
        document.getElementById('AttentionSeeking-Average-Raw-Facet-Score').innerText = averageAttentionSeeking.toFixed(2);


        //#--------Callousness----------#//
        const Callousness = ['PID5-11', 'PID5-13', 'PID5-19', 'PID5-54', 'PID5-72', 'PID5-73', 'PID5-90', 'PID5-153', 'PID5-166', 'PID5-183', 'PID5-198', 'PID5-200', 'PID5-207', 'PID5-208'];
        
        let CallousnessResult = calculateTotalScore(Callousness);
        let CallousnessTotalScore = CallousnessResult.totalScore;
        let CallousnessSelectedValues = CallousnessResult.selectedValues;

        // Calculate prorated Callousness value
        let proratedCallousness = calculateProratedValue(CallousnessTotalScore, Callousness.length);

        // Calculate Callousness Average
        let averageCallousness = Callousness.length === 0 ? 0 : proratedCallousness / Callousness.length;

        // Display results
        document.getElementById('PID5-Callousness').innerText = 'Callousness: ' + CallousnessTotalScore;
        document.getElementById('Callousness-Total-Partial-Raw-Facet-Score').innerText = CallousnessSelectedValues.join(', ') + ' = ' + CallousnessTotalScore;
        document.getElementById('Callousness-Prorated-Raw-Facet-Score').innerText = proratedCallousness;
        document.getElementById('Callousness-Average-Raw-Facet-Score').innerText = averageCallousness.toFixed(2);



    //#--------Deceitfulness----------#//
    const Deceitfulness = ['PID5-41', 'PID5-53', 'PID5-56', 'PID5-76', 'PID5-126', 'PID5-134', 'PID5-142', 'PID5-206', 'PID5-214', 'PID5-21'];
    
    let DeceitfulnessResult = calculateTotalScore(Deceitfulness);
    let DeceitfulnessTotalScore = DeceitfulnessResult.totalScore;
    let DeceitfulnessSelectedValues = DeceitfulnessResult.selectedValues;

    // Calculate prorated Deceitfulness value
    let proratedDeceitfulness = calculateProratedValue(DeceitfulnessTotalScore, Deceitfulness.length);

    // Calculate Deceitfulness Average
    let averageDeceitfulness = Deceitfulness.length === 0 ? 0 : proratedDeceitfulness / Deceitfulness.length;

    // Display results
    document.getElementById('PID5-Deceitfulness').innerText = 'Deceitfulness: ' + DeceitfulnessTotalScore;
    document.getElementById('Deceitfulness-Total-Partial-Raw-Facet-Score').innerText = DeceitfulnessSelectedValues.join(', ') + ' = ' + DeceitfulnessTotalScore;
    document.getElementById('Deceitfulness-Prorated-Raw-Facet-Score').innerText = proratedDeceitfulness;
    document.getElementById('Deceitfulness-Average-Raw-Facet-Score').innerText = averageDeceitfulness.toFixed(2);



    //#--------Depressivity----------#//
    const Depressivity = ['PID5-27', 'PID5-61', 'PID5-66', 'PID5-81', 'PID5-86', 'PID5-104', 'PID5-119', 'PID5-148', 'PID5-151', 'PID5-163', 'PID5-168', 'PID5-169', 'PID5-178', 'PID5-212'];
    
    let DepressivityResult = calculateTotalScore(Depressivity);
    let DepressivityTotalScore = DepressivityResult.totalScore;
    let DepressivitySelectedValues = DepressivityResult.selectedValues;

    // Calculate prorated Depressivity value
    let proratedDepressivity = calculateProratedValue(DepressivityTotalScore, Depressivity.length);

    // Calculate Depressivity Average
    let averageDepressivity = Depressivity.length === 0 ? 0 : proratedDepressivity / Depressivity.length;

    // Display results
    document.getElementById('PID5-Depressivity').innerText = 'Depressivity: ' + DepressivityTotalScore;
    document.getElementById('Depressivity-Total-Partial-Raw-Facet-Score').innerText = DepressivitySelectedValues.join(', ') + ' = ' + DepressivityTotalScore;
    document.getElementById('Depressivity-Prorated-Raw-Facet-Score').innerText = proratedDepressivity;
    document.getElementById('Depressivity-Average-Raw-Facet-Score').innerText = averageDepressivity.toFixed(2);



    //#--------Distractibility----------#//
    const Distractibility = ['PID5-6', 'PID5-29', 'PID5-47', 'PID5-68', 'PID5-88', 'PID5-118', 'PID5-132', 'PID5-144', 'PID5-199'];
    
    let DistractibilityResult = calculateTotalScore(Distractibility);
    let DistractibilityTotalScore = DistractibilityResult.totalScore;
    let DistractibilitySelectedValues = DistractibilityResult.selectedValues;

    // Calculate prorated Distractibility value
    let proratedDistractibility = calculateProratedValue(DistractibilityTotalScore, Distractibility.length);

    // Calculate Distractibility Average
    let averageDistractibility = Distractibility.length === 0 ? 0 : proratedDistractibility / Distractibility.length;

    // Display results
    document.getElementById('PID5-Distractibility').innerText = 'Distractibility: ' + DistractibilityTotalScore;
    document.getElementById('Distractibility-Total-Partial-Raw-Facet-Score').innerText = DistractibilitySelectedValues.join(', ') + ' = ' + DistractibilityTotalScore;
    document.getElementById('Distractibility-Prorated-Raw-Facet-Score').innerText = proratedDistractibility;
    document.getElementById('Distractibility-Average-Raw-Facet-Score').innerText = averageDistractibility.toFixed(2);




    //#--------Eccentricity----------#//
    const Eccentricity = ['PID5-5', 'PID5-21', 'PID5-24', 'PID5-25', 'PID5-33', 'PID5-52', 'PID5-55', 'PID5-70', 'PID5-71', 'PID5-152', 'PID5-172', 'PID5-185', 'PID5-205'];
    
    let EccentricityResult = calculateTotalScore(Eccentricity);
    let EccentricityTotalScore = EccentricityResult.totalScore;
    let EccentricitySelectedValues = EccentricityResult.selectedValues;

    // Calculate prorated Eccentricity value
    let proratedEccentricity = calculateProratedValue(EccentricityTotalScore, Eccentricity.length);

    // Calculate Eccentricity Average
    let averageEccentricity = Eccentricity.length === 0 ? 0 : proratedEccentricity / Eccentricity.length;

    // Display results
    document.getElementById('PID5-Eccentricity').innerText = 'Eccentricity: ' + EccentricityTotalScore ;
    document.getElementById('Eccentricity-Total-Partial-Raw-Facet-Score').innerText = EccentricitySelectedValues.join(', ') + ' = ' + EccentricityTotalScore;
    document.getElementById('Eccentricity-Prorated-Raw-Facet-Score').innerText = proratedEccentricity;
    document.getElementById('Eccentricity-Average-Raw-Facet-Score').innerText = averageEccentricity.toFixed(2);



    //#--------EmotionalLability----------#//
    const EmotionalLability = ['PID5-18', 'PID5-62', 'PID5-102', 'PID5-122', 'PID5-138', 'PID5-165', 'PID5-181'];
    
    let EmotionalLabilityResult = calculateTotalScore(EmotionalLability);
    let EmotionalLabilityTotalScore = EmotionalLabilityResult.totalScore;
    let EmotionalLabilitySelectedValues = EmotionalLabilityResult.selectedValues;

    // Calculate prorated EmotionalLability value
    let proratedEmotionalLability = calculateProratedValue(EmotionalLabilityTotalScore, EmotionalLability.length);

    // Calculate EmotionalLability Average
    let averageEmotionalLability = EmotionalLability.length === 0 ? 0 : proratedEmotionalLability / EmotionalLability.length;

    // Display results
    document.getElementById('PID5-EmotionalLability').innerText = 'Emotional Lability: ' + EmotionalLabilityTotalScore;
    document.getElementById('EmotionalLability-Total-Partial-Raw-Facet-Score').innerText = EmotionalLabilitySelectedValues.join(', ') + ' = ' + EmotionalLabilityTotalScore;
    document.getElementById('EmotionalLability-Prorated-Raw-Facet-Score').innerText = proratedEmotionalLability;
    document.getElementById('EmotionalLability-Average-Raw-Facet-Score').innerText = averageEmotionalLability.toFixed(2);


    //#--------Grandiosity----------#//
    const Grandiosity = ['PID5-40', 'PID5-65', 'PID5-114', 'PID5-179', 'PID5-187', 'PID5-197'];
    
    let GrandiosityResult = calculateTotalScore(Grandiosity);
    let GrandiosityTotalScore = GrandiosityResult.totalScore;
    let GrandiositySelectedValues = GrandiosityResult.selectedValues;

    // Calculate prorated Grandiosity value
    let proratedGrandiosity = calculateProratedValue(GrandiosityTotalScore, Grandiosity.length);

    // Calculate Grandiosity Average
    let averageGrandiosity = Grandiosity.length === 0 ? 0 : proratedGrandiosity / Grandiosity.length;

    // Display results
    document.getElementById('PID5-Grandiosity').innerText = 'Grandiosity: ' + GrandiosityTotalScore;
    document.getElementById('Grandiosity-Total-Partial-Raw-Facet-Score').innerText = GrandiositySelectedValues.join(', ') + ' = ' + GrandiosityTotalScore;
    document.getElementById('Grandiosity-Prorated-Raw-Facet-Score').innerText = proratedGrandiosity;
    document.getElementById('Grandiosity-Average-Raw-Facet-Score').innerText = averageGrandiosity.toFixed(2);


    //#--------Hostility----------#//
    const Hostility = ['PID5-28', 'PID5-32', 'PID5-38', 'PID5-85', 'PID5-92', 'PID5-116', 'PID5-158', 'PID5-170', 'PID5-188', 'PID5-216'];
    
    let HostilityResult = calculateTotalScore(Hostility);
    let HostilityTotalScore = HostilityResult.totalScore;
    let HostilitySelectedValues = HostilityResult.selectedValues;

    // Calculate prorated Hostility value
    let proratedHostility = calculateProratedValue(HostilityTotalScore, Hostility.length);

    // Calculate Hostility Average
    let averageHostility = Hostility.length === 0 ? 0 : proratedHostility / Hostility.length;

    // Display results
    document.getElementById('PID5-Hostility').innerText = 'Hostility: ' + HostilityTotalScore;
    document.getElementById('Hostility-Total-Partial-Raw-Facet-Score').innerText = HostilitySelectedValues.join(', ') + ' = ' + HostilityTotalScore;
    document.getElementById('Hostility-Prorated-Raw-Facet-Score').innerText = proratedHostility;
    document.getElementById('Hostility-Average-Raw-Facet-Score').innerText = averageHostility.toFixed(2);



    //#--------Impulsivity----------#//
    const Impulsivity = ['PID5-4', 'PID5-16', 'PID5-17', 'PID5-22', 'PID5-58', 'PID5-204'];
    
    let ImpulsivityResult = calculateTotalScore(Impulsivity);
    let ImpulsivityTotalScore = ImpulsivityResult.totalScore;
    let ImpulsivitySelectedValues = ImpulsivityResult.selectedValues;

    // Calculate prorated Impulsivity value
    let proratedImpulsivity = calculateProratedValue(ImpulsivityTotalScore, Impulsivity.length);

    // Calculate Impulsivity Average
    let averageImpulsivity = Impulsivity.length === 0 ? 0 : proratedImpulsivity / Impulsivity.length;

    // Display results
    document.getElementById('PID5-Impulsivity').innerText = 'Impulsivity: ' + ImpulsivityTotalScore;
    document.getElementById('Impulsivity-Total-Partial-Raw-Facet-Score').innerText = ImpulsivitySelectedValues.join(', ') + ' = ' + ImpulsivityTotalScore;
    document.getElementById('Impulsivity-Prorated-Raw-Facet-Score').innerText = proratedImpulsivity;
    document.getElementById('Impulsivity-Average-Raw-Facet-Score').innerText = averageImpulsivity.toFixed(2);



    //#--------IntimacyAvoidance----------#//
    const IntimacyAvoidance = ['PID5-89', 'PID5-97', 'PID5-108', 'PID5-120', 'PID5-145', 'PID5-203'];
    
    let IntimacyAvoidanceResult = calculateTotalScore(IntimacyAvoidance);
    let IntimacyAvoidanceTotalScore = IntimacyAvoidanceResult.totalScore;
    let IntimacyAvoidanceSelectedValues = IntimacyAvoidanceResult.selectedValues;

    // Calculate prorated IntimacyAvoidance value
    let proratedIntimacyAvoidance = calculateProratedValue(IntimacyAvoidanceTotalScore, IntimacyAvoidance.length);

    // Calculate IntimacyAvoidance Average
    let averageIntimacyAvoidance = IntimacyAvoidance.length === 0 ? 0 : proratedIntimacyAvoidance / IntimacyAvoidance.length;

    // Display results
    document.getElementById('PID5-IntimacyAvoidance').innerText = 'Intimacy Avoidance: ' + IntimacyAvoidanceTotalScore;
    document.getElementById('IntimacyAvoidance-Total-Partial-Raw-Facet-Score').innerText = IntimacyAvoidanceSelectedValues.join(', ') + ' = ' + IntimacyAvoidanceTotalScore;
    document.getElementById('IntimacyAvoidance-Prorated-Raw-Facet-Score').innerText = proratedIntimacyAvoidance;
    document.getElementById('IntimacyAvoidance-Average-Raw-Facet-Score').innerText = averageIntimacyAvoidance.toFixed(2);



    //#--------Irresponsibility----------#//
    const Irresponsibility = ['PID5-31', 'PID5-129', 'PID5-156', 'PID5-160', 'PID5-171', 'PID5-201', 'PID5-210'];
    
    let IrresponsibilityResult = calculateTotalScore(Irresponsibility);
    let IrresponsibilityTotalScore = IrresponsibilityResult.totalScore;
    let IrresponsibilitySelectedValues = IrresponsibilityResult.selectedValues;

    // Calculate prorated Irresponsibility value
    let proratedIrresponsibility = calculateProratedValue(IrresponsibilityTotalScore, Irresponsibility.length);

    // Calculate Irresponsibility Average
    let averageIrresponsibility = Irresponsibility.length === 0 ? 0 : proratedIrresponsibility / Irresponsibility.length;

    // Display results
    document.getElementById('PID5-Irresponsibility').innerText = 'Irresponsibility: ' + IrresponsibilityTotalScore;
    document.getElementById('Irresponsibility-Total-Partial-Raw-Facet-Score').innerText = IrresponsibilitySelectedValues.join(', ') + ' = ' + IrresponsibilityTotalScore;
    document.getElementById('Irresponsibility-Prorated-Raw-Facet-Score').innerText = proratedIrresponsibility;
    document.getElementById('Irresponsibility-Average-Raw-Facet-Score').innerText = averageIrresponsibility.toFixed(2);



    //#--------Manipulativeness----------#//
    const Manipulativeness = ['PID5-107', 'PID5-125', 'PID5-162', 'PID5-180', 'PID5-219'];
    
    let ManipulativenessResult = calculateTotalScore(Manipulativeness);
    let ManipulativenessTotalScore = ManipulativenessResult.totalScore;
    let ManipulativenessSelectedValues = ManipulativenessResult.selectedValues;

    // Calculate prorated Manipulativeness value
    let proratedManipulativeness = calculateProratedValue(ManipulativenessTotalScore, Manipulativeness.length);

    // Calculate Manipulativeness Average
    let averageManipulativeness = Manipulativeness.length === 0 ? 0 : proratedManipulativeness / Manipulativeness.length;

    // Display results
    document.getElementById('PID5-Manipulativeness').innerText = 'Manipulativeness: ' + ManipulativenessTotalScore;
    document.getElementById('Manipulativeness-Total-Partial-Raw-Facet-Score').innerText = ManipulativenessSelectedValues.join(', ') + ' = ' + ManipulativenessTotalScore;
    document.getElementById('Manipulativeness-Prorated-Raw-Facet-Score').innerText = proratedManipulativeness;
    document.getElementById('Manipulativeness-Average-Raw-Facet-Score').innerText = averageManipulativeness.toFixed(2);


    //#--------PerceptualDysregulation----------#//
    const PerceptualDysregulation = ['PID5-36', 'PID5-37', 'PID5-42', 'PID5-44', 'PID5-59', 'PID5-77', 'PID5-83', 'PID5-154', 'PID5-192', 'PID5-193', 'PID5-213', 'PID5-217'];
    
    let PerceptualDysregulationResult = calculateTotalScore(PerceptualDysregulation);
    let PerceptualDysregulationTotalScore = PerceptualDysregulationResult.totalScore;
    let PerceptualDysregulationSelectedValues = PerceptualDysregulationResult.selectedValues;
    
    // Calculate prorated PerceptualDysregulation value
    let proratedPerceptualDysregulation = calculateProratedValue(PerceptualDysregulationTotalScore, PerceptualDysregulation.length);
    
    // Calculate PerceptualDysregulation Average
    let averagePerceptualDysregulation = PerceptualDysregulation.length === 0 ? 0 : proratedPerceptualDysregulation / PerceptualDysregulation.length;
    
    // Display results
    document.getElementById('PID5-PerceptualDysregulation').innerText = 'Perceptual Dysregulation: ' + PerceptualDysregulationTotalScore;
    document.getElementById('PerceptualDysregulation-Total-Partial-Raw-Facet-Score').innerText = PerceptualDysregulationSelectedValues.join(', ') + ' = ' + PerceptualDysregulationTotalScore;
    document.getElementById('PerceptualDysregulation-Prorated-Raw-Facet-Score').innerText = proratedPerceptualDysregulation;
    document.getElementById('PerceptualDysregulation-Average-Raw-Facet-Score').innerText = averagePerceptualDysregulation.toFixed(2);



    //#--------Perseveration----------#//
    const Perseveration = ['PID5-46', 'PID5-51', 'PID5-60', 'PID5-78', 'PID5-80', 'PID5-100', 'PID5-121', 'PID5-128', 'PID5-137'];
    
    let PerseverationResult = calculateTotalScore(Perseveration);
    let PerseverationTotalScore = PerseverationResult.totalScore;
    let PerseverationSelectedValues = PerseverationResult.selectedValues;

    // Calculate prorated Perseveration value
    let proratedPerseveration = calculateProratedValue(PerseverationTotalScore, Perseveration.length);

    // Calculate Perseveration Average
    let averagePerseveration = Perseveration.length === 0 ? 0 : proratedPerseveration / Perseveration.length;

    // Display results
    document.getElementById('PID5-Perseveration').innerText = 'Perseveration: ' + PerseverationTotalScore;
    document.getElementById('Perseveration-Total-Partial-Raw-Facet-Score').innerText = PerseverationSelectedValues.join(', ') + ' = ' + PerseverationTotalScore;
    document.getElementById('Perseveration-Prorated-Raw-Facet-Score').innerText = proratedPerseveration;
    document.getElementById('Perseveration-Average-Raw-Facet-Score').innerText = averagePerseveration.toFixed(2);




    //#--------RestrictedAffectivity----------#//
    const RestrictedAffectivity = ['PID5-8', 'PID5-45', 'PID5-84', 'PID5-91', 'PID5-101', 'PID5-167', 'PID5-184'];
    
    let RestrictedAffectivityResult = calculateTotalScore(RestrictedAffectivity);
    let RestrictedAffectivityTotalScore = RestrictedAffectivityResult.totalScore;
    let RestrictedAffectivitySelectedValues = RestrictedAffectivityResult.selectedValues;

    // Calculate prorated RestrictedAffectivity value
    let proratedRestrictedAffectivity = calculateProratedValue(RestrictedAffectivityTotalScore, RestrictedAffectivity.length);

    // Calculate RestrictedAffectivity Average
    let averageRestrictedAffectivity = RestrictedAffectivity.length === 0 ? 0 : proratedRestrictedAffectivity / RestrictedAffectivity.length;

    // Display results
    document.getElementById('PID5-RestrictedAffectivity').innerText = 'Restricted Affectivity: ' + RestrictedAffectivityTotalScore;
    document.getElementById('RestrictedAffectivity-Total-Partial-Raw-Facet-Score').innerText = RestrictedAffectivitySelectedValues.join(', ') + ' = ' + RestrictedAffectivityTotalScore;
    document.getElementById('RestrictedAffectivity-Prorated-Raw-Facet-Score').innerText = proratedRestrictedAffectivity;
    document.getElementById('RestrictedAffectivity-Average-Raw-Facet-Score').innerText = averageRestrictedAffectivity.toFixed(2);




    //#--------RigidPerfectionism----------#//
    const RigidPerfectionism = ['PID5-34', 'PID5-49', 'PID5-105', 'PID5-115', 'PID5-123', 'PID5-135', 'PID5-140', 'PID5-176', 'PID5-196', 'PID5-22'];
    
    let RigidPerfectionismResult = calculateTotalScore(RigidPerfectionism);
    let RigidPerfectionismTotalScore = RigidPerfectionismResult.totalScore;
    let RigidPerfectionismSelectedValues = RigidPerfectionismResult.selectedValues;

    // Calculate prorated RigidPerfectionism value
    let proratedRigidPerfectionism = calculateProratedValue(RigidPerfectionismTotalScore, RigidPerfectionism.length);

    // Calculate RigidPerfectionism Average
    let averageRigidPerfectionism = RigidPerfectionism.length === 0 ? 0 : proratedRigidPerfectionism / RigidPerfectionism.length;

    // Display results
    document.getElementById('PID5-RigidPerfectionism').innerText = 'Rigid Perfectionism: ' + RigidPerfectionismTotalScore;
    document.getElementById('RigidPerfectionism-Total-Partial-Raw-Facet-Score').innerText = RigidPerfectionismSelectedValues.join(', ') + ' = ' + RigidPerfectionismTotalScore;
    document.getElementById('RigidPerfectionism-Prorated-Raw-Facet-Score').innerText = proratedRigidPerfectionism;
    document.getElementById('RigidPerfectionism-Average-Raw-Facet-Score').innerText = averageRigidPerfectionism.toFixed(2);




    //#--------Risktaking----------#//
    const Risktaking = ['PID5-3', 'PID5-7', 'PID5-35', 'PID5-39', 'PID5-48', 'PID5-67', 'PID5-69', 'PID5-87', 'PID5-98', 'PID5-112', 'PID5-159', 'PID5-164', 'PID5-195', 'PID5-215'];
    
    let RisktakingResult = calculateTotalScore(Risktaking);
    let RisktakingTotalScore = RisktakingResult.totalScore;
    let RisktakingSelectedValues = RisktakingResult.selectedValues;
    
    // Calculate prorated Risktaking value
    let proratedRisktaking = calculateProratedValue(RisktakingTotalScore, Risktaking.length);
    
    // Calculate Risktaking Average
    let averageRisktaking = Risktaking.length === 0 ? 0 : proratedRisktaking / Risktaking.length;
    
    // Display results
    document.getElementById('PID5-Risktaking').innerText = 'Risk taking: ' + RisktakingTotalScore;
    document.getElementById('Risktaking-Total-Partial-Raw-Facet-Score').innerText = RisktakingSelectedValues.join(', ') + ' = ' + RisktakingTotalScore;
    document.getElementById('Risktaking-Prorated-Raw-Facet-Score').innerText = proratedRisktaking;
    document.getElementById('Risktaking-Average-Raw-Facet-Score').innerText = averageRisktaking.toFixed(2);




    //#--------SeparationInsecurity----------#//
    const SeparationInsecurity = ['PID5-12', 'PID5-50', 'PID5-57', 'PID5-64', 'PID5-127', 'PID5-149', 'PID5-175'];
    
    let SeparationInsecurityResult = calculateTotalScore(SeparationInsecurity);
    let SeparationInsecurityTotalScore = SeparationInsecurityResult.totalScore;
    let SeparationInsecuritySelectedValues = SeparationInsecurityResult.selectedValues;
    
    // Calculate prorated SeparationInsecurity value
    let proratedSeparationInsecurity = calculateProratedValue(SeparationInsecurityTotalScore, SeparationInsecurity.length);
    
    // Calculate SeparationInsecurity Average
    let averageSeparationInsecurity = SeparationInsecurity.length === 0 ? 0 : proratedSeparationInsecurity / SeparationInsecurity.length;
    
    // Display results
    document.getElementById('PID5-SeparationInsecurity').innerText = 'Separation Insecurity: ' + SeparationInsecurityTotalScore;
    document.getElementById('SeparationInsecurity-Total-Partial-Raw-Facet-Score').innerText = SeparationInsecuritySelectedValues.join(', ') + ' = ' + SeparationInsecurityTotalScore;
    document.getElementById('SeparationInsecurity-Prorated-Raw-Facet-Score').innerText = proratedSeparationInsecurity;
    document.getElementById('SeparationInsecurity-Average-Raw-Facet-Score').innerText = averageSeparationInsecurity.toFixed(2);




    //#--------Submissiveness----------#//
    const Submissiveness = ['PID5-9', 'PID5-15', 'PID5-63', 'PID5-20'];
    
    let SubmissivenessResult = calculateTotalScore(Submissiveness);
    let SubmissivenessTotalScore = SubmissivenessResult.totalScore;
    let SubmissivenessSelectedValues = SubmissivenessResult.selectedValues;
    
    // Calculate prorated Submissiveness value
    let proratedSubmissiveness = calculateProratedValue(SubmissivenessTotalScore, Submissiveness.length);
    
    // Calculate Submissiveness Average
    let averageSubmissiveness = Submissiveness.length === 0 ? 0 : proratedSubmissiveness / Submissiveness.length;
    
    // Display results
    document.getElementById('PID5-Submissiveness').innerText = 'Submissiveness: ' + SubmissivenessTotalScore;
    document.getElementById('Submissiveness-Total-Partial-Raw-Facet-Score').innerText = SubmissivenessSelectedValues.join(', ') + ' = ' + SubmissivenessTotalScore;
    document.getElementById('Submissiveness-Prorated-Raw-Facet-Score').innerText = proratedSubmissiveness;
    document.getElementById('Submissiveness-Average-Raw-Facet-Score').innerText = averageSubmissiveness.toFixed(2);



    //#--------Suspiciousness----------#//
    const Suspiciousness = ['PID5-2', 'PID5-103', 'PID5-117', 'PID5-131', 'PID5-133', 'PID5-177', 'PID5-190'];
    
    let SuspiciousnessResult = calculateTotalScore(Suspiciousness);
    let SuspiciousnessTotalScore = SuspiciousnessResult.totalScore;
    let SuspiciousnessSelectedValues = SuspiciousnessResult.selectedValues;
    
    // Calculate prorated Suspiciousness value
    let proratedSuspiciousness = calculateProratedValue(SuspiciousnessTotalScore, Suspiciousness.length);
    
    // Calculate Suspiciousness Average
    let averageSuspiciousness = Suspiciousness.length === 0 ? 0 : proratedSuspiciousness / Suspiciousness.length;
    
    // Display results
    document.getElementById('PID5-Suspiciousness').innerText = 'Suspiciousness: ' + SuspiciousnessTotalScore;
    document.getElementById('Suspiciousness-Total-Partial-Raw-Facet-Score').innerText = SuspiciousnessSelectedValues.join(', ') + ' = ' + SuspiciousnessTotalScore;
    document.getElementById('Suspiciousness-Prorated-Raw-Facet-Score').innerText = proratedSuspiciousness;
    document.getElementById('Suspiciousness-Average-Raw-Facet-Score').innerText = averageSuspiciousness.toFixed(2);



    //#--------Unusualbeliefsandexperiences----------#//
    const Unusualbeliefsandexperiences = ['PID5-94', 'PID5-99', 'PID5-106', 'PID5-139', 'PID5-143', 'PID5-150', 'PID5-194', 'PID5-209'];
    
    let UnusualbeliefsandexperiencesResult = calculateTotalScore(Unusualbeliefsandexperiences);
    let UnusualbeliefsTotalScore = UnusualbeliefsandexperiencesResult.totalScore;
    let UnusualbeliefsandexperiencesSelectedValues = UnusualbeliefsandexperiencesResult.selectedValues;
    
    // Calculate prorated Unusualbeliefsandexperiences value
    let proratedUnusualbeliefsandexperiences = calculateProratedValue(UnusualbeliefsTotalScore, Unusualbeliefsandexperiences.length);
    
    // Calculate Unusualbeliefsandexperiences Average
    let averageUnusualbeliefsandexperiences = Unusualbeliefsandexperiences.length === 0 ? 0 : proratedUnusualbeliefsandexperiences / Unusualbeliefsandexperiences.length;
    
    // Display results
    document.getElementById('PID5-Unusualbeliefsandexperiences').innerText = 'Unusual beliefs and experiences: ' + UnusualbeliefsTotalScore;
    document.getElementById('Unusualbeliefsandexperiences-Total-Partial-Raw-Facet-Score').innerText = UnusualbeliefsandexperiencesSelectedValues.join(', ') + ' = ' + UnusualbeliefsTotalScore;
    document.getElementById('Unusualbeliefsandexperiences-Prorated-Raw-Facet-Score').innerText = proratedUnusualbeliefsandexperiences;
    document.getElementById('Unusualbeliefsandexperiences-Average-Raw-Facet-Score').innerText = averageUnusualbeliefsandexperiences.toFixed(2);




    //#--------Withdrawal----------#//
    const Withdrawal = ['PID5-10', 'PID5-20', 'PID5-75', 'PID5-82', 'PID5-136', 'PID5-146', 'PID5-147', 'PID5-161', 'PID5-182', 'PID5-186'];
    
    let WithdrawalResult = calculateTotalScore(Withdrawal);
    let WithdrawalTotalScore = WithdrawalResult.totalScore;
    let WithdrawalSelectedValues = WithdrawalResult.selectedValues;
    
    // Calculate prorated Withdrawal value
    let proratedWithdrawal = calculateProratedValue(WithdrawalTotalScore, Withdrawal.length);
    
    // Calculate Withdrawal Average
    let averageWithdrawal = Withdrawal.length === 0 ? 0 : proratedWithdrawal / Withdrawal.length;
    
    // Display results
    document.getElementById('PID5-Withdrawal').innerText = 'Withdrawal: ' + WithdrawalTotalScore;
    document.getElementById('Withdrawal-Total-Partial-Raw-Facet-Score').innerText = WithdrawalSelectedValues.join(', ') + ' = ' + WithdrawalTotalScore;
    document.getElementById('Withdrawal-Prorated-Raw-Facet-Score').innerText = proratedWithdrawal;
    document.getElementById('Withdrawal-Average-Raw-Facet-Score').innerText = averageWithdrawal.toFixed(2);


    let negativeAffect = EmotionalLabilityTotalScore + AnxiousnessTotalScore + SeparationInsecurityTotalScore ;

    let detachment = WithdrawalTotalScore + AnhedoniaTotalScore +  IntimacyAvoidanceTotalScore;

    let antagonism = ManipulativenessTotalScore + DeceitfulnessTotalScore + GrandiosityTotalScore;

    let disinhibition = IrresponsibilityTotalScore + ImpulsivityTotalScore + DistractibilityTotalScore;

    let psychoticism = UnusualbeliefsTotalScore + EccentricityTotalScore + PerceptualDysregulationTotalScore;


    document.getElementById('TRI-negativeAffect').innerText = negativeAffect;
    document.getElementById('TRI-detachment').innerText = detachment;
    document.getElementById('TRI-antagonism').innerText = antagonism;
    document.getElementById('TRI-disinhibition').innerText = disinhibition;
    document.getElementById('TRI-psychoticism').innerText = psychoticism;
    


    document.getElementById('NegativeAffectTotalofAverageFacetScores').innerText = EmotionalLabilityTotalScore + ", " + AnxiousnessTotalScore + ", " + SeparationInsecurityTotalScore + " = " + negativeAffect;
    document.getElementById('NegativeAffectOverallAverageofFacetScores').innerText = negativeAffect/3;
    document.getElementById('TRI-NegativeAffectOverallAverageofFacetScores').innerText = negativeAffect/3;

    document.getElementById('DetachmentTotalofAverageFacetScores').innerText = WithdrawalTotalScore + ", " + AnhedoniaTotalScore + ", " + IntimacyAvoidanceTotalScore + " = " + detachment;
    document.getElementById('DetachmentOverallAverageofFacetScores').innerText = detachment/3;
    document.getElementById('TRI-DetachmentOverallAverageofFacetScores').innerText = detachment/3;

    document.getElementById('AntagonismTotalofAverageFacetScores').innerText = ManipulativenessTotalScore + ", " + DeceitfulnessTotalScore + ", " + GrandiosityTotalScore + " = " + antagonism;
    document.getElementById('AntagonismOverallAverageofFacetScores').innerText = negativeAffect/3;
    document.getElementById('TRI-AntagonismOverallAverageofFacetScores').innerText = negativeAffect/3;
 
    document.getElementById('DisinhibitionTotalofAverageFacetScores').innerText = IrresponsibilityTotalScore + ", " + ImpulsivityTotalScore + ", " + DistractibilityTotalScore + " = " + disinhibition;
    document.getElementById('DisinhibitionOverallAverageofFacetScores').innerText = detachment/3;
    document.getElementById('TRI-DisinhibitionOverallAverageofFacetScores').innerText = detachment/3;

    document.getElementById('PsychoticismTotalofAverageFacetScores').innerText = UnusualbeliefsTotalScore + ", " + EccentricityTotalScore + ", " + PerceptualDysregulationTotalScore + " = " + psychoticism;
    document.getElementById('PsychoticismOverallAverageofFacetScores').innerText = detachment/3;
    document.getElementById('TRI-PsychoticismOverallAverageofFacetScores').innerText = detachment/3;
});
});





//PintTable
function handleInputChange() {
    var fullnameInput = document.getElementById('fullname');
    var name = fullnameInput.value.trim();

    if (name === '') {
        fullnameInput.classList.remove('is-valid');
        fullnameInput.classList.add('is-invalid');
    } else {
        fullnameInput.classList.remove('is-invalid');
        fullnameInput.classList.add('is-valid');
    }
}
function printTable() {
    var fullnameInput = document.getElementById('fullname');
    var name = fullnameInput.value.trim();

    // Validate the input before printing
    if (name === '') {
        fullnameInput.classList.remove('is-valid');
        fullnameInput.classList.add('is-invalid');
        alert('Please enter a full name before printing.');
        return;  // Exit the function if input is empty
    } else {
        fullnameInput.classList.remove('is-invalid');
        fullnameInput.classList.add('is-valid');
    }

    // Access the table HTML
    var tableHTML = document.getElementById('PIDTable').outerHTML;
    var additionalTableHTML = document.getElementById('PIDTable-2').outerHTML;
    var TestResultsHTML = document.getElementById('TestResultsAndInterpretation').outerHTML;

    // Create a new window for printing
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Excelsus Report</title>');
    printWindow.document.write('<style>table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid black; padding: 8px; text-align: left; } </style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<h3><br/></h3>');

    // Print Full Name
    printWindow.document.write('<h2>Full Name: ' + name + '</h2>');
    printWindow.document.write('<h3><br/></h3>');

    // Print PID Table
    printWindow.document.write('<h2>PID</h2>');
    printWindow.document.write(tableHTML);

    // Print PID Table 2
    printWindow.document.write('<h4>Domain</h4>');
    printWindow.document.write(additionalTableHTML);
    printWindow.document.write('<h3><br/></h3>');

    // Print Test Results
    printWindow.document.write('<h2>Test Results And Interpretation</h2>');
    printWindow.document.write(TestResultsHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}
document.getElementById('fullname').addEventListener('input', handleInputChange);



//Scroll Behaivor
function setupScrolling(scrollBoxSelector, prevButtonSelector, nextButtonSelector, itemSelector) {
    document.addEventListener('DOMContentLoaded', () => {
        const scrollBox = document.querySelector(scrollBoxSelector);
        const prevButton = document.querySelector(prevButtonSelector);
        const nextButton = document.querySelector(nextButtonSelector);

        // Get the width of one item
        const itemWidth = document.querySelector(itemSelector).offsetWidth;

        // Get the gap between items
        const gap = parseFloat(getComputedStyle(scrollBox).gap);

        // Calculate the total width of one item including the gap
        const scrollAmount = itemWidth + gap;

        prevButton.addEventListener('click', () => {
            scrollBox.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            scrollBox.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        // Optional: Disable buttons when reaching the start or end
        scrollBox.addEventListener('scroll', () => {
            prevButton.disabled = scrollBox.scrollLeft === 0;
            nextButton.disabled = scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth;
        });

        // Initial check to set button states
        function updateButtonStates() {
            prevButton.disabled = scrollBox.scrollLeft === 0;
            nextButton.disabled = scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth;
        }
        updateButtonStates();
    });
}

setupScrolling('.PID5-special', '.PIDbuttons[id="prev"]', '.PIDbuttons[id="next"]', '.PID5-questions');
setupScrolling('.MDQ-special', '.MDQbuttons[id="prev1"]', '.MDQbuttons[id="next2"]', '.MDQ-questions');
setupScrolling('.bipolar-special', '.bipolarbuttons[id="prev3"]', '.bipolarbuttons[id="next4"]', '.bipolar-questions');

setupScrolling('.ADHD-special', '.ADHDbuttons[id="prev5"]', '.ADHDbuttons[id="next6"]', '.ADHD-questions');
setupScrolling('.BAI-special', '.BAIbuttons[id="prev7"]', '.BAIbuttons[id="next8"]', '.BAI-questions');
setupScrolling('.BDI-special', '.BDIbuttons[id="prev9"]', '.BDIbuttons[id="next10"]', '.BDI-questions');
setupScrolling('.EQ-special', '.EQbuttons[id="prev11"]', '.EQbuttons[id="next12"]', '.EQ-questions');




//Select Behavior
document.querySelectorAll('.form-select').forEach(select => {
    select.addEventListener('change', function() {
      // Add the 'selected' class to the current select element
      this.classList.add('selected');
      
      // Find the label associated with this select
      const label = document.querySelector(`label[for="${this.id}"]`);
      
      // Remove 'selected-label' class from all labels
    //   document.querySelectorAll('.input-group label.selected-label').forEach(lbl => lbl.classList.remove('selected-label'));
      
      // Add 'selected-label' class to the associated label
      if (label) {
        label.classList.add('selected-label');
      }
    });
});

//Refresh Warning
document.addEventListener('DOMContentLoaded', function() {
    let isConfirm = false;

    // Check session storage and set flag
    if (sessionStorage.getItem('reloadFlag') === 'true') {
        sessionStorage.removeItem('reloadFlag');
        // Set a flag to confirm the action
        isConfirm = true;
    } else {
        sessionStorage.setItem('reloadFlag', 'true');
    }

    // Handle beforeunload event
    window.addEventListener('beforeunload', function(event) {
        if (sessionStorage.getItem('reloadFlag') === 'true' && !isConfirm) {
            // The following line is necessary for the dialog to appear
            event.preventDefault();
            // Most browsers will show a default message instead of this one
            event.returnValue = ''; 
        }
    });
});






