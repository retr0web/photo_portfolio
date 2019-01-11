const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const fullOverlay = document.getElementById('fullOverlay');

openMenu.addEventListener('click', openOverlay);
closeMenu.addEventListener('click', closeOverlay);

function openOverlay(){
    fullOverlay.style.height = '100%';
}

function closeOverlay(){
    fullOverlay.style.height = '0%';
}