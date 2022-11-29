const el = document.getElementById("div");

function elStyle(element, stEl) {
    return getComputedStyle(element)[stEl];
} 

console.log(elStyle(el, "margin"));

