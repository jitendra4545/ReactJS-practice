let products=JSON.parse(localStorage.getItem('products'))||[]

console.log(products)


let container=document.querySelector("#all_products")


const appendData=(products)=>{
    container.innerHTML=""
      products.forEach((el,index)=>{
        
        let div=document.createElement('div')

        let image=document.createElement('img')
        image.src=el.image

        let desc=document.createElement("p")
        desc.innerText=el.desc

        let price=document.createElement("h2")
        price.innerText=el.price

       let type=document.createElement('p')
       type.innerText=el.type
      let btn=document.createElement('button')
      btn.innerText='Remove'
      btn.id='remove'
      btn.addEventListener("click",()=>{
        RemoveData(el,index)
      })
        div.append(image,desc,price,type,btn)
        container.append(div)
      })
}

appendData(products)

const RemoveData=(el,index)=>{
 products.splice(index,1)
 localStorage.setItem("products",JSON.stringify(products))
 
alert('click')
 appendData(products)
}

