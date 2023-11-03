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

document.querySelector('.btn-cookie').addEventListener('click', () => {
    message.remove();
});