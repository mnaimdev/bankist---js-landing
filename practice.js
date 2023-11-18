// ------------------------ modal ----------------------- //
const modalBtn = document.querySelectorAll('.btn--show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.btn--close-modal');


const showModal = (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


const removeModal = (e) => {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', showModal);

    closeBtn.addEventListener('click',removeModal);

    overlay.addEventListener('click', removeModal);

}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.keyCode === 27) {
        removeModal();
    }
});


// ---------------------------- end modal ------------------------------- //

// --------------------- cookie message --------------------------- //

const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookie for analytics & user experience. <button class="btn btn-cookie">Got it</button>';
header.append(message);


document.querySelector('.btn-cookie').addEventListener("click", () => {
   message.remove();
});


// --------------------------- end cookie message ---------------------- //


// -------------------------- event, bubble, deligate ----------------- //

// event
// const logo = document.querySelector('.nav__logo');
// logo.onmouseenter = () => {
//     alert('mouseenter event call');
// }

// logo.onmouseover = () => {
//     alert('mouseover event call');
// }

// logo.onclick = () => {
//     alert('onclick event call');
// }


// event bubble
// const nav = document.querySelector('.nav');
// const navLinks = document.querySelector('.nav__links');
// const navLink = document.querySelectorAll('.nav__link');

// const randomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + 1);
// }

// const randomColor = () => {
//     return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// }

// nav.addEventListener('click', function() {
//     this.style.backgroundColor = randomColor();
// });

// navLinks.addEventListener('click', function() {
//     this.style.backgroundColor = randomColor();
// });


// navLink.forEach((item) => {
//     item.addEventListener('click', function() {
//         this.style.backgroundColor = randomColor();
//     });
// })

// event deligate and smooth scroll
const navLinks = document.querySelector('.nav__links');
navLinks.addEventListener('click', function(e) {
    e.preventDefault();

    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
    });
});

// learn more section
document.querySelector('.btn--scroll-to').addEventListener('click', function(e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
    })
});


// back to top
const backToTopBtn = document.querySelector('.scroll-top');
backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();

   window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
   })

});


// ----------------------------- end event -------------------------------------------- //

// ------------------------------- DOM Traversing -------------------------------------- //
const heading = document.querySelector('h1');
// console.log(heading.parentElement);
// console.log(heading.parentNode);
// console.log(heading.children);
// console.log(heading.childNodes);
// console.log(heading.firstChild);
// console.log(heading.lastChild);
// console.log(heading.querySelectorAll('.highlight'));

heading.firstElementChild.style.color = 'white';
heading.lastElementChild.style.color = 'orangered';

// heading.closest('.header').style.backgroundColor = 'red';
// heading.closest('h1').style.backgroundColor = 'red';
// heading.previousElementSibling.style.color ='blue';
// heading.nextElementSibling.style.color ='red';

[...heading.parentElement.children].forEach((el) => {
    if (el !== heading) {
        el.style.transform = 'scale(0.8)';
    }
});


const nav = document.querySelector('.nav');

const handleOpacity = (e, opacity) => {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('.nav__logo');

        siblings.forEach((el) => {
            if (el !== link) {
                el.style.opacity = opacity;
            }
        });

        logo.style.opacity = opacity;
    }
}


nav.addEventListener('mouseover', function(e) {
    handleOpacity(e, 0.5);
});


nav.addEventListener('mouseout', function(e) {
    handleOpacity(e, 1);
});


// ---------------------------- end DOM Traversing -------------------------------------- //


// -------------------------- tab ---------------------------------------------------------- //
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const tab = document.querySelectorAll('.operations__tab');

tabContainer.addEventListener('click', function(e) {
    let currentElement = e.target.closest('.operations__tab');

    if (!currentElement) {
        return;
    }


    tab.forEach((item) => {
        item.classList.remove('operations__tab--active');
    });

    tabContent.forEach((item) => {
        item.classList.remove('operations__content--active'); 
    });

    currentElement.classList.add('operations__tab--active');

    document.querySelector(`.operations__content--${currentElement.dataset.tab}`).classList.add('operations__content--active');
});

// ------------------------------- sticky navigation ----------------------- //
const targetSection = document.getElementById('section--1');

window.addEventListener('scroll', function () {
    const targetPosition = targetSection.getBoundingClientRect();

    if (this.window.scrollY > targetPosition.top) {
        nav.classList.add('sticky-nav');
    } else {
        nav.classList.remove('sticky-nav');
    }
});