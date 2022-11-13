// Help from Angel Piscola ♡ [Sr. Software Engineer]

document.addEventListener("DOMContentLoaded", function (event) {
    // Code here, DOM is **Definitely** ready for stuff

    // menu close
    const ding = document.querySelector('#lestart')
    const BGmusic = document.querySelector('#mainBGmusic')
    const popUp = document.querySelector('.overlay');
    const buttonClose = document.querySelector('#closeup')
    buttonClose.addEventListener('click', function () {
        popUp.style.opacity = 0;
        setTimeout(() => popUp.remove(), 1000);
        ding.volme = 0.5;
        BGmusic.volume = 0.1;
        ding.play();
        ding.addEventListener('ended', () => {
            BGmusic.play();
        })
    });

    const caps = Array.from(document.querySelectorAll('.cap'));

    // caps size 
    for (const cap of caps) {
        const offset = Math.max(0.5, Math.random() * 1.25)
        const capSize = offset * 155;
        cap.style.width = `${capSize}px`;
        cap.style.height = `${capSize}px`;

        cap.style.setProperty('--size-offset', capSize)
    }

    // big slow small fast
    caps.sort((a, b) => a.style.getPropertyValue('--size-offset') - b.style.getPropertyValue('--size-offset'))
    caps[0].classList.add('fast')
    caps[caps.length - 1].classList.add('slow')

    caps.forEach((cap, i) => {
        cap.style.zIndex = caps.length - i;
    })

    // follow meeeeee
    document.addEventListener("mousemove", _.throttle(function mauscap(e) {
        caps.forEach(cap => {
            cap.style.left = e.clientX + "px";
            const bounds = cap.getBoundingClientRect();
            const center = (bounds.left + bounds.right) / 2;
            if (center > e.clientX) cap.classList.add("flip");
            else cap.classList.remove("flip");
        })
    }, 1000))

    const spoinkClose = document.querySelector('.spoinkbob');


});

