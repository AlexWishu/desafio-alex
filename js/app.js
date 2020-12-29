document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const iconContainer = document.getElementsByClassName('icon-container');

for(let i = 0; i < iconContainer.length; i++){
    iconContainer[i].addEventListener("mouseover", () => {
        let icon = iconContainer[i].querySelector('i');
        icon.classList.add('font-white');
    })

    iconContainer[i].addEventListener("mouseout", () => {
        let icon = iconContainer[i].querySelector('i');
        icon.classList.remove('font-white');
    })
}


// Obtiene a todos los botones con la clase "activate-modal" //
var btnModal = document.getElementsByClassName("activate-modal");
// Obtiene a todos los modals //
var modal = document.getElementsByClassName("modal");

for(let i = 0; i < btnModal.length; i++){
    btnModal[i].setAttribute("id", "btn-modal-" + i);
    modal[i].setAttribute("id", "modal-" + i);
    
    btnModal[i].onclick = function() {
        modal[i].style.display = "block";
    }

    document.addEventListener("click", e => {
        if (e.target == document.getElementById("modal-"+ i)) {
            modal[i].style.display = "none";
        }
    })
}
