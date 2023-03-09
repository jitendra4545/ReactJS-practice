

let arr=[]
const myfunc=(e)=>{
e.preventDefault()

let obj={
    email:document.getElementById('email').value ,
    mobile:document.getElementById('mobile').value,
    username:document.getElementById('username').value,
    password:document.getElementById('password').value
}
  console.log(obj)
  arr.push(obj)
 localStorage.setItem("users",JSON.stringify(arr))
}



let data=document.querySelector('form').addEventListener("submit",myfunc)