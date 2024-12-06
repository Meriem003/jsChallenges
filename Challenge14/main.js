const gallery = document.querySelector('.gallery');
const largeImage = document.getElementById('largeImage');

gallery.addEventListener('click', (event) => {

    if (event.target.tagName === 'IMG') {
        const largeImageUrl = event.target.getAttribute('data-large');
        largeImage.src = largeImageUrl;
        largeImage.alt = event.target.alt;
    }
});
