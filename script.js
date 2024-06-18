

//this is the function that will be going into the event listner
const handleClick = (e) => {
    console.log('clicked', e.target.className)
    
    
    //grab the p tag and replace the text with the e.target.className
    document.querySelector('p').textContent = e.target.className
    
    //choose a random thing between rock paper or scissors 
    //and replace it with that
    //random number between 0 and 2
    //math.random returns a decimal number between 0 and 1 
    //Math.floor rounds down to the nearest interger
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]

    //compare choices and see the winner
    //tied
    //computers wins 
    //you wins
    // e.target.className is your choice
    // computerChoice is the computers choice
    // and the if else statment compares choices and determines win lose or draw
    let msg = ''
    if (e.target.className === computerChoice) {
        msg = 'You tied!'
    } else if (e.target.className === choices[0] && computerChoice === choices[2]) {
        msg = 'Congrats! You win!'
    } else if (e.target.className === choices[1] && computerChoice === choices[0]) {
        msg = 'Congrats! You win!'
    } else if (e.target.className === choices[2] && computerChoice === choices[1]) {
        msg = 'Congrats! You win!'
    } else {
        msg = 'You lose! Try again?'
    }

    const text = `you choose ${e.target.className} and computer chooses ${computerChoice}. ${msg}`

    document.querySelector('p').textContent = text
}





//click on the button and display on my prompt what i clicked
//step 1. add event listers for each button
document.querySelector('.rock').addEventListener('click', handleClick)
document.querySelector('.paper').addEventListener('click', handleClick)
document.querySelector('.scissors').addEventListener('click', handleClick)
//step 2. when the button is clicked we show the text to be the class
//note: when in doubt log it out

