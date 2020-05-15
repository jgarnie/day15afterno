'use strict'

const cont = document.querySelector('#food');
const spinner = document.querySelector('.spinner');


const changer = () => {
    cont.classList.add('dish');
    spinner.classList.add('hide');
    console.log('hi');
}


setTimeout(changer, 4000)