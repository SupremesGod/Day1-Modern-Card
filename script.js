// Get DOM elements
        const card = document.getElementById('card');
        const cardButton = document.getElementById('cardButton');
        const successMessage = document.getElementById('successMessage');

        // Mouse tracking for glow effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate percentage position
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Set CSS variables for glow effect
            card.style.setProperty('--x', `${xPercent}%`);
            card.style.setProperty('--y', `${yPercent}%`);
        });

        // Reset glow on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--x', '50%');
            card.style.setProperty('--y', '50%');
        });

        // Button click handler
        cardButton.addEventListener('click', () => {
            // Show success message
            successMessage.classList.add('show');

            // Add click animation
            cardButton.style.transform = 'scale(0.98)';
            setTimeout(() => {
                cardButton.style.transform = '';
            }, 150);

            // Hide message after 3 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        });

        // Log message to console for fun
        console.log('%c✨ Modern Card Built Successfully! ✨', 'font-size: 16px; color: #2196F3; font-weight: bold;');
        console.log('%cHover over the card, move your mouse, and click the button to see the magic!', 'font-size: 12px; color: #666;');