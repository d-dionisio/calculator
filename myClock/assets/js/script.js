function clock() {
    function getHourFromSeconds(seconds) {
        let date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hours12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let seconds = 0;
    let timer;
    
    function startClock() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getHourFromSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const element = e.target;
    
        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startClock();    
        }
    
        if (element.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);    
        }
    
        if (element.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;    
        }
    });
}

clock();