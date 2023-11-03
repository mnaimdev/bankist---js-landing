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