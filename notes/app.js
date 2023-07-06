const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const arrayNote = document.getElementById('list')

const notes = [
        {
            title: 'Записать блок',
            completed: true
        },
        {
            title: 'Рассказать что-то',
            completed: false
        },
        {
            title: 'Домашка',
            completed: false
        }
    ]

// function render() {
//     for (let note of notes) {
//         arrayNote.insertAdjacentHTML(
//             'beforeend',
//             getNoteTemplate(note)
//         )
//     }
// }

function render() {
    arrayNote.innerHTML = ''
    if (!notes.length) {
        arrayNote.innerHTML = `<p>Нет элементов</p>`
    }
    for (i = 0; i < notes.length; i++) {
        arrayNote.insertAdjacentHTML(
            'beforeend',
            getNoteTemplate(notes[i], i)
        )          
    } 
}

render()

createBtn.onclick = function () {
    if (inputElement.value === '') {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }    
    notes.push(newNote)
    render()
    inputElement.value = ''
}

arrayNote.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === "toggle") {
            notes[index].completed = !notes[index].completed
        } else if (type === "remove") {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
                <span
                    class="btn btn-small btn-${note.completed ? 'warning' : 'success'}"
                    data-index="${index}"
                    data-type="toggle"
                    >&check;</span>
                <span 
                    class="btn btn-small btn-danger"
                    data-index="${index}"
                    data-type="remove"
                    >&times;</span>
            </span>
        </li>
    `
}