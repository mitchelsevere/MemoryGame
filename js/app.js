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
        /*
            Shuffle cards in deck
            Loop through cards and insert cardType in card
        */
       const shuffleCards = shuffle(cardType);
    }

    function chooseCard(evt) {
        /*
        If openCards is odd 
            then [unshift] the clicked  and compare the first index with second index to see if they match [run check match function].
        Else
            Create array with class to show and open
            Apply class to card using classList
            Store choice as first index [unshift] in a openCards array 
        End
        */
       console.log(`It's clicked, ${evt.target.firstElementChild.className}`);
       moveCounter();
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

    document.body.querySelector('.deck').addEventListener('click', chooseCard);
})();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
