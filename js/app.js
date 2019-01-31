(function() {
    console.log('app.js is loaded...');
    
    let clock; 
    let moveCount;
    let time = 0;
    const body = document.body;
    const deck = body.querySelector('.deck');
    const moves = body.querySelector('.moves');
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
       const cards = body.querySelectorAll('.card');
       moves.textContent = 0;
       moveCount = 0;

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

    function gameOver(restart) {
        let modal = body.querySelector('.modal');
        if (matchCards.length === 16) { modal.classList.add('show') }
        if (matchCards.length === 16 || restart) { timer(true) } 
        return false;
    }

    function restartGame(status = false) {
        for (let card of matchCards) {
            card.classList.remove("match", "no-match", ...cls);
        }
        openCards.splice(0);
        createBoard();
        gameOver(status);
    }

    function moveCounter() {
        const stars = body.querySelectorAll('.stars li');
        let move;
        moveCount++;

        if (moveCount % 2 === 0) {
            move = moveCount / 2;
            moves.textContent = move;
        }
        
        switch(move) {
            case 10:
                stars[stars.length - 1].remove();
                break;
            case 14: 
                stars[stars.length - 1].remove();
                break;
            default:
                break;
        }
        
    }
   
    function timer(status) {
        clearInterval(clock);
        clock = setTimeout(timer, 1000); // Interval for timer 
        time = time + 1;
        console.log(time);

        if (status) {
            console.log('interval cleared');
            clearInterval(clock);
            clock = null;
            time = 0;
        } 
    }

    createBoard();

    deck.addEventListener('click', chooseCards);
    body.querySelector('.fa-repeat').addEventListener('click', 
        function() {
            restartGame(true); 
        }, false);
})();

