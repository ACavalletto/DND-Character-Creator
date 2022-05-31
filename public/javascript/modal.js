const modal = document.getElementById('modal');
const btn = document.getElementById('deleteBtn');
const close = document.getElementById('close');

btn.onclick= () =>{
    modal.style.display="block"
}
close.onclick = () => {
    modal.style.display = "none";
}
window.onclick = (evt) => {
    if (evt.target == modal) {
        modal.style.display= "none"
    }
}
