//store the products array in localstorage as "products"

let data=JSON.parse(localStorage.getItem("products"))||[]

const handleForm=(e)=>{
e.preventDefault()

let obj={
    type: document.querySelector("#type").value,
    desc: document.querySelector("#desc").value,
    price: document.querySelector("#price").value,
    image: document.querySelector("#image").value
    }
 
 data.push(obj)
    localStorage.setItem("products",JSON.stringify(data))
    
}

console.log(data)

document.querySelector("form").addEventListener("submit",handleForm)