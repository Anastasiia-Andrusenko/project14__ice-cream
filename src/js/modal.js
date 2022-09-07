(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-open]'),
    closeModalBtn: document.querySelector('[data-location-close]'),
    modal: document.querySelector('[data-location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-location-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-open]'),
    openModalBtnMobile: document.querySelector('[data-buy-mobile-open]'),
    closeModalBtn: document.querySelector('[data-buy-close]'),
    modal: document.querySelector('[data-buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-buy-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise-open]'),
    closeModalBtn: document.querySelector('[data-franchise-close]'),
    modal: document.querySelector('[data-franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-franchise-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-open]'),
    closeModalBtn: document.querySelector('[data-about-close]'),
    modal: document.querySelector('[data-about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-about-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ingredients-open]'),
    openModalBtn2: document.querySelector('[data-ingredients2-open]'),
    openModalBtn3: document.querySelector('[data-ingredients3-open]'),
    closeModalBtn: document.querySelector('[data-ingredients-close]'),
    modal: document.querySelector('[data-ingredients-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-ingredients-hidden');
  }
})();
