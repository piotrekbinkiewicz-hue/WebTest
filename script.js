let count = 0
const text = document.getElementById("selected-mood")

const moods = document.querySelectorAll(".mood")

moods.forEach(function (mood) {
    mood.addEventListener("click", function () {
        text.textContent = mood.textContent.substring(3)
    })
})