const c = document.querySelectorAll('.card');
let hasFlipped = false;
let fCard,secCard;
let lockBoard = false;
function flipCard(){
    if(lockBoard) return;
    console.log('i am clicked');
    console.log(this);
    this.classList.toggle('flip');
    if(hasFlipped == false){
        hasFlipped = true;
        fCard = this;
        console.log(hasFlipped,fCard);
        return;
    }
    //if the player has flipped the first card
    hasFlipped = false;
    secCard = this;
    console.log(hasFlipped,secCard);
    console.log(fCard.dataset.name);
    console.log(secCard.dataset.name);
    checkForMatch();
}
function checkForMatch(){
    if(fCard.dataset.name == secCard.dataset.name){
        disableCards();
    }
    else{
        unFlipCards();
    }
}
function disableCards(){
    fCard.removeEventListener('click',flipCard)
    secCard.removeEventListener('click',flipCard)
    resetBoard();
}
function unFlipCards(){
    lockBoard = true;
    setTimeout(()=>{
        fCard.classList.remove('flip');
        secCard.classList.remove('flip');
        resetBoard();
    },1000)
}
function resetBoard(){
    [hasFlipped,lockBoard] = [false,false];
    [fCard,secCard] = [null,null]
}
(function shuffle(){
    c.forEach(card=>{
        let randomPos = Math.floor(Math.random()*12);

        //order is css property of flex
        card.style.order = randomPos;
    })
})();
c.forEach(card=> card.addEventListener('click',flipCard));