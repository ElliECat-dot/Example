const card = document.querySelector('.card');

card.addEventListener('click', () => {
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});

function mostrarGif() {
    document.querySelector('.card-container').style.display = 'none';
    const gifCard = document.getElementById('gifCard');
    gifCard.style.display = 'flex';
}

function mostrarGif2() {
    document.querySelector('.card-container').style.display = 'none';
    const gifCard2 = document.getElementById('gifCard2');
    gifCard2.style.display = 'flex';
}