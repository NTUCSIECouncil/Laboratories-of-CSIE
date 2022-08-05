import professors from "/_data/professors.json" assert { type: "json" };

var selected = [];

window.addEventListener('load', function () {
    // console.log("It's loaded!");
    var filter = document.getElementById("filter");
    for (let i = 0; i < filter.children.length; ++i) {
        filter.children[i].addEventListener("click", filter_click_event);
    }
})

function filter_click_event(event) {
    if (selected.includes(event.currentTarget.id)) {
        selected = selected.filter(x => x != event.currentTarget.id);
        event.currentTarget.classList.remove("ring-orange-300");
        event.currentTarget.classList.remove("ring");
    } else {
        selected.push(event.currentTarget.id);
        event.currentTarget.classList.add("ring-orange-300");
        event.currentTarget.classList.add("ring");
    }

    var sections = document.getElementsByClassName("professor");

    for (let i = 0; i < sections.length; ++i) {
        let id = sections[i].children[1].id;
        // console.log(id);
        let intersection = selected.filter(x => professors.find(y => y.category == id).tags.includes(x));
        if (intersection.length == 0 && selected.length > 0) {
            sections[i].classList.add("hidden");
        } else {
            sections[i].classList.remove("hidden");
        }
    }
}