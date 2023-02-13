// Help from Angel Piscola ♡ [Sr. Software Engineer]

document.addEventListener("DOMContentLoaded", function (event) {
    // Code here, DOM is **Definitely** ready for stuff

    // menu close
    const ding = document.querySelector('#lestart')
    const BGmusic = document.querySelector('#mainBGmusic')
    const spoinkMusic = document.querySelector('#bringCap')
    const spoinkClose = document.querySelectorAll('.spoinkbob button');
    const popUp = document.querySelector('.overlay');
    const buttonClose = document.querySelector('#closeup')
    const scene = document.querySelector('#scene')
    const grassScene = scene.querySelector('.grass-scene')
    buttonClose.addEventListener('click', function () {
        popUp.style.opacity = 0;
        setTimeout(() => popUp.remove(), 1000);
        ding.volume = 0.5;
        BGmusic.volume = 0.1;
        spoinkMusic.volume = 0.5;
        ding.play();
        setTimeout(() => {
            BGmusic.play();
            spoinkClose.forEach((button) => {
                button.style.opacity = 1;
            })
        }, 1000)
    });

    const caps = []

    // cap factory
    function makeCap() {
        const offset = Math.max(0.5, Math.random() * 1.25)

        const size = offset * 155

        const speed = Math.floor(Math.random() * 8 + 1.5);

        const species = Math.floor(Math.random() * 3 + 1);

        const cap = { id: caps.length, species: species, size: size, speed: speed }

        return cap
    }

    //spoinky timer
    spoinkClose.forEach((button => {
        button.addEventListener('click', function birthCap() {
            const bounds = this.getBoundingClientRect();
            spoinkMusic.currentTime = 0;
            spoinkMusic.play();
            this.style.opacity = 0;
            this.style.pointerEvents = 'none';

            const cap = makeCap();
            
            const image = document.createElement('img');
            image.id=`cap-${cap.id}`
            image.className = 'cap'
            image.src = `./images/walkies${cap.species}.gif`
            image.style.width = `${cap.size}px`
            image.style.height = `${cap.size}px`
            image.style.left = bounds.left + "px";
            console.log('left is ', bounds.left)
            image.style.setProperty('--speed',`${cap.speed}s`)
            image.style.setProperty('--size-offset', cap.size)
            
            document.addEventListener('mousemove', _.throttle(function mauscap(e) {
                image.style.left = e.clientX + "px";
                const bounds = image.getBoundingClientRect();
                const center = (bounds.left + bounds.right) / 2;
                if (center > e.clientX) image.classList.add("flip");
                else image.classList.remove("flip");
            }, 250))
            
            
            scene.insertBefore(image, grassScene)

            caps.push(cap)
            caps.sort((a,b) => b.size - a.size)
            caps.forEach((cap,i) => {
                document.getElementById(`cap-${cap.id}`).style.zIndex = i
            })

            const returnTimer = Math.floor(Math.random() * 10 + 2);
            console.log('return timer', returnTimer)
            setTimeout(() => {
                this.style.opacity = 1;
                this.style.pointerEvents = 'auto'
            }, returnTimer * 1000)
        })
    }))
});