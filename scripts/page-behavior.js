// Progress Bar
document.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;

    let scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

    document.getElementById('progress-bar').style.width = scrolled + '%';
});

// Pre Loader
window.addEventListener('load', function() {
    setTimeout(function() {
        var preloader = document.getElementById('preloader');
        var content = document.getElementById('content');

        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
                if (content) {
                    content.style.display = 'block';
                }
            }, 1000);
        }
    }, 200);
});


//Select Behavior
document.querySelectorAll('.form-select').forEach(select => {
    select.addEventListener('change', function() {
        if (this.value === '') {

            this.classList.remove('selected');

            const label = document.querySelector(`label[for="${this.id}"]`);
        
            if (label) {
                label.classList.remove('selected-label');
            }
        } else {
            this.classList.add('selected');
            
            const label = document.querySelector(`label[for="${this.id}"]`);
            
            if (label) {
                label.classList.add('selected-label');
            }
        }
    });
});


//Refresh Warning
document.addEventListener('DOMContentLoaded', function() {
    let isConfirm = false;

    if (sessionStorage.getItem('reloadFlag') === 'true') {
        sessionStorage.removeItem('reloadFlag');

        isConfirm = true;
    } else {
        sessionStorage.setItem('reloadFlag', 'true');
    }

    window.addEventListener('beforeunload', function(event) {
        if (sessionStorage.getItem('reloadFlag') === 'true' && !isConfirm) {
            event.preventDefault();
            event.returnValue = ''; 
        }
    });
});


//Previous and Next Button
function setupScrolling(scrollBoxSelector, prevButtonSelector, nextButtonSelector, itemSelector) {
    document.addEventListener('DOMContentLoaded', () => {
        const scrollBox = document.querySelector(scrollBoxSelector);
        const prevButton = document.querySelector(prevButtonSelector);
        const nextButton = document.querySelector(nextButtonSelector);

        const itemWidth = document.querySelector(itemSelector).offsetWidth;

        const gap = parseFloat(getComputedStyle(scrollBox).gap);

        const scrollAmount = itemWidth + gap;

        prevButton.addEventListener('click', () => {
            scrollBox.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            scrollBox.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        scrollBox.addEventListener('scroll', () => {
            prevButton.disabled = scrollBox.scrollLeft === 0;
            nextButton.disabled = scrollBox.scrollLeft + scrollBox.clientWidth >= scrollBox.scrollWidth;
        });

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

