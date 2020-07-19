import '../styles/index.scss';

import { tarifs } from './constants';

let payments = [];
let payment = {};

const companies = document.getElementById('companies');
const meters = document.getElementById('meters');
const items = companies.querySelectorAll('.left__company');

items.forEach((element) => {
    element.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-id');
        event.preventDefault();  

        items.forEach((element) => {
            element.className = 'left__company';
        });

        element.className = 'left__company active';

        payment.id = id;
        
        console.log(payment);
    });
});

meters.onchange = (event) => {
    const { value } = event.target;
    payment.meterId = value;
    console.log(payment);
};

const formElement = document.getElementById('form');
// console.log(formElement);
let formInputs = formElement.getElementsByTagName('input');
// console.log(asd);
formInputs.forEach((element) => {
    element.onchange = (event) => {
        const { value } = event.target;
        const previous = event.target.getAttribute('id') === 'previous';
        const current = event.target.getAttribute('id') === 'current';
        const currentOnDate = event.target.getAttribute('id') === 'payment';

        // console.log(value);
        // console.log(currentOnDate);

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

        // if (previous) {
        //     console.log(previous);
        // }

        // items.forEach((element) => {
        //     element.className = 'left__company';
        // });

        // element.className = 'left__company active';

        // payment.id = id;
    };
});

formElement.onchange = (event) => {
  
    // let form = event.target.closest('form'),
    //     name = form.find('input[type="text"]').val();

    //     if (form.hasAttributeNS('input[type="text"]')) {
    //   console.log(123);
    //  }
    

    //  for(let i = 0; i < asd.length; i++) {
    //     const { value } = event.target;
    //     console.log(asd[i].getAttribute('id'));
    //     console.log(value);

    //     payment.previous =
    //     payment.current =
    //     payment.currentOnDate =
    // }

    // $.ajax({
    //     url: form.attr('action'),
    //     type: form.attr('method'),
    //    ...
    // });
};

