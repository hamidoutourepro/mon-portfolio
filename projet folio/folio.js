document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".expandable-text");
    const button = document.getElementById("expand-text-button");

    const originalText = textElement.innerHTML;
    const truncatedText = originalText.split("systèmes et réseaux.")[0] + "systèmes et réseaux.";

    let isExpanded = false;

    function setText() {
        if (isExpanded) {
            textElement.innerHTML = originalText;
            button.innerText = "Afficher moins";
        } else {
            textElement.innerHTML = truncatedText;
            button.innerText = "Afficher plus";
        }
    }

    button.addEventListener("click", function() {
        isExpanded = !isExpanded;
        setText();
    });

    setText();
});
