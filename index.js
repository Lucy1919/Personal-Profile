// template_qpirs7g
// 
// M6NeTLLLL-ZVNfIRQ

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_zadfeml',
            'template_qpirs7g',
            event.target,
            'M6NeTLLLL-ZVNfIRQ'
        ).then(() => {
            console.log('this worked')
        })

}
