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
        const grams=jsondata.statistics.co2.grid.grams;
        const energy_s=jsondata.statistics.energy;
        const percentile_s=(grams/0.042)*100;
        document.getElementById("data-co2-grams").innerText=`Grams ${grams.toFixed(4)}`
        document.getElementById("energy-use").innerText=`Enerft:${energy_s.toFixed(4)}`
        document.getElementById("percentile").innerText=`Your cleanliness is in the ${percentile_s}`;
      })
      

      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
    
});