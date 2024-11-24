<script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
 
var typed = new Typed('#element', {
    strings: [ 'IT Student.','Software Programmer.', 'Web Developer.', 'Tech Enthusiast.'],
    typeSpeed: 50,
    loop: true
});


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyzPIP3I-yfQkpHtID_nCHqxRWNqh3YqJ0sFSb_yn7SyS4dqYx15YzfDb5_azyxya9acQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
        })
    form.reset()

        .catch(error => console.error('Error!', error.message))
})

   src="https://unpkg.com/scrollreveal"

 
