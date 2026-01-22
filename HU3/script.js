const tasks = []

const form = document.querySelector('form')
const task = document.querySelector('#task')
const listaNotas = document.querySelector('#listaNotas')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask()
})

function addTask() {

    if (task.value.trim() === "") {
        alert("La nota no puede estar vacía")
        return
    }

    // Guardar en el array
    tasks.push(task.value)

    // Crear elementos
    const li = document.createElement('li')
    li.textContent = task.value

    const btnDelete = document.createElement('button')
    btnDelete.textContent = 'Eliminar'

    // Evento eliminar
    btnDelete.addEventListener('click', () => {
        listaNotas.removeChild(li)
        console.log('Nota eliminada')
    })

    // Insertar en el DOM
    li.appendChild(btnDelete)
    listaNotas.appendChild(li)

    // Limpieza
    task.value = ""
    task.focus()

    console.log('Nota agregada:', tasks)
}
