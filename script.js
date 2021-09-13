//--Adds to a node list
const boxes = document.querySelectorAll('.box')

//--Event Listener
window.addEventListener('scroll', checkBoxes)

//--Runs Function
checkBoxes()

//Function
function checkBoxes() {
    //--Variable
    const triggerBottom = window.innerHeight / 5 * 4

    //--Node List to loop through
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

