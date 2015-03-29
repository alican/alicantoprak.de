/* particlesJS('dom-id', params);
 /* @dom-id : set the html tag id [string, optional, default value : particles-js]
 /* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
particlesJS('particles', {
    particles: {
        color: '#ccc',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity:0.8,
        size: 2,
        size_random: true,
        nb: 100,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#ccc',
            opacity:0.8,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 0.5
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 250
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: false
            }
        }
    },
    /* Retina Display Support */
    retina_detect: true
});