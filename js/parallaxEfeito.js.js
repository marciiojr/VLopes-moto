                // Código para o efeito parallax
                const sections = document.querySelectorAll('.parallax-section');

                window.addEventListener('scroll', () => {
                    sections.forEach(section => {
                        const img = section.querySelector('.sticky-image');
                        const overlayText = section.querySelector('.overlay-text');
                        const rect = section.getBoundingClientRect();
                        const progress = Math.min(Math.max(rect.top / window.innerHeight, 0), 1);

                        const scale = 1 - progress * 0.15;
                        img.style.transform = `scale(${scale})`;

                        const opacity = 1 - Math.abs(0.5 - progress) * 2;
                        const translateY = (progress - 0.5) * 400;
                        overlayText.style.opacity = opacity;
                        overlayText.style.transform = `translateY(${translateY}px)`;
                    });
                });