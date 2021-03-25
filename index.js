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
        render(output)
    }
}
// search()

function render(data) {
    const list = document.getElementById("list")
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++) {

        const product = document.createElement("div")
        product.className = "col product-justify"
        product.innerHTML = `<div class="card">
        <span class = "product-stock">Stok : ${data[i].stock}</span>
        <img src="${data[i].img}" class="card-img-top product-image" alt="image">
        <div class="card-body product-info">
        <h5 class="card-title">${data[i].brand}</h5>
        <p class="card-text">${data[i].harga}</p>
        <div class="text-center span">
        <button type="button" class="btn btn-block btn-add-product">Add</button>
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
createDeleteButton()

            // `<img src="${data[i].img}" alt="Barang">
            // <h4>"${data[i].brand}"</h4>
            // <span id='price'>Rp ${data[i].harga}</span><br>
            // <button id="tombol-add">Add</button>
            // `

