function sendFormData(){
    let isValid = false;
    var nameInput = document.getElementById("name").value;
    if (nameInput.trim() == ""){
        isValid = false;
        nameInput.style.border = "1px solid red";
    }
    
    if (isValid = true){
        alert("Form submitted successfully!");
    }
}