const userName = document.getElementById('name')
const userEmail = document.getElementById('email')
const userPhone = document.getElementById('phone')
const userProject = document.getElementById('project')
const userMessage = document.getElementById('message')
const reply = document.getElementById('reply')
const button = document.getElementById('button')


button.addEventListener('click', (e) => {
    e.preventDefault()
    const name = userName.value
    const email = userEmail.value
    const phone = userPhone.value
    const project = userProject.value
    const message = userMessage.value

    reply.value = "sending..."
   
    const url = `http://localhost:3000/quoteRequest?name=${name}&email=${email}&mobile=${phone}&project=${project}&message=${message}`

    fetch(url)
    .then((response) => {
       return response.json()
    })
    .then((data) => {
        if(data.errors){
            reply.value = 'invalid input' 
        } else{
            reply.style.color = "green"
            reply.value = 'Your request has been submitted!'
            // sendgrid come here
        } 
        
    })
    .catch((e) => {
        console.log(e)
    })
}) 
