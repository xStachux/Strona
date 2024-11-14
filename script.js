document.addEventListener('DOMContentLoaded', function()
    console.log('Witryna załadowana');
    // Animacja dla tła nagłówka
    const header = document.querySelector('header');
    header.style.transition = 'background 0.5s';
    header.style.background = '#444';

    // Animacja dla obrazów w galerii
    const images = document.querySelectorAll('.image-container img');
    images.forEach