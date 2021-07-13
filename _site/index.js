const sm = window.matchMedia("(max-width: 640px)");
const md = window.matchMedia("(max-width: 768px) and (min-width: 640px)");
const lg = window.matchMedia("(max-width: 1024px) and (min-width: 768px)");
const xl = window.matchMedia("(max-width: 1280px) and (min-width: 1024px)");
const xxl = window.matchMedia("(max-width: 1536px) and (min-width: 1280px)");

var x_offset = 18,
    y_offset = 27;

function updateEyes() {
    if (document.readyState === 'complete') {
        document.getElementById('eyes').style.left = `${(window.event.clientX / 80)+x_offset}px`
        document.getElementById('eyes').style.top = `${(window.event.clientY / 50)+y_offset}px`
        document.getElementById('eyes2').style.left = `${(window.event.clientX / 80)+x_offset}px`
        document.getElementById('eyes2').style.top = `${(window.event.clientY / 50)+y_offset}px`
    }
}

function smCheck(x) {
    if (x.matches) {
        x_offset = 28;
        updateEyes();
        // console.log("sm matched")
    }
}

function mdCheck(x) {
    if (x.matches) {
        x_offset = 28;
        updateEyes();
        // console.log("md matched")
    }
}

function lgCheck(x) {
    if (x.matches) {
        x_offset = 23;
        updateEyes();
        // console.log("lg matched")
    }
}

function xlCheck(x) {
    if (x.matches) {
        x_offset = 23;
        updateEyes();
        // console.log("xl matched")
    }
}

function xxlCheck(x) {
    if (x.matches) {
        x_offset = 21;
        updateEyes();
        // console.log("xxl matched")
    }
}

xxlCheck(xxl)
xxl.addEventListener('change', xxlCheck)
xlCheck(xl)
xl.addEventListener('change', xlCheck)
lgCheck(lg)
lg.addEventListener('change', lgCheck)
mdCheck(md)
md.addEventListener('change', mdCheck)
smCheck(sm)
sm.addEventListener('change', smCheck)

// Event listeners for eye movement
document.addEventListener('mousemove', () => {
    updateEyes();
})