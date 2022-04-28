import { functionForExport } from './index.js'

functionForExport()

const goHome = document.querySelector('#go-home')


function takeMeHome () { window.location.href = '/todos-list' }

goHome.addEventListener('click', () => takeMeHome())