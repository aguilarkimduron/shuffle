const mainText = document.querySelector('.main-txt');
const btnReveal = document.querySelector('.btn-reveal');
const btnShuffle = document.querySelector('.btn-shuffle');
let intervalChange;

const f = (arr = []) => {
    const ran = Math.floor(Math.random() * 12) 
    if(arr.includes(ran)) return f(arr, ran);
    return ran;
};

const p = (a) => {
    const ran = Math.floor(Math.random() * 12)
    const newPos = []
    newPos.push(ran);
    for(i = 1; i <= (a.length - 1); i++){
        const newVal = f(newPos);
        newPos.push(newVal);
    }
    return newPos;
};
const s = (a, shufflePos = []) => {
    let newA = '';
    shufflePos.forEach(sh => {
        newA += a[sh];
    });
    return newA;
};
const h = () => {
    const a = 'NASYONALISMO';
    const shufflePos = p(a);
    mainText.innerHTML = s(a, shufflePos);
}
const shuff = () => {
    h();
    intervalChange = setInterval(() => {
        h();
    }, 2000)
    
};


btnReveal.addEventListener('click', () => {
    clearInterval(intervalChange)
    mainText.innerHTML = 'NASYONALISMO';
});
btnShuffle.addEventListener('click', () => shuff());

window.onload = (e) => {
    h();
}



