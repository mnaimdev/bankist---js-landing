
// Modal

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');


function closeModal(e) {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


function openModal(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


// btnOpenModal.forEach((item) => {
    
//     item.addEventListener('click', openModal);

//     btnCloseModal.addEventListener('click', closeModal);
    // overlay.addEventListener('click', closeModal);

    // document.addEventListener('keydown', (e) => {
    //     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //         closeModal();
    //     }
    // });

// });


for(let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === '27' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

}


// add element before header
const message = document.createElement('div');
const header = document.querySelector('.header');

message.classList.add('cookie-message');
// message.textContent = 'We use cookie for analytics & user experience.';
message.innerHTML = 'We use cookie for analytics & user experience. <button class="btn btn-cookie">Got it</button>';


// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

document.querySelector('.btn-cookie').addEventListener('click', () => {
    message.remove();
//    message.parentElement.removeChild();
});


// event
const h1 = document.querySelector('h1');

// h1.onmouseenter = function (e) {
//     alert('hello from mouse enter');
// }

// h1.onclick = function (e) {
//     alert('clicked');
// }


// --------------------------- event propagation ------------- //

// event bubbling

// const nav = document.querySelector('.nav');
// const navLinks = document.querySelector('.nav__links');
// const navLink = document.querySelector('.nav__link');


// const randomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + 1);
// }


// const randomColor = () => {
//    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// }


// nav.addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// });


// navLink.addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// });

// navLinks.addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// });

// ----------------------- end of event propagation ------------- //



// -------------- page navigation, event delegation ------------------ //

// multiple event handle with single handler that is not good
// const navLink = document.querySelectorAll('.nav__link');

// navLink.forEach((item) => {
//     item.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     })
// });


// set event handler in parent so that the child element can access this
const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function(e) {
    e.preventDefault();
    
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        })
});

// ------------------------- end smooth scroll -------------- //

// back to top
// const footerLink = document.querySelector('.back_to_top');
// footerLink.addEventListener('click', function (e) {
//     e.preventDefault();
//     window.scroll({
//         top: 0,
//         left: 0,
//         behavior: 'smooth' // This adds a smooth scrolling effect
//       });
// });


// ----------------------------- DOM Traversing ------------------------- //
const heading = document.querySelector('h1');
// console.log(heading.querySelectorAll('.highlight'));
// console.log(heading.children);
// console.log(heading.childNodes);
// console.log(heading.firstChild);
// console.log(heading.lastChild);

heading.firstElementChild.style.color = 'white';
heading.lastElementChild.style.color = 'orangered';
heading.closest('.header').style.background = 'wheat';
// heading.closest('h1').style.color = 'red';
// heading.previousElementSibling.style.color = 'blue';
// heading.nextElementSibling.style.color = 'skyblue';
// console.log(heading.parentNode);
// console.log(heading.parentElement);
// console.log(heading.parentElement.children);

[...heading.parentElement.children].forEach((el) => {
    if (el !== heading) {
       el.style.transform = 'scale(0.5)'; 
    }
});

// ------------------------- end DOM Traversing -------------- //


// --------------------------- tab component ------------------------------ //
const tabContainer = document.querySelector('.operations__tab-container');
const tab = document.querySelectorAll('.operations__tab');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.operations__tab');

    if (!clicked) return;


     // remove active tab & content
     tab.forEach((button) => {
        button.classList.remove('operations__tab--active');
    });
    
    tabContent.forEach((content) => {
        content.classList.remove('operations__content--active');
    })

    // activate tab & content
    clicked.classList.add('operations__tab--active');

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// --------------------------- end tab component -------------------------- //


// ----------------------------------- nav --------------------------------- //
const nav = document.querySelector('.nav');

const handleOpacity = (e, opacity) => {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach((el) => {
            if (el !== link) {
                el.style.opacity = opacity;
            }

            logo.style.opacity = opacity;
        });
    }
}

nav.addEventListener('mouseover', function(e) {
    handleOpacity(e, 0.5);
});


nav.addEventListener('mouseout', function(e) {
    handleOpacity(e, 1);
});
// ----------------------------- end nav ------------------------------------ //

// ------------------------------- sticky navigation --------------------------- //
const targetSection = document.getElementById('section--1');

window.addEventListener('scroll', function() {
    const targetScrollPosition = targetSection.getBoundingClientRect();
    
    if (window.scrollY > targetScrollPosition.top) {
        nav.classList.add('sticky-nav');
    } else {
        nav.classList.remove('sticky-nav');
    }
})

// ---------------------------------- end sticky navigation -------------- //


// ----------------------------------- slider -------------------------------- //
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const sliderLeftBtn = document.querySelector('.slider__btn--left');
const sliderRightBtn = document.querySelector('.slider__btn--right');

let currSlide = 0;
let sliderLength = slides.length;


// slider.style.overflow = 'visible';
// slider.style.transform = 'scale(0.4) translateX(-800px)';

slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * i}%)`;
});


sliderRightBtn.addEventListener('click', () => {

    if (currSlide === sliderLength - 1) {
        currSlide = 0;
    } else {
        currSlide++;
    }

    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    }); 
});


sliderLeftBtn.addEventListener('click', () => {
    if (currSlide === 0) {
        currSlide = sliderLength - 1;
    } else {
        currSlide--;
    }

    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    });
});

// ------------------------ end slider ------------------------------- //

document.addEventListener('DOMContentLoaded', function () {
    console.log('Load HTML & JS');
});


window.addEventListener('load', () => {
    console.log('Loaded full sources');
});


window.addEventListener('beforeunload', function (e) {
    e.preventDefault();

    e.returnValue = '';
});


// ---------------------- end dom ----------------------------- //


