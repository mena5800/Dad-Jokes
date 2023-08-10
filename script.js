
const joke_box = document.getElementById("joke-contet");
const joke_button = document.getElementById("new-joke-button");


const get_function = function(){
    fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json())
    .then(data => {
      // Do something with the data

        joke_box.innerText = data["attachments"][0]["fallback"];
    })
    .catch(error => {
      // Handle any errors
      console.error('Error fetching data:', error);
    });
  
  
}


get_function()


joke_button.addEventListener("click",event =>{
    get_function();
})
