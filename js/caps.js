// Help from Angel Piscola ♡ [Sr. Software Engineer]

document.addEventListener("DOMContentLoaded", function(event) {
    // Code here, DOM is **Definitely** ready for stuff
    const popUp = document.querySelector('.overlay');
    const buttonClose = document.querySelector('#closeup')
    buttonClose.addEventListener('click', function () { 
      popUp.style.opacity = 0;
      setTimeout(() => popUp.remove(), 1000);
    });
});

