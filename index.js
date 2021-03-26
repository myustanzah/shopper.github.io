const dataBase = [
    { harga: 1000000, img: `https://s1.bukalapak.com/img/18917791912/w-250/2020-05-15T13%3A41%3A11%2B07%3A00.jpeg.webp`, brand: 'Samsung', stock: 200 },
    { harga: 2000000, img: `https://s1.bukalapak.com/img/63536959851/s-330-330/data.png`, brand: 'Samsung A10', stock: 2 },
    { harga: 3000000, img: `https://s0.bukalapak.com/img/57289478641/s-330-330/data.png`, brand: 'Samsung J8', stock: 2010 },
    { harga: 4000000, img: `https://s2.bukalapak.com/img/29815964201/s-330-330/data.png`, brand: 'Samsung gemini', stock: 101 },
    { harga: 5000000, img: `https://s1.bukalapak.com/img/16616418942/s-330-330/data.jpeg`, brand: 'Samsung A4', stock: 211 },
    { harga: 6000000, img: `https://s0.bukalapak.com/img/58210598131/s-330-330/2019_08_16T18_55_45_07_00.jpg`, brand: 'Xiomi j3', stock: 201 },
]

let buttonSearce = document.getElementById("button-cari")
buttonSearce.addEventListener('click', function (event) {
    event.preventDefault()
    search()
})

function search() {
    const input = document.getElementById("input1").value
    // console.log(input);
    // let input = 'j3'
    let output = []
    for (let i = 0; i < dataBase.length; i++) {
        let brand = dataBase[i].brand.toLowerCase()
        let tmp = ""

        let index = brand.search(input) // menggunakan build in function
        // console.log(index);
        if (index !== -1) {
            output.push(dataBase[i])
        }

        // for (let j = 0; j <= brand.length; j++) {
        //     if (brand[j] === ' ' || !brand[j]) {
        //         if (tmp.toLowerCase() === input.toLowerCase()) {
        //             output.push(dataBase[i])
        //         }
        //         tmp = ''
        //     } else {
        //         tmp += brand[j]
        //     }
        // }
    }
    // console.log(output);
    if (output.length === 0) {
        alert('Product tidak ada')
    } else {
        render(output)
    }
}
// search()

function render(data) {
    const list = document.getElementById("list")
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        let harga = moneyFormatter(data[i].harga)
        const product = document.createElement("div")
        product.className = "col product-justify"
        product.innerHTML = `<div class="card" id="${data[i].brand}">
        <span class = "product-stock" id="${data[i].stock}">Stok : ${data[i].stock}</span>
        <img src="${data[i].img}" class="card-img-top product-image" alt="image">
        <div class="card-body product-info">
        <h5 class="card-title" >${data[i].brand}</h5>
        <p class="card-text" id="${data[i].harga}">Rp${harga},-</p>
        <div class="text-center span">
        <button type="button" class="btn btn-block btn-add-product" id="button ${i}">Add</button>
        </div>
        </div>
        </div>
        </div>`
        list.appendChild(product)
    }
}
render(dataBase)


// function addToCart(str) {
//     console.log(str);
//     let namaBarang = str.children[2].children[0].innerHTML
    
//     const pesanan = document.getElementById("data-barang")
//     const barang = document.createElement('span')
//     barang.setAttribute("class", "btn btn-gray")
//     barang.innerHTML = namaBarang
//     barang.addEventListener('click', function () {
//         barang.parentElement.parentElement.remove()
//     })
//     pesanan.children[0].children[4].appendChild(barang)

// }

