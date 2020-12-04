

const modal = document.querySelector('.modal');

const body = document.querySelector('body');

const firstFocusableElement = document.querySelector('.btn-close');


const openModalListener = () => {
    document
        .querySelector('.open-modal-btn')
        .addEventListener('click', openModalHandler);
};

const openModalHandler = () => {
    modal.classList.add('modal--show', 'modal--fade-in');
    body.classList.add('modal-opened');
    firstFocusableElement.focus();
};


const closeModalListener = () => {
    const elements = document.querySelectorAll('.modal__overlay, .modal button')
    elements.forEach(element => {
        element.addEventListener('click', closeModalHandler);
    })
};


const closeModalHandler = () => {
    modal.classList.add('modal--fade-out');
    modal.classList.remove('modal--fade-in');
    body.classList.remove('modal-opened');
    setTimeout(() => {
        modal.classList.remove('modal--show', 'modal--fade-out');
    }, 300)
}

openModalListener();
closeModalListener();