import { functionForExport } from './index.js'

functionForExport()

const goHome = document.querySelector('#go-home')


function takeMeHome () { window.location.href = '/' }

goHome.addEventListener('click', () => takeMeHome())