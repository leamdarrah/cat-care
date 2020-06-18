

/****************TUTORIAL FOLLOWED ON https://www.youtube.com/watch?v=MBaw_6cPmAw*******************/
const openModalButtons 	= document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay 			= document.getElementById('overlay')


openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})


closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.popup')
		closeModal(modal)
	})
})

function openModal(modal){
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal){
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}









/*---------CODE TO SHOW QUIZ QUESTIONS AND ANSWERS-------*/
/*CREDIT: https://codepen.io/WebDevSimplified/pen/xNvaaz*/

const startButton = document.getElementById('start-btn')	//click button to 
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}



function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}




function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}



function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}




function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}





function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}




//questions to use for the outside
const questions = [
  {
    question: 'What should you do when you let your cat go outside?',
    answers: [
      { text: 'do nothing', correct: false },
      { text: 'microchip them', correct: true },
      {	text: 'do not spay/neuter them', correct: false}
    ]
  },
  {
    question: 'Feral cats are...',
    answers: [
      { text: 'cats who have never interacted with humans', correct: true },
      { text: 'mean cats who live in random places', correct: false },
      { text: 'cats who live in the community and are friendly with the people', correct: false }
    ]
  },
  {
    question: 'What does TNR stand for?',
    answers: [
      { text: 'trust and resolve', correct: false },
      { text: 'trap and release', correct: true },
      { text: 'train and reward', correct: false }
    ]
  },
  {
    question: 'Ear tipped cats are...',
    answers: [
      { text: 'indoor cats owned by someone', correct: false },
      { text: 'community cats who roam the neighborhood', correct: true },
      { text: "newborn kittens who haven't developed their ears fully", correct: false}
    ]
  }
]












