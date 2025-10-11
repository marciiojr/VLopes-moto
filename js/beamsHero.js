// Código para as luzes animadas (apenas na hero section)
const canvas = document.getElementById("beams");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Beam {
    constructor(width, height) {
        this.reset(width, height);
    }

    reset(width, height) {
        this.x = Math.random() * width * 1.5 - width * 0.25;
        this.y = Math.random() * height * 1.5 - height * 0.25;
        this.width = 30 + Math.random() * 60;
        this.length = height * 2.5;
        this.angle = -35 + Math.random() * 10;
        this.speed = 0.6 + Math.random() * 1.2;
        this.opacity = 0.12 + Math.random() * 0.16;
        this.hue = 10 + Math.random() * 60; // tons avermelhados
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.angle * Math.PI) / 180);

        const pulsingOpacity = this.opacity * (0.8 + Math.sin(this.pulse) * 0.2);
        const gradient = ctx.createLinearGradient(0, 0, 0, this.length);

        gradient.addColorStop(0, `hsla(${this.hue}, 85%, 55%, 0)`);
        gradient.addColorStop(0.2, `hsla(${this.hue}, 85%, 55%, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 85%, 55%, ${pulsingOpacity})`);
        gradient.addColorStop(0.8, `hsla(${this.hue}, 85%, 55%, ${pulsingOpacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 85%, 55%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(-this.width / 2, 0, this.width, this.length);
        ctx.restore();
    }

    update(canvasHeight) {
        this.y -= this.speed;
        this.pulse += this.pulseSpeed;
        if (this.y + this.length < -100) {
            this.y = canvasHeight + 100;
        }
    }
}

const beams = Array.from({ length: 30 }, () => new Beam(canvas.width, canvas.height));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = "blur(35px)";

    beams.forEach((beam) => {
        beam.update(canvas.height);
        beam.draw(ctx);
    });

    requestAnimationFrame(animate);
}

animate();