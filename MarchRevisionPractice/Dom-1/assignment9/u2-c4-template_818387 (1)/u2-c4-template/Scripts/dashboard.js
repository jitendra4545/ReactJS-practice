// Write code related to dashboard page here

let data = JSON.parse(localStorage.getItem("task-list"))
console.log(data)
let progress = JSON.parse(localStorage.getItem("priority-list")) || []
let total = document.querySelector('#task-count').innerText = data.length


let DisplatData = (data) => {
     document.querySelector("tbody").innerHTML=""

    data.forEach((el, i) => {
        
        let tr = document.createElement('tr')

        let name = document.createElement('td')
        name.innerText = el.name

        let desc = document.createElement("td")
        desc.innerText = el.desc

        let start = document.createElement('td')
        start.innerText = el.start

        let end = document.createElement('td')
        end.innerText = el.end

        let priority = document.createElement('td')
        priority.innerText = el.priority

        let btn = document.createElement('td')
        btn.innerText = "ADD"
        btn.addEventListener("click", () => {
            addNew(el, i)
        })

        tr.append(name, desc, start, end, priority, btn)
        document.querySelector("tbody").append(tr)

    })
}

DisplatData(data)

const addNew = (el, i) => {

    progress.push(el)
    console.log(progress)
    localStorage.setItem("priority-list", JSON.stringify(progress))
}


const handleFilter=()=>{
   let filterItem=document.querySelector('#filter').value 
  
   let filterdata=data.filter((el)=>{
  return  el.priority===filterItem
   })

   DisplatData(filterdata)
   
}
document.querySelector("#filter").addEventListener("change",handleFilter)