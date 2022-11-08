// Help from Angel Piscola ♡ [Sr. Software Engineer]

document.addEventListener("DOMContentLoaded", function (event) {
    // Code here, DOM is **Definitely** ready for stuff
    const ding = document.querySelector('#lestart')

    const popUp = document.querySelector('.overlay');
    const buttonClose = document.querySelector('#closeup')
    buttonClose.addEventListener('click', function () {
        popUp.style.opacity = 0;
        setTimeout(() => popUp.remove(), 1000);
        ding.play();
    });

    const cap = document.querySelector('.cap');
    document.addEventListener("mousemove", _.throttle(function mauscap(e) {
        cap.style.left = e.clientX + "px";
        const bounds = cap.getBoundingClientRect();
        const center = (bounds.left + bounds.right) / 2;
        if (center > e.clientX) cap.classList.add("flip");
        else cap.classList.remove("flip");
    }, 1000))
});

