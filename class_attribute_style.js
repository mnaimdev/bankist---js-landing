// style, attribute, classes

// inline style --- //
// message.style.color = 'red';

// external css ---- //
// message.style.height = Number.parseInt(getComputedStyle(message).height) + 200 + 'px';
// console.log(typeof Number.parseInt(getComputedStyle(message).height));

// css variable --- //
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ---- attributes --- //
// const link = document.querySelector('a');
// console.log(link.href); // absolute url
// console.log(link.getAttribute('href')); // relative url

// const logo = document.querySelector('img');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.getAttribute('developer'));
// console.log(logo.setAttribute('programmer', 'Mohammad Naim'));

// ---- data attribute --- //
// console.log(logo.dataset.storeLink);

// const logo = document.querySelector('img');
