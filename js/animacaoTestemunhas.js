    // JavaScript para pausar a animação ao passar o mouse
    document.addEventListener('DOMContentLoaded', function() {
      const marquees = document.querySelectorAll('.group');
      
      marquees.forEach(marquee => {
        marquee.addEventListener('mouseenter', function() {
          this.querySelectorAll('.animate-marquee-vertical').forEach(el => {
            el.style.animationPlayState = 'paused';
          });
        });
        
        marquee.addEventListener('mouseleave', function() {
          this.querySelectorAll('.animate-marquee-vertical').forEach(el => {
            el.style.animationPlayState = 'running';
          });
        });
      });
    });