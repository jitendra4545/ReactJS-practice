// Add the coffee to local storage with key "coffee"


const getData = async () => {
    let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products")
    let data = await res.json()
    console.log(data)
    appendData(data.data)
}

getData()

let number=document.getElementById("coffee_count")

let container = document.querySelector("#menu")
const appendData = (data) => {

    data.forEach((el, index) => {
        number.innerText="Total :-" + data.length
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
        addBucket.innerText = 'add product'
        addBucket.id = "add_to_bucket"
        addBucket.addEventListener('click', () => {
            addProduct(el, index)
        })

        div.append(img, brand, category, title, price, addBucket)
        container.append(div)
    })

}

let coffee=JSON.parse(localStorage.getItem("coffee"))||[]

const addProduct=(el,index)=>{
    coffee.push(el)
    localStorage.setItem("coffee",JSON.stringify(coffee))
}