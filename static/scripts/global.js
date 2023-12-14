window.onload = function() {
    Particles.init({
      selector: '.background',
      color: '#04a9c1',
      maxParticles: 100,
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 80
          }
        }, {
          breakpoint: 375,
          options: {
            maxParticles: 50
          }
        }
      ]
    });
  };