const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
};
refs.stopBtn.setAttribute('disabled', '');
let changeColorTimer = null;


refs.startBtn.addEventListener('click', startRandom);
refs.stopBtn.addEventListener("click", () => {
    clearInterval(changeColorTimer)
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', '');    
    }    
    );

function startRandom () {
    changeColorTimer = setInterval(() =>{
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    refs.startBtn.setAttribute('disabled', '');
    refs.stopBtn.removeAttribute('disabled');    
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};