(function() {
    console.log('app.js is loaded...');
    let clock;
    let time = 0;
    let moveCount = 0;

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
    
    const openCards = []; // The open cards
    const matchCards = []; // All of the match cards
    const cls = ["show", "open"];

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

       for (let i = 0; i < cards.length; i++) {
           cards[i].innerHTML = shuffleCards[i];
       }
    }

    function chooseCards(evt) {
        const target = evt.target;
        
        if (time === 0) {
            timer();
        }

        if (!target.classList.contains('show') || !target.classList.contains('match')) {
            openCards.unshift(target);
            target.classList.add(...cls);

            if (openCards.length === 2) {
                setTimeout(function() {
                    for (let card of openCards) {
                        card.classList.remove(...cls);
                    }
                }, 1000);
            }
        }
    }

    function checkMatch() {
        
    }

    function gameOver() {
        if (openCards.length === 16) {
            return true;
        } 
    }

    function restartGame() {
        for (let card of openCards) {
            card.classList.remove("match", "no-match", ...cls);
        }
        openCards.splice(0);
        createBoard();
    }

    function moveCounter() {
        const moves = document.body.querySelector('.moves');
        const stars = document.body.querySelectorAll('.stars li');
        moveCount++;
        moves.textContent = moveCount;
    }

    function timer() {
        clock = setInterval(function() { 
            if (gameOver) {
                ++time;
                console.log(time);
            } else {
                clearInterval(clock);
            }
        }, 1000);
    }

    createBoard();
    document.body.querySelector('.deck').addEventListener('click', chooseCards);
    document.body.querySelector('.fa-repeat').addEventListener('click', restartGame);
})();

