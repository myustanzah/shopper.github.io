const dataBase = [
    { harga: 1000000, img: `https://s1.bukalapak.com/img/18917791912/w-250/2020-05-15T13%3A41%3A11%2B07%3A00.jpeg.webp`, brand: 'Samsung', stock: 200 },
    { harga: 2000000, img: `https://s1.bukalapak.com/img/63536959851/s-330-330/data.png`, brand: 'Samsung A10', stock: 2 },
    { harga: 3000000, img: `https://s0.bukalapak.com/img/57289478641/s-330-330/data.png`, brand: 'Samsung J8', stock: 2010 },
    { harga: 4000000, img: `https://s2.bukalapak.com/img/29815964201/s-330-330/data.png`, brand: 'Samsung A50', stock: 101 },
    { harga: 5000000, img: `https://s1.bukalapak.com/img/16616418942/s-330-330/data.jpeg`, brand: 'Samsung A4', stock: 211 },
    { harga: 6000000, img: `https://s0.bukalapak.com/img/58210598131/s-330-330/2019_08_16T18_55_45_07_00.jpg`, brand: 'Xiomi j3', stock: 201 },
]

const buttonSearce = document.getElementById("button-cari")
// const pertambahan = document.getElementsById("buttonTambah")
// const tambah = document.createElement("button")
// tambah.setAttribute("class", "btn btn-block btn-add-product")
// tambah.innerHTML = "Add"
buttonSearce.addEventListener('click', function (event) {
    event.preventDefault()
    search()
    // pertambahan.children[0].appendChild(tambah)
})

function search() {
    const input = document.getElementById("input1").value
    // console.log(input);
    // let input = 'j3'
    let output = []
    for (let i = 0; i < dataBase.length; i++) {
        let brand = dataBase[i].brand.toLowerCase()
        let tmp = ""

        // let index = brand.search(input) // menggunakan build in function
        // console.log(index);
        // if (index !== -1) {
        //     output.push(dataBase[i])
        // }

        for (let j = 0; j <= brand.length; j++) {
            if (brand[j] === ' ' || !brand[j]) {
                if (tmp.toLowerCase() === input.toLowerCase()) {
                    output.push(dataBase[i])
                }
                tmp = ''
            } else {
                tmp += brand[j]
            }
        }
    }
    // console.log(output);
    if (output.length === 0) {
        alert('Product tidak ada')
    } else {
        add(render(output))
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
        product.innerHTML = `<div class="card">
        <span class = "product-stock">Stok : ${data[i].stock}</span>
        <img src="${data[i].img}" class="card-img-top product-image" alt="image">
        <div class="card-body product-info">
        <h5 class="card-title">${data[i].brand}</h5>
        <p class="card-text">${harga}</p>
        <div class="text-center span" id="buttonTambah">
        <button type="button" class="btn btn-block btn-add-product" id="button${i}">Add</button>
        </div>
        </div>
        </div>
        </div>`
        list.appendChild(product)
    }
}
render(dataBase)



// function add() {
//     // let tambah = document.getElementById("")
//     let buttonAdd = document.getElementsByClassName("btn btn-block btn-add-product")
//     buttonAdd.addEventListener('click', function () {
//         console.log('masuk');
//     })
// }
// add()

function createDeleteButton() {
    // let pesanan = search(data)
    // for (let i = 0; i < dataBase.length; i++) {
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
createDeleteButton()


function minusButton() {
    const pesanan = document.getElementById("data-barang")
    const hargaBarang = 50000 //diganti harga dari database yang masuk entar
    let quantity = pesanan.children[0].children[2].children[1]
    quantity.innerHTML = Number(quantity.innerHTML) - 1;
    let harga = pesanan.children[0].children[3];
    harga.innerHTML = Number(harga.innerHTML) - hargaBarang;
    if (Number(quantity.innerHTML) === 0) {
        pesanan.remove()
    }

}

function plusButton() {
    const pesanan = document.getElementById("data-barang")
    const hargaBarang = 50000 //diganti harga dari database yang masuk entar
    let quantity = pesanan.children[0].children[2].children[1]
    quantity.innerHTML = Number(quantity.innerHTML) + 1;
    let harga = pesanan.children[0].children[3];
    harga.innerHTML = Number(harga.innerHTML) + hargaBarang;
}


function moneyFormatter(money) {//number
    // write your code
    let numString = `${money}`
    let reversed = ''
    for (let i = numString.length - 1; i >= 0; i--) {
        reversed += numString[i]
    }

    let reversedByPoint = ''
    let k = 2;
    for (let j = 0; j < reversed.length; j++) {
        reversedByPoint += reversed[j]
        if (j === k && reversed[j + 1]) {
            reversedByPoint += '.';
            k += 3;
        }
    }

    let output = ''
    for (let l = reversedByPoint.length - 1; l >= 0; l--) {
        output += reversedByPoint[l];
    }

    return output
}//string


function add() {
    for (let i = 0; i < dataBase.length; i++) {
        const displayBarang = document.getElementById("data-barang")
        const creatRow = document.createElement("tr")
        creatRow.innerHTML = `
        <th scope="row">${0 + i}</th>
        <td>${dataBase[i].brand}</td>
        <td>
            <button onclick="minusButton()" class="btn btn-gray" type="button">-</button>
            <span class="px-2">0</span>
            <button onclick="plusButton()" class="btn btn-gray" type="button">+</button>
        </td>
        <td>${dataBase[i].harga}</td>
        <td></td>
        <!-- <button class="btn btn-gray" type="button">Hapus</button> -->
        `
        const tombolAdd = document.getElementById(`button${i}`)
        console.log(displayBarang);
        tombolAdd.addEventListener('click', function () {
            displayBarang.appendChild(creatRow)
            // createDeleteButton()
        })
    }
}
add()
