var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzcjAC5Js9wQdYUmKwp9E7ejQE2HkB5JIWQ-12awXFLhX0hB-gxVleWkT6LAma_XnVU7A/exec'

document.addEventListener('DOMContentLoaded', function() {
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  console.log('Form:', form)
  console.log('Message element:', msg)

  if (!form || !msg) {
    console.error('Form or message element not found')
    return
  }

  form.addEventListener('submit', e => {
    e.preventDefault()
    console.log('Form submitted')
    
    msg.style.display = "block"
    msg.innerHTML = "Sending message..."
    msg.style.color = "blue"
    
    fetch(scriptURL, { 
      method: 'POST', 
      body: new FormData(form)
    })
      .then(response => {
        console.log('Response received')
        msg.innerHTML = "Message Sent Successfully."
        msg.style.color = "#61b752"
        form.reset()
        
        setTimeout(function(){
          msg.innerHTML = ""
          msg.style.display = "none"
        }, 5000)
      })
      .catch(error => {
        console.error('Error!', error)
        msg.innerHTML = "Error sending message. Please try again."
        msg.style.color = "red"
      })
  })
})

