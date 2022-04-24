const closedEmoji = document.querySelector(".closed");
const openedEmoji = document.querySelector(".open");


closedEmoji.addEventListener('click', () => {
    if(openedEmoji.classList.contains('open')){
        closedEmoji.classList.remove('active');
        openedEmoji.classList.add('active')
    }
});

openedEmoji.addEventListener('click', () => {
    if(closedEmoji.classList.contains('closed')){
        openedEmoji.classList.remove('active');
        closedEmoji.classList.add('active');
    }
});