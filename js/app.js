(function() {
    console.log('app.js is loaded...');
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
    
    const openCards = []; // All of the open cards

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

    function chooseCard(evt) {
        const target = evt.target;
        const cls = ["show", "open"];
    
        if (openCards.length % 2 !== 0) {
            openCards.unshift(target.firstElementChild.className);
            if (openCards[0] === openCards[1]) {
                checkMatch();
            }
        } else {
            target.classList.add(...cls);
            openCards.unshift(target.firstElementChild.className);
        }
       moveCounter();
       console.log(openCards);
    }

    function checkMatch(cls) {
        /* 
        If a match 
            then unshift the current element and change the first two elements class to match and remove open and show 
        Else
            then remove the open and show class and splice the 0 and 1 index from openCards array
        End
        */
    }

    function gameOver() {
        /*
            If open cards array is === 16 then game is over and message is displayed
        */
    }

    function moveCounter() {
        const moves = document.body.querySelector('.moves');
        let moveCount = 0;
        moves.textContent = moveCount;
        // Incerement moves counter
    }

    createBoard();
    document.body.querySelector('.deck').addEventListener('click', chooseCard);
})();

