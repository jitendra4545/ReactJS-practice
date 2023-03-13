/*
Use local storage as your database. And store data with key as "mobile_data". The mobile object will be :-
{
brand: String,
name: String,
price: Number,
image: String
}

Example:- 
{
brand: "apple", (oneplus/nokia)
name: "Iphone 13",
price: 74000,
image: "https://www.iphone.com/image.jpg"
}

*/

let mobileData=JSON.parse(localStorage.getItem("mobile_data"))||[]


const handleForm=(e)=>{
e.preventDefault()
let obj={
    brand:document.querySelector("#mobile_brand").value ,
    name:document.querySelector("#mobile_name").value,
    price:+document.querySelector("#mobile_price").value,
    image:document.querySelector("#mobile_image").value
}
mobileData.push(obj)
localStorage.setItem("mobile_data",JSON.stringify(mobileData))
alert('product added successfully')
}


document.querySelector("form").addEventListener("submit",handleForm)
