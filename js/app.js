(function() {
    console.log('app.js is loaded...');
    let clock; 
    let time = 0;
    let moveCount = 0;
    const deck = document.body.querySelector('.deck');
    const moves = document.body.querySelector('.moves');
    const openCards = []; // The open cards
    const matchCards = []; // All of the match cards
    const cls = ["show", "open"];
    // list of cards
    const cardType = [
        '<i class="fa fa-diamond"></i>',
        '<i class="fa fa-paper-plane-o"></i>',
        '<i class="fa fa-anchor"></i>',
        '<i class="fa fa-bolt"></i>',
        '<i class="fa fa-cube"></i>',
        '<i class="fa fa-leaf"></i>',
        '<i class="fa fa-bicycle"></i>',
        '<i class="fa fa-bomb"></i>',
        '<i class="fa fa-diamond"></i>',
        '<i class="fa fa-paper-plane-o"></i>',
        '<i class="fa fa-anchor"></i>',
        '<i class="fa fa-bolt"></i>',
        '<i class="fa fa-cube"></i>',
        '<i class="fa fa-leaf"></i>',
        '<i class="fa fa-bicycle"></i>',
        '<i class="fa fa-bomb"></i>'
    ];

    // Shuffle function from http://stackoverflow.com/a/2450976
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function createBoard() {
       const shuffleCards = shuffle(cardType);
       const cards = document.body.querySelectorAll('.card');
       moves.textContent = 0;

       for (let i = 0; i < cards.length; i++) {
           cards[i].innerHTML = shuffleCards[i];
       }
    }

    function chooseCards(evt) {
        const target = evt.target;

        if (time === 0) { // Timer won't start until first card is clicked.
            timer();
        }

        if (!target.classList.contains('show') || !target.classList.contains('match')) {
            openCards.push(target);
            target.classList.add(...cls);

            if (openCards.length === 2) {
                deck.removeEventListener('click', chooseCards);
                setTimeout(function() {
                    for (let card of openCards) {
                        card.classList.remove(...cls);
                    }
                    checkMatch();
                }, 1000);
            }
            moveCounter();
        }
    }

    function checkMatch() {
        let cardOne = openCards[0].firstElementChild.classList[1];
        let cardTwo = openCards[1].firstElementChild.classList[1];
        console.log(cardOne, cardTwo);
        if (cardOne === cardTwo) {
            for (let card of openCards) {
                card.classList.add('match');
            }
            matchCards.push(...openCards);
        } else {
            for (let card of openCards) {
                card.classList.add('no-match');
                setTimeout(function() {
                    card.classList.remove('no-match');
                }, 800);
            }
        }
        openCards.splice(0, 2);
        deck.addEventListener('click', chooseCards);
        gameOver();
    }

    function gameOver() {
        if (matchCards.length === 16) {
            console.log('game over');
            return true;
        } 
        return false;
    }

    function restartGame() {
        for (let card of matchCards) {
            card.classList.remove("match", "no-match", ...cls);
        }
        openCards.splice(0);
        createBoard();
    }

    function moveCounter() {
        const stars = document.body.querySelectorAll('.stars li');
        moveCount++;
        if (moveCount % 2 === 0) {
            moves.textContent = moveCount / 2;
        }
    }
   
    function timer() {
        clock = setTimeout(timer, 1000); // Interval for timer 
        if (gameOver()) {
            console.log('interval cleared');
            clearInterval(clock);
            clock = 0;
        } 

        time = time + 1;
        console.log(time);
    }

    createBoard();
    deck.addEventListener('click', chooseCards);
    document.body.querySelector('.fa-repeat').addEventListener('click', restartGame);
})();

