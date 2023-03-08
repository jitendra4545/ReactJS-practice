// Write all the Javascript here


const myfunc=(e)=>{
    e.preventDefault()
    let obj={
       name:document.getElementById('name').value,
       category:document.getElementById('category').value,
       brand:document.getElementById('brand').value,
       price:document.getElementById("price").value,
       delivery:document.getElementById("deliveredBy").value
    }

    console.log(obj)

}





let form=document.querySelector('form').addEventListener("submit",myfunc)