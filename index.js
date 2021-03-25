const dataBase = [
    { harga: 1000000, img: `https://s1.bukalapak.com/img/18917791912/w-250/2020-05-15T13%3A41%3A11%2B07%3A00.jpeg.webp`, brand: 'Samsung' },
    { harga: 2000000, img: `https://s1.bukalapak.com/img/63536959851/s-330-330/data.png`, brand: 'Samsung A10' },
    { harga: 3000000, img: `https://s0.bukalapak.com/img/57289478641/s-330-330/data.png`, brand: 'Samsung J8' },
    { harga: 4000000, img: `https://s2.bukalapak.com/img/29815964201/s-330-330/data.png`, brand: 'Samsung gemini' },
    { harga: 5000000, img: `https://s1.bukalapak.com/img/16616418942/s-330-330/data.jpeg`, brand: 'Samsung A4' },
    { harga: 6000000, img: `https://s0.bukalapak.com/img/58210598131/s-330-330/2019_08_16T18_55_45_07_00.jpg`, brand: 'Xiomi j3' },
]



function search() {
    let input = document.getElementById("input").value
    // let input = 'samsung'
    let output = []
    for (let i = 0; i < dataBase.length; i++) {
        let tmp = ""
        for (let j = 0; j <= dataBase[i].brand.length; j++) {
            if (dataBase[i].brand[j] === ' ' || !dataBase[i].brand[j]) {
                if (tmp.toLowerCase() === input.toLowerCase()) {
                    output.push(dataBase[i])
                }
                tmp = ''
            } else {
                tmp += dataBase[i].brand[j]
            }
        }
    }
    // console.log(output);
    if (output.length <= 0) {
        alert('Product tidak ada')
    } else {
        render(output)
    }
}
// search()

function render(data) {
    let list = document.getElementById("list-product")
    list.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        // const image = document.getElementById('foto').src = dataBase[i].img
        let product = document.createElement("div")
        product.className = "daftar-product"
        product.innerHTML = `<img src="${data[i].img}" alt="Barang">
        <h4>"${data[i].brand}"</h4>
        <span id='price'>Rp ${data[i].harga}</span><br>
        <button id="tombol-add">Add</button>
        `
        list.appendChild(product)
    }
}
render(dataBase)

