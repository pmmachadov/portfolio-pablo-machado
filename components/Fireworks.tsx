import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Fireworks = () => {
  useEffect(() => {
    const createFireworks = () => {
      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const createBurst = (x: number, y: number) => {
        confetti({
          particleCount: 60,
          spread: 360,
          startVelocity: randomInRange(20, 30),
          origin: { x, y },
          colors: ['#ffd700', '#ffb347', '#daa520', '#b8860b', '#fff8dc'],
          shapes: ['circle'],
          scalar: randomInRange(0.3, 0.6),
          ticks: 180,
          gravity: 0.7,
          drift: randomInRange(-0.3, 0.3),
          zIndex: 100
        });

        setTimeout(() => {
          confetti({
            particleCount: 40,
            spread: 180,
            startVelocity: randomInRange(10, 20),
            origin: { x, y },
            colors: ['#ffdf00', '#ffc000', '#e6ac00', '#cc9900'],
            shapes: ['circle'],
            scalar: randomInRange(0.2, 0.4),
            ticks: 120,
            gravity: 0.9,
            zIndex: 100
          });
        }, 150);

        setTimeout(() => {
          confetti({
            particleCount: 25,
            spread: 45,
            startVelocity: randomInRange(5, 12),
            origin: { x, y: y + 0.1 },
            colors: ['#ffcc00', '#ff9900', '#ffb347', '#daa520'],
            shapes: ['circle'],
            scalar: 0.15,
            ticks: 80,
            gravity: 1.3,
            zIndex: 100
          });
        }, 400);
      };

      const fireworksSequence = () => {
        createBurst(
          randomInRange(0.2, 0.8), 
          randomInRange(0.1, 0.4)
        );

        setTimeout(() => {
          createBurst(
            randomInRange(0.2, 0.8), 
            randomInRange(0.1, 0.4)
          );
        }, 800);

        setTimeout(() => {
          createBurst(
            randomInRange(0.2, 0.8), 
            randomInRange(0.1, 0.4)
          );
        }, 1600);

        setTimeout(() => {
          for (let i = 0; i < 3; i++) {
            setTimeout(() => {
              createBurst(
                randomInRange(0.1, 0.9), 
                randomInRange(0.1, 0.3)
              );
            }, i * 300);
          }
        }, 2400);
      };

      fireworksSequence();
    };

    const timeouts: NodeJS.Timeout[] = [];
    
    timeouts.push(setTimeout(() => {
      createFireworks();
    }, 1000));

    timeouts.push(setTimeout(() => {
      createFireworks();
    }, 2500));

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return null;
};

export default Fireworks;
