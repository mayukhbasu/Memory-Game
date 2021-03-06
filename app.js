document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ];
    cardArray.sort(() => 0.5 - Math.random());
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    function createBoard(){
        for(let i = 0; i < cardArray.length; i ++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    };
    createBoard();
    function flipCard(){
        var cardId = this.getAttribute('id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneID = cardsChosenId[0];
        const optionTwoID = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert("You found a match");
            cards[optionOneID].setAttribute('src', 'images/white.png');
            cards[optionTwoID].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneID].setAttribute('src', 'images/blank.png');
            cards[optionTwoID].setAttribute('src', 'images/blank.png');
            alert("Sorry try again");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length /2){
            resultDisplay.textContent = "Congrats!! You found them all";
        }
    }
})