
        let progress = 0;
        const progressBar = document.getElementById('progressBar');
        const startButton = document.getElementById('startButton');

        function updateProgress() {
            if (progress < 100) {
                progress += 10; 
                progressBar.style.width = progress + '%';
                progressBar.textContent = progress + '%';  
            }
        }
        startButton.addEventListener('click', function() {
            const interval = setInterval(updateProgress, 500); 
            setTimeout(function() {
                clearInterval(interval);
                alert("Action terminée !");
            }, 5500);
        })
