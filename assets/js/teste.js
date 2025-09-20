window.onload = (event) => {
    let atualPx = 16;
    let outfont = document.getElementById("outfont");
    let infont = document.getElementById("infont");
    let numberPx = document.getElementsByTagName("number")

    outfont.addEventListener("click", () => {
        atualPx = atualPx - 0.5;
        numberPx[0].innerHTML = atualPx + "px";
        document.getElementsByClassName("xx")[0].style.fontSize = atualPx + "px";
    })

    infont.addEventListener("click", () => {
        atualPx = atualPx + 0.5;
        numberPx[0].innerHTML = atualPx + "px";
        document.getElementsByClassName("xx")[0].style.fontSize = atualPx + "px";
    })
};