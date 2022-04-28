const button = document.querySelector('#button')
const addNumberButton = document.querySelector('#add-number')
const numbersList = document.querySelector('#numbers-ul')

// Actions
const goToAdd = () => window.location.href = 'add/index.html'
const addNumber = () => {
  const number = document.createTextNode(Math.random().toFixed(2) * 100)
  const li = document.createElement('li')
  li.appendChild(number)
  numbersList.appendChild(li)
}

// Event Listeners
if (button) {
  button.addEventListener('click', () => goToAdd())
}
if (addNumberButton) {
  addNumberButton.addEventListener('click', () => addNumber())
}

const functionForExport = () => {
  console.log('This is a function designed to be exported')
}

export {
  functionForExport
}
