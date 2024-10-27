import './style.css'
document.addEventListener('DOMContentLoaded', () => {
    let listOfCards = document.querySelector('#U_Cards');
    let currentPosition = 0;
    listOfCards.style.left = currentPosition
    document.querySelector('.U_Left').addEventListener('click', function() {
        if (currentPosition < 0) {
            currentPosition += listOfCards.childNodes[1].offsetWidth + 2
            listOfCards.style.left = `${currentPosition}px`
            console.log('left', listOfCards.childNodes[1].offsetWidth, currentPosition)
            } else {
            console.log('Нельзя')
        }    
      });      
    document.querySelector('.U_Right').addEventListener('click', function() {
        if (currentPosition > (-listOfCards.offsetWidth + (listOfCards.childNodes[1].offsetWidth * 3) + (2 * 3))){
            currentPosition -= listOfCards.childNodes[1].offsetWidth + 2
            listOfCards.style.left = `${currentPosition}px`
            console.log('left', listOfCards.childNodes[1].offsetWidth, currentPosition)
        } else {
            console.log('Нельзя')
        }
      });      
})