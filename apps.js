const cardContainer= document.querySelectorAll('.card-container')


const correct_option1  = document.querySelector ('.option-one')
const box_one= document.querySelector('.box')
correct_option1.addEventListener("click",(event) =>{
    event.preventDefault()
    correct_option1.style.backgroundColor="green"
    box_one.style.display="none"
    plusScore()
    
});

const incorrect_answer2 = document.querySelector('.option-two')
incorrect_answer2.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer2.style.backgroundColor="red"
    box_one.style.display="none"
    minusScore()
});

const incorrect_answer3= document.querySelector('.option-three')
incorrect_answer3.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer3.style.backgroundColor="red"
    box_one.style.display="none"
    minusScore()
});
const box_two = document.querySelector('.box-two')
const correct_options = document.querySelector('.option-four')
correct_options.addEventListener("click", (event) =>{
    event.preventDefault()
    box_two.style.display="none"
    plusScore()
});
const incorrect_answer4= document.querySelector('.option-five')
incorrect_answer4.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer4.style.backgroundColor="red"
    box_two.style.display="block"
    minusScore()
});

const incorrect_answer5= document.querySelector('.option-six')
incorrect_answer5.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer5.style.backgroundColor="red"
    box_two.style.display="block"
    minusScore()
});

const box_three= document.querySelector('.box-three')
const incorrect_answer6= document.querySelector('.option-seven')
incorrect_answer6.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer6.style.backgroundColor="red"
    box_three.style.display="block"
    minusScore()
});

const correct_option4 = document.querySelector('.option-eight')
correct_option4.addEventListener("click", (event) =>{
    event.preventDefault()
    box_three.style.display="none"
    plusScore()
    
});

const incorrect_answer7= document.querySelector('.option-nine')
incorrect_answer7.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer7.style.backgroundColor="red"
    box_three.style.display="block"
    minusScore()
});

const box_four = document.querySelector('.box-four')
const correct_option5 = document.querySelector('.option-ten')
correct_option5.addEventListener("click", (event) =>{
    event.preventDefault()
    box_four.style.display="none"
    plusScore()
    
});

const incorrect_answer8= document.querySelector('.option-eleven')
incorrect_answer8.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer8.style.backgroundColor="red"
    box_four.style.display="block"
    minusScore()
});

//start
const startb = document.querySelector('.startbtn')
const box_overlay = document.querySelector('.overlay')
startb.addEventListener("click",(event) =>{
    event.preventDefault()
    box_overlay.style.display="none"
    
});

const displayNum= document.getElementById("incCount")
let disNum = 0
const youLose = document.createElement('h2')
const youWin = document.createElement('h2')


function plusScore() {
    displayNum.innerText = disNum +=5
    if (disNum >= 20){
        youWin.innerHTML="You Win"
        document.querySelector('.message').appendChild(youWin)
    }
}


function minusScore(){
    displayNum.innerText= disNum -=5;
    if (disNum <=10){
        youLose.innerHTML="you lost:(" 
        document.querySelector('.message').appendChild(youLose)
    }
}

const restartButton = document.querySelector('.restart')
restartButton.addEventListener("click",()=>{
    restartButton.forEach(box => {
        box.classList.remove()
    });
})