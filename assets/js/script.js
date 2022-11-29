// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

let headCounter = 0;
let tailsCounter = 0;
let headPercent = 0;
let tailsPercent = 0;
let totalClicks = headCounter + tailsCounter;

let usedVariables = [
    'headCounter',
    'tailsCounter',
    'headPercent',
    'tailsPercent',
    'totalClicks',
];


function flipCoin(){
    let coinOdds = Math.random();
    if( coinOdds < 0.5 ){
        flipHeads();
    }else {
        flipTails();
    }
    headPercent = (( headCounter / ( headCounter + tailsCounter ) ) * 100);
    headPercent = headPercent.toFixed(2);
    document.querySelector('#heads-percent').textContent = headPercent + '%';
    
    tailsPercent = (( tailsCounter / ( headCounter + tailsCounter ) ) * 100);
    tailsPercent = tailsPercent.toFixed(2);
    document.querySelector('#tails-percent').textContent = tailsPercent + '%';

    totalClicks = headCounter + tailsCounter;
    document.querySelector('#total-clicks').textContent = totalClicks;
}


function flipHeads(){
    headCounter++;
    document.querySelector('#heads').textContent = headCounter;
    let changeImage = document.querySelector('#coinImage');
    changeImage.setAttribute("src", "./assets/images/penny-heads.jpg");
    document.querySelector('.message-container').textContent = 'You flipped a heads';
}

function flipTails(){
    tailsCounter++;
    document.querySelector('#tails').textContent = tailsCounter;
    let changeImage = document.querySelector('#coinImage');
    changeImage.setAttribute("src", "./assets/images/penny-tails.jpg");
    document.querySelector('.message-container').textContent = 'You flipped a tails';

}


function clearScore() {
    tailsCounter = 0;
    tailsPercent = 0;
    headCounter = 0;
    headPercent = 0;
    totalClicks = 0;
    document.querySelector('#tails').textContent = '0';
    document.querySelector('#tails-percent').textContent = '0%';
    document.querySelector('#heads').textContent = '0';
    document.querySelector('#heads-percent').textContent = '0%';
    document.querySelector('#total-clicks').textContent = '0';
    document.querySelector('.message-container').textContent = "LET'S PLAY";
    let changeImage = document.querySelector('#coinImage');
    changeImage.setAttribute("src", "./assets/images/penny-heads.jpg");
}

document.querySelector('#flip').addEventListener('click', function() {
    flipCoin();
})

document.querySelector('#clear').addEventListener('click', function(){
    clearScore();
})
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})