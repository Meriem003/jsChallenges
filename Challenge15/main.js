document.getElementById('simpleForm').addEventListener('submit', () => {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Formulaire soumis avec succès !');
    }
});
