const dataBase = [
    { harga: 1000000, img: `https://s1.bukalapak.com/img/18917791912/w-250/2020-05-15T13%3A41%3A11%2B07%3A00.jpeg.webp`, brand: 'Samsung' },
    { harga: 2000000, img: `https://s1.bukalapak.com/img/63536959851/s-330-330/data.png`, brand: 'Samsung' },
    { harga: 3000000, img: `https://s0.bukalapak.com/img/57289478641/s-330-330/data.png`, brand: 'Samsung' },
    { harga: 4000000, img: `https://s2.bukalapak.com/img/29815964201/s-330-330/data.png`, brand: 'Samsung' },
    { harga: 5000000, img: `https://s1.bukalapak.com/img/16616418942/s-330-330/data.jpeg`, brand: 'Samsung' },
    { harga: 6000000, img: `https://s0.bukalapak.com/img/58210598131/s-330-330/2019_08_16T18_55_45_07_00.jpg`, brand: 'Samsung' },
    { harga: 7000000, img: `https://s1.bukalapak.com/img/62673211912/large/2020-05-15T10%3A16%3A44%2B07%3A00.jpeg.webp`, brand: 'Samsung' },
]


for (let i = 0; i < dataBase.length; i++) {
    const image = document.getElementById('foto').src = dataBase[i].img
}

