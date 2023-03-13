// On clicking remove button the item should be removed from DOM as well as localstorage.
let data=JSON.parse(localStorage.getItem("coffee"))||[]

console.log(data)


let container=document.getElementById('bucket')
let number=document.getElementById("total_amount")
let sum=0
let appendData=(data)=>{
    container.innerHTML=null
    data.forEach((el, index) => {

        number.innerText="Total :-" + (el.price)
        let div = document.createElement("div")

        let img = document.createElement('img')
        img.src = el.image

        let brand = document.createElement('p')
        brand.innerText = el.brand

        let category = document.createElement('p')
        category.innerText = el.category

        let title = document.createElement('p')
        title.innerText = el.title

        let price = document.createElement('p')
        price.innerText = el.price

        let addBucket = document.createElement("button")
        addBucket.innerText = 'Remove product'
        addBucket.id = "add_to_bucket"
        addBucket.addEventListener('click', () => {
            RemoveProduct(el, index)
        })

        div.append(img, brand, category, title, price, addBucket)
        container.append(div)
    })
}

appendData(data)



const RemoveProduct=(el,index)=>{
    data.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(data))
appendData(data)
}