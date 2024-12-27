
document.getElementById("search-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        alert("تم البحث عن: " + event.target.value);
    }
});

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function () {
        alert("تم فتح القسم: " + this.closest("section").querySelector("h2").innerText);
    });
});
