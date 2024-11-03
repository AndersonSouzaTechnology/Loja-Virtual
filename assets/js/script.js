// MENU CELULAR
let MenuItens = document.getElementById("menuItens");
MenuItens.style.maxHeight = "0px";
function menuCelular() {
    if(MenuItens.style.maxHeight == "0px") {
        MenuItens.style.maxHeight = "200px";
    } else {
        MenuItens.style.maxHeight = "0px";
    }
}
// FIM MENU CELULAR