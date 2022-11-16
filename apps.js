const startb = document.querySelector('.startbtn')
const box_overlay = document.querySelector('.overlay')
const correct_options = document.querySelector('.option-three')
const box_two = document.querySelector('.boxtwo')


console.log(correct_options)
// console.log(box_overlay)
startb.addEventListener("click",(event) =>{
    event.preventDefault()
    box_overlay.style.display="none"
});

correct_options.addEventListener("click", (event) =>{
    event.preventDefault()
    // console.log ("it works")
    box_two.style.display="none"

})

// move/remove overy when clicked 
// somehow move overlay to the center of the screant 
//use class for option one & two 

