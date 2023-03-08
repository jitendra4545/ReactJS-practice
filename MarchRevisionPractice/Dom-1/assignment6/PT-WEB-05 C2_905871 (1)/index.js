// fill in javascript code here


const myfunction = (e) => {
    e.preventDefault()
    let obj = {
        name: document.getElementById('name').value,
        docID: document.getElementById('docID').value,
        dept: document.getElementById('dept').value,
        exp: document.getElementById('exp').value,
        email: document.getElementById('email').value,
        mbl: document.getElementById('mbl').value
    }
    display(obj)
    console.log(obj)
}
let form = document.querySelector('form').addEventListener("submit", myfunction)



let tbody = document.querySelector('tbody')

const display = (obj) => {
    let tr = document.createElement('tr')

    let name = document.createElement('td')
    name.innerText = obj.name

    let ID = document.createElement('td')
    ID.innerText = obj.docID

    let dept = document.createElement("td")
    dept.innerText = obj.dept

    let exp = document.createElement('td')
    exp.innerText = obj.exp


    let role = document.createElement('td')
    let exper = giveRole(obj.exp)
    role.innerText = exper


    let email = document.createElement('td')
    email.innerText = obj.email

    let mbl = document.createElement('td')
    mbl.innerText = obj.mbl

    let deleteEl = document.createElement('td')
    deleteEl.innerText = "Delete"
    deleteEl.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    })

    tr.append(name, ID, dept, exp, email, mbl, role, deleteEl)
    tbody.append(tr)
}


const giveRole = (exp) => {
    if (exp > 5) {
        return "Senior";
    } else if (exp <= 1) {
        return "Fresher"
    } else {
        return "Junior"
    }
}

