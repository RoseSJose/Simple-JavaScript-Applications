const questions = [
    {
        question: "What is 10 + 10?",
        options: ['23', '34', '20', '45'],
        answer: '20'
    },
    {
        question: "What is 5*5?",
        options: ['34', '25', '45', '23'],
        answer: '25'
    }
];

let correct = 0;
let question_no = 0;
document.addEventListener('DOMContentLoaded', () => {
    
        load_question(0);
        update_score(0);
    

}
);

function update_score(correct) {
	document.querySelector(
		"#correct"
	).innerHTML = `${correct} of ${questions.length}`;
}


function load_question(question_no)
{
    if(question_no == questions.length)
    {
        update_score(correct);
        return false;
    }
    document.querySelector('#question').innerHTML = `${question_no+1}. ${questions[question_no].question}`;
    const options = document.querySelector('#options');
    options.innerHTML = '';
    for(const option of questions[question_no].options){
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll('.option').forEach(option => {
        option.onclick = () => {
            if(option.textContent == questions[question_no].answer)
            {
                alert('correct');
                correct++;
                
                
            }
            load_question(question_no+1);
            update_score(correct)
        }
    });

}