document.addEventListener("DOMContentLoaded", function () {
    const noteContent = document.querySelector("#note-content");
    const noteColor = document.querySelector("#note-color");
    const addNoteBtn = document.querySelector("#add-note-btn");
    const notesContainer = document.querySelector("#notes-container");
    let emptyNotesMessage = document.querySelector("#empty-notes-message");

    addNoteBtn.addEventListener("click", () => {
        if (noteContent.value === "") {
            alert("Please input a note");
            return;
        } else {
            if (!emptyNotesMessage.classList.contains("hidden")) {
                emptyNotesMessage.classList.add("hidden");
            }
            let div = document.createElement("div");
            div.innerHTML = `
                <p>${noteContent.value}</p>
                <span class="close-btn">X</span>
            `;
            div.classList.add("note");
            div.style.backgroundColor = noteColor.value;
            notesContainer.appendChild(div);
            noteContent.value = "";
        }
    });

    notesContainer.addEventListener("click", (e) => {
        if (e.target.innerText === "X") {
            e.target.parentNode.remove();
        }
        if (notesContainer.children.length < 1) {
            emptyNotesMessage.classList.remove("hidden");
        }
    });

    // Implement draggable notes using interact.js library
    interact('.note').draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true,
            }),
        ],
    });
});
