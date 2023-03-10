// Write code related to Home page here 
let data=JSON.parse(localStorage.getItem("task-list"))|| []
const handleSubmit=(e)=>{
    e.preventDefault()
    let obj={
        name:document.querySelector('#name').value,
        desc:document.querySelector('#desc').value,
        start:document.querySelector("#start").value,
        end:document.querySelector("#end").value,
        priority:document.querySelector("#priority").value
    }

    //console.log(obj)
data.push(obj)
localStorage.setItem("task-list",JSON.stringify(data))
}


document.querySelector('form').addEventListener("submit",handleSubmit)