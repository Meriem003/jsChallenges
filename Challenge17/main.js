document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.getElementById('itemList').getElementsByTagName('li');
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
});