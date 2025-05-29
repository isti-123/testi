let indeksi = 0;

function levizDjathtas() {
    const slider = document.getElementById("slider");
    const totalFoto = slider.children.length;
    const maxIndeks = totalFoto - 3;

    if (indeksi < maxIndeks) {
        indeksi++;
        rifreskoSliderin();
    }
}

function levizMajtas() {
    if (indeksi > 0) {
        indeksi--;
        rifreskoSliderin();
    }
}

function rifreskoSliderin() {
    const foto = document.querySelector('.foto');
    const stil = window.getComputedStyle(foto);
    const marginDjathtas = parseInt(stil.marginRight) || 0;

    const gjeresia = foto.offsetWidth + marginDjathtas;

    document.getElementById("slider").style.transform = `translateX(-${indeksi * gjeresia}px`);
}