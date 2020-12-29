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

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
}


// Obtiene a todos los botones con la clase "activate-modal" //
let btnModal = document.getElementsByClassName("activate-modal");
// Obtiene a todos los modals //
let modal = document.getElementsByClassName("modal");
// Obtiene el boton cerrar //
let btnCloseModal = document.getElementsByClassName("btn-close-modal")[0];

let body = document.getElementsByTagName("body")[0];

for(let i = 0; i < btnModal.length; i++){
    btnModal[i].setAttribute("id", "btn-modal-" + i);
    modal[i].setAttribute("id", "modal-" + i);
    
    btnModal[i].onclick = function() {
        modal[i].style.display = "block";
        body.setAttribute("style", "overflow: hidden")
    }

    document.addEventListener("click", e => {

        if (e.target == document.getElementById("modal-"+ i)) {
            wait(50);
            modal[i].style.display = "none";
            body.setAttribute("style", "overflow: visible")
        }
        else if (e.target == btnCloseModal) {
            wait(50);
            modal[i].style.display = "none";
            body.setAttribute("style", "overflow: visible")
        }
        
    })
}
