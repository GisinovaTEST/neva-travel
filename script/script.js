// Работа с ближайшим временем

let date = new Date();
let hour = date.getHours();
let schedule = [...document.querySelectorAll('.excursion__schedule__time')];

for (let i=0; i <schedule.length; i++){    
    let scheduleHour = schedule[i].getAttribute('data-time');
    if ((hour+1) == scheduleHour){        
        schedule[i].classList.add('active');
    }
}

// Кнопка еще

let btnMore = [...document.querySelectorAll('.btn__more')];
let openHiddenSchedule = (event) => {
    let scheduleHidden = [...event.target.closest('.excursion__schedule').querySelectorAll('.hidden')];
    scheduleHidden.forEach(el => el.classList.remove('hidden'))
    event.target.classList.add('hidden')
}
// btnMore.forEach(el => el.addEventListener('click', openHiddenSchedule));

// Определение устройства
let device = window.navigator.userAgent
let regexp = 'mobile';
let deviceReg = device.toLowerCase().match(regexp);

if (deviceReg === null) {
    console.log('desktop');
    btnMore.forEach(el => el.addEventListener('click', openHiddenSchedule));   
}
else {
    console.log('mobile');
    btnMore.forEach(el => el.addEventListener('touchstart', openHiddenSchedule));
}