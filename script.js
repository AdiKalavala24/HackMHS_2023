//const { json } = require("stream/consumers");

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById("linkInput").value;
    
    // Send an HTTP GET request to the URL using fetch()
    //const proxyUrl = `https://cors-anywhere.herokuapp.com/${url_important}`;
    
    fetch(`https://api.websitecarbon.com/site?url=${url}`)
      .then(response => response.text())
      .then(htmlContent => {
        // Print or process the HTML content as needed
        console.log(htmlContent);
        const jsondata=JSON.parse(htmlContent);
        console.log(jsondata.statistics.co2.grid.grams)
        
      })

      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
    
});

 
