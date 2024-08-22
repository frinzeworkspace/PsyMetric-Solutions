//PID5
// document.addEventListener("DOMContentLoaded", function() {
//     const mainContainer = document.getElementById('questions-container');
    
//     const numberOfQuestions = 220;
//     const questionsPerBlock = 10;
    
//     for (let blockStart = 1; blockStart <= numberOfQuestions; blockStart += questionsPerBlock) {

//         const blockDiv = document.createElement('div');
//         blockDiv.className = 'questions PID5-questions';
        
//         const blockHeader = document.createElement('h3');
//         blockHeader.textContent = `${blockStart}-${Math.min(blockStart + questionsPerBlock - 1, numberOfQuestions)}`;
//         blockDiv.appendChild(blockHeader);

//         for (let i = blockStart; i < blockStart + questionsPerBlock && i <= numberOfQuestions; i++) {

//             const questionDiv = document.createElement('div');
//             questionDiv.className = 'input-group mb-3';

//             const label = document.createElement('label');
//             label.className = 'input-group-text custom-label';
//             label.setAttribute('for', `PID5-${i}`);
//             label.textContent = `Q${i}`;

//             const buttonGroup = document.createElement('div');
//             buttonGroup.id = `PID5-${i}`;
//             buttonGroup.className = 'btn-group selection-cont';
//             buttonGroup.setAttribute('role', 'group');
//             buttonGroup.setAttribute('aria-labelledby', `PID5-${i}Label`);

//             for (let j = 0; j <= 3; j++) {
//                 const radioInput = document.createElement('input');
//                 radioInput.type = 'radio';
//                 radioInput.className = 'btn-check';
//                 radioInput.id = `PID5-${i}-${j}`;
//                 radioInput.name = `PID5-${i}`;
//                 radioInput.value = j;
//                 radioInput.setAttribute('autocomplete', 'off');

//                 const radioLabel = document.createElement('label');
//                 radioLabel.className = j === 3 ? 'btn btn-outline-primary custom-radio-last' : 'btn btn-outline-primary custom-radio';
//                 radioLabel.setAttribute('for', `PID5-${i}-${j}`);
//                 radioLabel.textContent = j;

//                 buttonGroup.appendChild(radioInput);
//                 buttonGroup.appendChild(radioLabel);
//             }

//             questionDiv.appendChild(label);
//             questionDiv.appendChild(buttonGroup);

//             blockDiv.appendChild(questionDiv);

//             if (i === numberOfQuestions) {
//                 const submitButton = document.createElement('button');
//                 submitButton.id = 'PID5submitBtn';
//                 submitButton.className = 'btn btn-primary mt-4';
//                 submitButton.textContent = 'Submit';

//                 blockDiv.appendChild(submitButton);
//             }
//         }
//         mainContainer.appendChild(blockDiv);
//     }
//    
// });


