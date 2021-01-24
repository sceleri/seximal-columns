// HTMLlist of all spoiler-sections
let spoilerSections = document.getElementsByClassName("spoiler-section");

// function called when a spoiler-toggle is clicked
let toggleSpoiler = function () {
    // get the spoiler-toggle's closest spoiler-section parent.
    let spoilerSection = this.closest(".spoiler-section");
    // get all spoilers inside the spoiler-section
    let spoilers = spoilerSection.getElementsByClassName("spoiler");
    // toggle all spoilers inside the spoiler-section
    for (let i = 0; i < spoilers.length; i++) {
        spoilers[i].classList.toggle("spoiler-closed");
        spoilers[i].classList.toggle("spoiler-open");
    }
};
window.onload = function () {
    // find all spoiler-toggle's and attach click event listeners
    for (let i = 0; i < spoilerSections.length; i++) {
        // all elements with spoiler-toggle class
        let spoilerToggles = spoilerSections[i].getElementsByClassName("spoiler-toggle");
        // assing event listeners
        for (let j = 0; j < spoilerToggles.length; j++) {
            spoilerToggles[j].addEventListener('click', toggleSpoiler, false);
        }
    }
}