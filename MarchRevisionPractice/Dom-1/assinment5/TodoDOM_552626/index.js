


const myfunction = (e) => {
   e.preventDefault()

   let obj = {
      task: document.getElementById('task').value,
      priority: document.getElementById('priority').value
   }
   display(obj)

}

let form = document.querySelector('form').addEventListener("submit", myfunction)

let tbody = document.querySelector('tbody')

let display = (data) => {
   let tr = document.createElement('tr')

   let task = document.createElement('td')
   task.innerText = data.task

   let priority = document.createElement('td')
   priority.innerText = data.priority

   let button = document.createElement('td')
   button.innerText = 'Favorite'
   tr.append(task, priority, button)
   tbody.append(tr)

}

