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
    display(obj)
}




let form=document.querySelector('form').addEventListener("submit",myfunc)
let total=document.getElementById('total-price')
let tbody=document.querySelector('tbody')
let sum=0
const display=(data)=>{
 sum=sum+(+data.price)
//console.log(sum)
total.innerText=`Total Price:- ${sum}`
    let tr=document.createElement('tr')

    let name=document.createElement('td')
    name.innerText=data.name
     
    let category=document.createElement('td')
    category.innerText=data.category

    let brand=document.createElement('td')
    brand.innerText=data.brand

    let price=document.createElement('td')
    price.innerText=data.price

     let delivery=document.createElement("td")
     delivery.innerText=data.delivery
    
     let segment=document.createElement("td")
     let priceSeg=getPrice(data.price)
      segment.innerText=priceSeg
     let btn=document.createElement("td")
     btn.innerText="Delete"
     btn.addEventListener("click",function(e){
      e.target.parentNode.remove()
     })


    tr.append(name,category,brand,price,delivery,segment,btn)
    tbody.append(tr)

}

const getPrice=(price)=>{

  if(price>1000 ){
    return "Expensive"
  }else{
    return "Not-Expensive"
  }

}