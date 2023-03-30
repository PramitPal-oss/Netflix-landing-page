'use strict'

const accordian = document.querySelectorAll('.contentBx')
const labelText = document.querySelectorAll('.label-text')

for (let i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener('click', function () {
        accordian[i].classList.toggle('open')
    })
}
