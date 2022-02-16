let hamburger = document.querySelector('.hamburger');
let headerSmaller = document.querySelector('.header-smaller');
console.log(hamburger);

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  headerSmaller.classList.toggle('header-smaller-active');
});
