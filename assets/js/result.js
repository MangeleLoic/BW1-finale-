let peppino1 = localStorage.getItem('peppino');
console.log(peppino1);

let giannino1 = localStorage.getItem('giannino');
console.log(giannino1);


const ctx = document.getElementById('myDoughnutChart').getContext('2d');
const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [((100 / giannino1) * (giannino1 - peppino1)).toFixed(1), ((100 / giannino1) * peppino1).toFixed(1)],
            backgroundColor: [
                '#D20094',
                '#00FFFF',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
    },
});



const correctAswers = document.getElementById('correctAswers');
const percentualeCorrect = document.createElement('h2');
percentualeCorrect.style.fontWeight = 'bolder';
const pCounterQuestions = document.createElement('p');

percentualeCorrect.innerHTML = `${((100 / giannino1) * peppino1).toFixed(1)}%`;
pCounterQuestions.innerHTML = `${peppino1} / ${giannino1} questions`;

correctAswers.appendChild(percentualeCorrect);
correctAswers.appendChild(pCounterQuestions);


const wrongAnswers = document.getElementById('wrongAnswers');
const percentualeWrong = document.createElement('h2');
percentualeWrong.style.fontWeight = 'bolder';
const pCounterQuestionsWrong = document.createElement('p');

percentualeWrong.innerHTML = `${((100 / giannino1) * (giannino1 - peppino1)).toFixed(1)}%`;;
pCounterQuestionsWrong.innerHTML = `${giannino1 - peppino1} / ${giannino1} questions`;

wrongAnswers.appendChild(percentualeWrong);
wrongAnswers.appendChild(pCounterQuestionsWrong);




const textResults = document.getElementById('textResults');
const textResultsTitle = document.createElement('h4');
const textResultsSubTitle = document.createElement('h4');
const textResultsP = document.createElement('p');

textResults.appendChild(textResultsTitle);
textResults.appendChild(textResultsSubTitle);
textResults.appendChild(textResultsP);

if (((100 / giannino1) * peppino1) >= 60) {
    textResultsTitle.innerHTML = 'Congratulations!';
    textResultsSubTitle.innerHTML = 'You passed the exam.';
    textResultsSubTitle.style.color = '#00FFFF';
    textResultsP.innerHTML = `We'll send you the certificate in few minutes.
Check your email (including promotions / spam folder)`;
} else {
    textResultsTitle.innerHTML = 'Wrong!';
    textResultsSubTitle.innerHTML = 'You failed the exam.';
    textResultsSubTitle.style.color = '#D20094';
    textResultsP.innerHTML = `You will not receive any certificate. You will be contacted for the oral exam. GOAT!`;
}




/* prove libreria html2pdf */

let input1 = localStorage.getItem('vecienz');
console.log(input1);

let data = new Date();
data = `${data.getDay()}/${data.getMonth() + 1}/${data.getFullYear()}`;

console.log(data);


const nameCertificato = document.getElementById('nameCertificato');
nameCertificato.innerHTML = input1;

const dateCertificato = document.getElementById('dateCertificato');
dateCertificato.innerHTML = data;



function generatePDF() {
    const element = document.getElementById('certificazioneDiv');
    const img = document.getElementById('certificato');

    const width = img.clientWidth;
    const height = img.clientHeight;

    const mmWidth = width * 0.264583;
    const mmHeight = height * 0.264583;

    const opt = {
        margin: [0, 0, 0, 0],
        filename: `certificato_${input1}`,
        image: { type: 'png', quality: 1 },
        html2canvas: { scale: 1, useCORS: true },
        jsPDF: { unit: 'mm', format: [mmWidth, mmHeight], orientation: 'landscape' }
    };

    html2pdf().from(element).set(opt).save();
}

const generatePDFButton = document.getElementById('generatePDF');
generatePDFButton.addEventListener('click', generatePDF);


let correct = parseInt(percentualeCorrect.textContent);
console.log(correct)

const absolute = document.getElementById('absolute');
console.log(absolute)


if (correct <= 60) {
    absolute.style.display = 'none'
} else {
    absolute.style.display = ''
    window.onload = startConfetti;
}


function createConfetti() {
    const confetti = document.createElement('div');
    const header = document.getElementsByTagName('header')[0];
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    header.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

function startConfetti() {
    setInterval(createConfetti, 100);
}



