document.addEventListener("DOMContentLoaded", function(event) {
    const divClose = document.querySelector('.overlay');
    const buttonClose = document.querySelector('#closeup')
    
    buttonClose.addEventListener('click', () => divClose.style.display = 'none');
    // Code here, DOM is **Definitely** ready for stuff
});

