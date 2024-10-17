
const inputField = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');


function saveName() {
    const name = inputField.value; 
    if (name) {
        localStorage.setItem('savedName', name); 
        displaySavedName(name); 
}

function displaySavedName(name) {
    displayName.textContent = `Saved Name: ${name}`; 
}


function clearName() {
    localStorage.removeItem('savedName'); 
    inputField.value = ''; 
}


saveBtn.addEventListener('click', saveName);
clearBtn.addEventListener('click', clearName);


window.addEventListener('load', () => {
    const savedName = localStorage.getItem('savedName');
    if (savedName) {
        displaySavedName(savedName); 
    }
}
