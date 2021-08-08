const loading = document.querySelector('#loading')
const background = document.querySelector('#background')

let loadingNumber = 0;

var percent = 0;

loop = setInterval(function(){
    loading.innerText = percent +"%";
    loading.style.opacity = (110 - percent) / 100;
    background.style.filter = 'blur(' + ((100 - percent)/100) +'rem)';
    if(++percent>100) {
        clearInterval(loop);
        loading.style.opacity = 0;
    };
}, 40);