function add() {
    // let tambah = document.getElementById("")
    let addButtons = document.getElementsByClassName("btn btn-block btn-add-product")
    for (let i = 0; i < addButtons.length; i++){
        const addButton = addButtons[i]
        let clickCounter = 1
        let banyakBarang = 1
        addButton.addEventListener('click', function () {
            let namaBarang = addButton.parentElement.parentElement.children[0].innerHTML
            let hargaBarang = addButton.parentElement.parentElement.children[1].getAttribute("id")
            let stokBarang = addButton.parentElement.parentElement.previousElementSibling.previousElementSibling.getAttribute("id")
            const  bodyTable= document.getElementById("data-barang")
            const barisBaru = document.createElement('tr')
            const newCellNo = document.createElement('td')
            const newCellBrand = document.createElement('td')
            const newCellJumlah = document.createElement('td')
            const newCellHarga = document.createElement('td')
            newCellJumlah.setAttribute('value', `${stokBarang}`)
            newCellHarga.setAttribute('value', `${hargaBarang}`)
            newCellNo.innerHTML = bodyTable.children.length + 1
            newCellBrand.innerHTML = namaBarang
            newCellJumlah.innerHTML = `
            <button onclick="minusButton(this.id)" class="btn btn-gray" type="button" id="minus_${(bodyTable.children.length + 1)}">-</button>
            <span class="px-2" id="">${banyakBarang}</span>
            <button onclick="plusButton(this.id)" class="btn btn-gray" type="button" id="plus_${(bodyTable.children.length + 1)}">+</button>`
            newCellHarga.innerHTML = `Rp${moneyFormatter(hargaBarang)}`
            barisBaru.appendChild(newCellNo)
            barisBaru.appendChild(newCellBrand)
            barisBaru.appendChild(newCellJumlah)
            barisBaru.appendChild(newCellHarga)
            barisBaru.setAttribute("id", `row_${(bodyTable.children.length + 1)}`)
            bodyTable.appendChild(barisBaru)
            // rowItem.insertCell(3).innerHTML = ;
            banyakBarang += 1
            addButton.remove()
        })
    }
}
add()

// function ambilNode(button_id){
//     console.log(button_id);
//     button_id.previousElementSibling

// }

function createDeleteButton() {
    // let pesanan = search(data)
    // for (let i = 0; i < data.length; i++) {
    //     const product = data[i]

    const pesanan = document.getElementById("data-barang")
    const del = document.createElement('button')
    del.setAttribute("class", "btn btn-gray")
    del.innerHTML = "delete"
    del.addEventListener('click', function () {
        del.parentElement.parentElement.remove()
    })
    pesanan.children[0].children[4].appendChild(del)
    // }
}
// createDeleteButton()


function minusButton(element) {
    // const pesanan = document.getElementById("data-barang")
    // const hargaBarang = 50000 //diganti harga dari database yang masuk entar
    // let quantity = pesanan.children[0].children[2].children[1]
    // quantity.innerHTML =  Number(quantity.innerHTML) - 1;
    // let harga = pesanan.children[0].children[3];
    // harga.innerHTML = Number(harga.innerHTML) - hargaBarang;
    const tombolMinus = document.getElementById(element)
    let quantity = Number(tombolMinus.nextElementSibling.innerHTML)
    const hargaSatuan = Number(tombolMinus.parentElement.nextElementSibling.getAttribute('value'))
    quantity--
    if(quantity === 0){
        tombolMinus.parentElement.parentElement.remove()
    }
    tombolMinus.nextElementSibling.innerHTML = quantity;
    tombolMinus.parentElement.nextElementSibling.innerHTML = `Rp${moneyFormatter( hargaSatuan * quantity)}`
    
}

function plusButton(element) {
    // console.log(element);
    const tombolPlus = document.getElementById(element)
    let quantity = Number(tombolPlus.previousElementSibling.innerHTML)
    const hargaSatuan = Number(tombolPlus.parentElement.nextElementSibling.getAttribute('value'))
    quantity++
    tombolPlus.previousElementSibling.innerHTML = quantity;
    tombolPlus.parentElement.nextElementSibling.innerHTML = `Rp${moneyFormatter( hargaSatuan * quantity)}`
    // tombolPlus.parentElement.nextElementSibling.getA
    // const pesanan = document.getElementById("data-barang")
    // const baris = pesanan.children[pesanan.children.length - 1].children[0].innerHTML
    // console.log(baris);
    // const hargaBarang = 50000 //diganti harga dari database yang masuk entar
    // let quantity = pesanan.children[0].children[2].children[1]
    // quantity.innerHTML =  Number(quantity.innerHTML) + 1;
    // let harga = pesanan.children[0].children[3]; 
    // harga.innerHTML = Number(harga.innerHTML) + hargaBarang;   
}


function moneyFormatter(money) {//number
    // write your code
    let numString = `${money}`
    let reversed = ''
    for (let i = numString.length - 1; i >= 0; i--){
      reversed += numString[i]
    }
    
    let reversedByPoint = ''
    let k = 2;
    for (let j = 0; j < reversed.length; j++){
      reversedByPoint += reversed[j]
      if (j === k && reversed[j + 1]){
        reversedByPoint += '.';
        k += 3;
      }
    }
  
    let output = ''
    for (let l = reversedByPoint.length - 1; l >= 0; l--){
      output += reversedByPoint[l];
    }
  
    return output
  }//string

  function newRow(tabBody){
    const barisBaru = document.createElement('tr')
    tabBody.appendChild(barisBaru)
  }