


let mobile=JSON.parse(localStorage.getItem("mobile_data"))||[]
console.log(mobile)

let container=document.querySelector("#mobile_list")

const mobileList=(mobile)=>{
container.innerHTML=null
    mobile.forEach((el,index)=>{
       let div=document.createElement("div")
       div.className="mobile"
      let img=document.createElement('img')
      img.src=el.image

      let brand=document.createElement("h2")
      brand.innerText=el.brand

      let name=document.createElement("h2")
      name.innerText=el.name

      let price=document.createElement("h2")
      price.innerText=el.price

      let remove=document.createElement('button')
      remove.innerText="Remove"
      remove.className="remove"
      remove.addEventListener("click",()=>{
        removeData(el,index)
      })

      div.append(img,name,brand,price,remove)
      container.append(div)

    })
}

mobileList(mobile)


const removeData=(el,index)=>{
 mobile.splice(index,1)
 localStorage.setItem("mobile_data",JSON.stringify(mobile))
 mobileList(mobile)
}

const LH=()=>{
    mobile.sort((a,b)=>{
        return a.price-b.price
    })
    mobileList(mobile)
}

document.getElementById("sort_lth").addEventListener('click',LH)

const HL=()=>{
    mobile.sort((a,b)=>{
        return b.price-a.price
    })
    mobileList(mobile)
}


document.getElementById("sort_htl").addEventListener('click',HL)

const Filterdata=()=>{
   let fil= document.getElementById("select_filter").value 
    let filterData=mobile.filter((el)=>{
        return el.brand==fil
    })

   // console.log(filterData)
    mobileList(filterData)
}



document.getElementById("select_filter").addEventListener("click",Filterdata)