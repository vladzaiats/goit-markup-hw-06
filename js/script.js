function openModal(selector) {
  let modal = document.querySelector(selector);
  modal.addEventListener('click', removeModal);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.toggle('no-scroll');
}
function closeModal(selector) {
  let modal = document.querySelector(selector);
  modal.addEventListener('click', removeModal);
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.toggle('no-scroll');
}
function openMobileMenu(selector) {
  let modal = document.querySelector(selector);
  modal.addEventListener('click', removeModal);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.toggle('no-scroll');
}
function closeMobileMenu(selector) {
  let modal = document.querySelector(selector);
  modal.addEventListener('click', removeModal);
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.toggle('no-scroll');
}

function removeModal(e) {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('is-open');
    document.body.classList.toggle('no-scroll');
  }
}
