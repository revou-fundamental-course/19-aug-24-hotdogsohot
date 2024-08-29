
//Bagian input nama 
function firstuser(){
    let firstuser= prompt('Masukan nama anda!')
    document.getElementById('user').innerHTML = firstuser
}
firstuser()


//Bagian autoslide image
var slideIndex = 1 
showSlide(slideIndex)

function addSlide(n){
    showSlide(slideIndex+=n)
}

function currentSlide(n){
    showSlide(slideIndex = n)
    clearInterval(MyInterval)
    automaticSlide()
}

function showSlide(n){
    var i;
    var x = document.getElementsByClassName('MySlides')
    var button = document.getElementsByClassName('buttonslide')
    if (n > x.length) {slideIndex = 1}
    if (n<0) {slideIndex = x.length}
    for (i=0; i<x.length; i++){
        x[i].style.display = 'none'
    }
    for(i=0; i<button.length; i++){
        button[i].classList.remove('active')
    }
    x[slideIndex-1].style.display = 'block'
    button[slideIndex-1].classList.add('active')
}

function automaticSlide(){
    MyInterval = setInterval(() => {
        addSlide(1)
    }, 3000);
}
automaticSlide()


//Function untuk menunjukkan input form
document.getElementById('personalForm').addEventListener('submit', function(event) {  
    event.preventDefault();

    const name = document.getElementById('nama').value;
    const tl = document.getElementById('tl').value;
    const jeniskelaminelement = document.querySelector('input[name="jeniskelamin"]:checked');
    const pesan = document.getElementById('pesan').value;


    if (name == '' || tl == '' || !jeniskelaminelement){
        alert("Ada input yang belum diisi!")
        return;
    }
    const jeniskelamin = jeniskelaminelement.value;

    const formDataDisplay = document.getElementById('formdatadisplay');
    formDataDisplay.innerHTML = `
          <div class="grid-item">Name</div>
        <div class="grid-item">:</div>
        <div class="grid-item">${name}</div>
        <div class="grid-item">Tanggal lahir</div>
        <div class="grid-item">:</div>
        <div class="grid-item">${tl}</div>
        <div class="grid-item">Jenis Kelamin</div>
        <div class="grid-item">:</div>
        <div class="grid-item"><span>${jeniskelamin}</span></div>
        <div class="grid-item">Pesan</div>
        <div class="grid-item">:</div>
        <div class="grid-item">${pesan}</div>
    `;
});
