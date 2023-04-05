const ball = document.querySelector('.ball')
const tringleText = document.querySelector('.tringleText')

setTimeout(() => {
    ball.classList.remove('onStart')
}, 3000);

ball.addEventListener('mouseover', (e) => {
    ball.classList.add('shake')
})

ball.addEventListener('mouseleave', (e) => {
    ball.classList.remove('shake')
})

const answerQuestion = () => {
    const answers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ]
    
    const answer = answers[Math.floor(Math.random() * answers.length)]

    tringleText.innerHTML = answer
}

ball.addEventListener('click', (e) => {
    answerQuestion()
})