import '../styles/index.scss';

import { tarifs } from './constants';

let payments = [];
let payment = {};

const companies = document.getElementById('companies');
const meters = document.getElementById('meters');
const items = companies.querySelectorAll('.left__company');
const formElement = document.getElementById('form');

items.forEach((element) => {
    element.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        event.preventDefault();  

        items.forEach((element) => {
            element.className = 'left__company';
        });

        element.className = 'left__company active';

        payment.id = id;


        const btn = formElement.querySelector('.form__footer .btn');

        btn.onclick = (event) => {
            event.preventDefault();  

            const previous = payment.previous;
            const current = payment.current;
              
            for(const key in tarifs) {
                if (id === key) {
                    console.log(payment);
                    payment.total = (current - previous) * tarifs[key];
                    payments[id] = payment;
                    
                    payment = {};

                    console.log(payment);
                    console.log(payments);
                }
            }    
        };
    });
});

let btnClear = formElement.querySelector('.form__footer .btn-outline');
btnClear.onclick = (event) => {
    event.preventDefault();  
    
    payments = [];
    console.log(payments); 
};

meters.onchange = (event) => {
    const { value } = event.target;
    payment.meterId = value;
    console.log(payment);
};


let formInputs = formElement.getElementsByTagName('input');

formInputs.forEach((element) => {
    element.onchange = (event) => {
        const { value } = event.target;
        const previous = event.target.getAttribute('id') === 'previous';
        const current = event.target.getAttribute('id') === 'current';
        const currentOnDate = event.target.getAttribute('id') === 'payment';

        if (previous) {
            payment.previous = value;
        }

        if (current) {
            payment.current = value;
        }

        if (currentOnDate) {
            payment.currentOnDate = value;
        }

       console.log(payment);
    };
});


