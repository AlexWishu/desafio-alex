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