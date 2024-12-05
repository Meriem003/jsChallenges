var testMouse =document.querySelector('#text');

testMouse.addEventListener('mouseover', () => {
    testMouse.textContent = 'Survol détecté !';
  });

  testMouse.addEventListener('mouseout', () => {
    testMouse.textContent = 'Passez la souris ici';
  });
