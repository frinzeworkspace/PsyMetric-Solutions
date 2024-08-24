// EQ
const numQuestions = 10;

const sections = [
    { id: 'EA', title: 'EA' },
    { id: 'EM', title: 'EM' },
    { id: 'SEA', title: 'SEA' },
    { id: 'RM', title: 'RM' }
];

function generateRadioButtons(questionId) {
    let html = '';
    for (let i = 0; i <= 4; i++) {
        html += `
            <input type="radio" class="btn-check" id="${questionId}-${i}" name="${questionId}" value="${i}" autocomplete="off">
            <label class="btn btn-outline-primary ${i === 4 ? 'custom-radio-last' : 'custom-radio'}" for="${questionId}-${i}">${i}</label>
        `;
    }
    return html;
}

function generateQuestionBlocks(sectionId) {
    let html = '';
    for (let i = 1; i <= numQuestions; i++) {
        html += `
            <div class="input-group input-group-eq mb-3">
                <label for="${sectionId}-${i}" class="input-group-text custom-label">Q${i}</label>
                <div id="${sectionId}-${i}" class="btn-group selection-cont selection-cont-eq" role="group" aria-labelledby="${sectionId}-${i}Label">
                    ${generateRadioButtons(`${sectionId}-${i}`)}
                </div>
            </div>
        `;
    }

    if (sectionId === 'RM') {
        html += `<button id="EQ-submitBtn" class="btn btn-primary">Submit</button>`;
    }
    return html;
}

function generateQuestionnaire() {
    let html = '';
    sections.forEach(section => {
        html += `
            <div class="questions EQ-questions">
                <h3>${section.title}</h3>
                ${generateQuestionBlocks(section.id)}
            </div>
        `;
    });
    return html;
}

document.querySelector('.EQ-special').innerHTML = generateQuestionnaire();


