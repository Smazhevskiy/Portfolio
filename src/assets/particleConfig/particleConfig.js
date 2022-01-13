export const particlesConfig ={
    fpsLimit: 60,
    interactivity: {
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.5,
                size: 40,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        opacity: {
            value: 0.5,
        },
        size: {
            random: true,
            value: 5,
        },
    },

}