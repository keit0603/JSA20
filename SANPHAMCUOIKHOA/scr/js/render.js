const list = [
    {
        id:1,
        name: "Bộ nam femeni mặc đẹp mọi lúc, chất vải co giãn 4 chiều mặc thoải mái",
        img: "img/anh1.jpg",
        gia: "105.000 đ",
        giamgia: "20% Sale"
    },
    {
        id:2,
        name: "Áo thun nam nữ reasonss hình học in 3d phản quang hot trend pink shop",
        img: "img/anh2.jpg",
        gia: "55.000 đ",
        giamgia: "50% Sale"
    },
    {
        id:3,
        name: "Bộ quần áo nam thể thao DG vương miện in sao ảnh thật",
        img: "img/anh3.jpg",
        gia: "227.500 đ",
        giamgia: "20% Sale"
    }, 
    {
        id:4,
        name: "Bộ quần áo Nam mùa hè Cực Ngầu",
        img: "img/anh4.jpg",
        gia: "169.000 đ",
        giamgia: "30% Sale"
    },
    {
        id:5,
        name: "Bộ quần áo thun nam ngắn tay quần dài indeed kiểu dáng hàn quốc trẻ trung thời trang đường phố phong cách 4her set nam 9000046",
        img: "img/anh5.jpg",
        gia: "79.000 đ",
        giamgia: "60% Sale"
    },
    {
        id:6,
        name: "Bộ quần áo nam đẹp",
        img: "img/anh6.jpg",
        gia: "109.000 đ",
        giamgia: "50% Sale"
    },
    {
        id:7,
        name: "Set bộ quần áo thể thao nam lưới mè gk69 kèm ảnh thật",
        img: "img/anh7.jpg",
        gia: "79.000 đ",
        giamgia: "50% Sale"
    }, 
    {
        id:8,
        name: "Bộ quần áo thun nam mùa hè áo ngắn tay indeed kết hợp quần jogger nam kiểu dáng hàn quốc trẻ trung thời trang đường phố phong cách smartly girl set 9000046c",
        img: "img/anh8.jpg",
        gia: "89.000 đ",
        giamgia: "30% Sale"
    },
    {
        id:9,
        name: "Bộ quần áo hè nam mm cực đẹp shop uy tín",
        img: "img/anh9.jpg",
        gia: "149.000 đ",
        giamgia: "40% Sale"
    },
];

function render(data, conten) {
    if (conten) {
        conten.innerHTML = '';
        for (let item of data) {
            conten.innerHTML += `
    <a href="home2.html?id=${item.id}">          
        <div href="home2.html" class="item">
            <div class="img">
                <img src="${item.img}" alt="">
            </div>
            <div class="thongtin">
                <p class="name">${item.name}</p>
                <p class="gia">${item.gia}</p>
                <p class="giamgia">${item.giamgia}</p>
            </div>
        </div> 
    </a>
    `
        }
    }
}
let conten = document.querySelector(".conten");
render(list, conten)
let _new = document.querySelector(".postNew");


function add() {
    let dataGiamgia = document.querySelector(".giamgia").value;
    let dataGia = document.querySelector(".gia").value;
    let dataImg = document.querySelector(".img").value;
    list.push({
        img: dataImg,
        gia: dataGia,
        giamgia: dataGiamgia
    })
    render(list,conten)
}
function Tongthongtin(data) {
    let id = new URLSearchParams(window.location.search).get('id');
    let Tin = data.find((item) => { return item.id == id })
    let app = document.querySelector(".app");
    if (app) {
        app.innerHTML = `
    <div class="Tongthongtin">
        <div class="img">
            <img src="${Tin.img}" alt="">
        </div>
        <div class="thongtinchitiet">
                <p class="name">${Tin.name}</p>
                <p class="sale">${Tin.giamgia}</p>
                <p class="sell">${Tin.gia}</p>
            <br>
            <div class="button">
                <button class="button-btn">Mua</button>
            </div>
        </div>
    </div>    
    
    
    `
    }
}
Tongthongtin(list)