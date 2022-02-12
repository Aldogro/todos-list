import { functionForExport } from './index.js'

functionForExport()
console.log(button)

const button = document.querySelector('#button')


function takeMeHome () { window.location.href = '/' }

button.addEventListener('click', () => takeMeHome())