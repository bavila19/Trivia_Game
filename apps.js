const correct_option1  = document.querySelector('.option-one')
const box_one = document.querySelector('.box')
correct_option1.addEventListener("click",(event) =>{
    event.preventDefault()
    correct_option1.style.backgroundColor="green"
    box_one.style.display="block"
});

const incorrect_answer2 = document.querySelector('.option-two')
incorrect_answer2.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer2.style.backgroundColor="red"
    box_one.style.display="block"
});

const incorrect_answer3= document.querySelector('.option-three')
incorrect_answer2.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer3.style.backgroundColor="red"
    box_one.style.display="block"
});
// Card two
const box_two = document.querySelector('.boxtwo')
const correct_options = document.querySelector('.option-four')
correct_options.addEventListener("click", (event) =>{
    event.preventDefault()
    // console.log ("it works")
    box_two.style.display="none"
    
});
const incorrect_answer4= document.querySelector('.option-five')
incorrect_answer4.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer4.style.backgroundColor="red"
    box_two.style.display="block"
});

const incorrect_answer5= document.querySelector('.option-six')
incorrect_answer5.addEventListener("click",(event) =>{
    event.preventDefault()
    incorrect_answer5.style.backgroundColor="red"
    box_two.style.display="block"
});
const box_four = document.querySelector('.box-four')
const correct_option4 = document.querySelector('.option-ten')
correct_option4.addEventListener("click", (event) =>{
    event.preventDefault()
    box_four.style.display="none"
});
//start
let score = 0
const startb = document.querySelector('.startbtn')
const box_overlay = document.querySelector('.overlay')
startb.addEventListener("click",(event) =>{
    event.preventDefault()
    box_overlay.style.display="none"
    if (startb === true){
        startb +=5
    }
    
});


