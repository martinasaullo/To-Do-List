// Aggiungi una nuova attività alla lista
function addTask() {
    let task = document.getElementById('new-task').value;
    
    if (task === '') {
        alert('Inserisci un\'attività!');
        return;
    }

    let list = document.getElementById('task-list');
    let listItem = document.createElement('li');
    
    // Crea il contenuto dell'elemento
    listItem.textContent = task;

    // Crea un bottone per rimuovere l'attività
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Rimuovi';
    removeButton.onclick = function() {
        list.removeChild(listItem);
    };

    // Aggiungi il bottone al listItem
    listItem.appendChild(removeButton);

    // Aggiungi l'elemento alla lista
    list.appendChild(listItem);

    // Resetta il campo di input
    document.getElementById('new-task').value = '';
}

// Segnare come completata cliccando sull'attività
document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});









