// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { 
            value: 100, 
            density: { 
                enable: true, 
                value_area: 800 
            } 
        },
        color: { 
            value: "#00f7ff" 
        },
        shape: { 
            type: "circle" 
        },
        opacity: { 
            value: 0.5, 
            random: true 
        },
        size: { 
            value: 3, 
            random: true 
        },
        line_linked: { 
            enable: true, 
            distance: 150, 
            color: "#00f7ff", 
            opacity: 0.2, 
            width: 1 
        },
        move: { 
            enable: true, 
            speed: 1, 
            direction: "none", 
            random: true, 
            out_mode: "out" 
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { 
                enable: true, 
                mode: "repulse" 
            },
            onclick: { 
                enable: true, 
                mode: "push" 
            }
        }
    }
});