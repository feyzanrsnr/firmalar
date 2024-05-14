document.getElementById("addInputButton").addEventListener("click", function() {
    var inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group", "mb-3");
    
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.classList.add("form-control");
    newInput.setAttribute("placeholder", "Yeni Input");

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.classList.add("btn", "btn-outline-secondary", "delete-button");
    deleteButton.setAttribute("type", "button");
    deleteButton.addEventListener("click", function() {
        inputGroup.remove();
    });

    inputGroup.appendChild(newInput);
    inputGroup.appendChild(deleteButton);

    document.getElementById("inputContainer").appendChild(inputGroup);
  });