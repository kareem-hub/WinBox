const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const linkedinacc = document.querySelector("#linkedin");
const instaacc = document.querySelector("#instagram");
const sololearnacc = document.querySelector("#sololearn");

about.addEventListener('click',() => {
    const aboutBox = new WinBox({
        title:'About me',
        background: '#1fbd00',
        width: '400px',
        height: '60%',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent
    })
});

contact.addEventListener('click',() => {
    const aboutBox = new WinBox({
        title:'About me',
        background: '#1fbd00',
        width: '400px%',
        height: '45%',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: contactContent
    })
});