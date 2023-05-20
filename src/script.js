document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById("linkInput").value;
    const data_co2=document.getElementsById(".data-co2-grams");
    const energy=document.getElementById(".energy-use");
    const percentile=document.getElementById(".percentile");
    // Send an HTTP GET request to the URL using fetch()
    //const proxyUrl = `https://cors-anywhere.herokuapp.com/${url_important}`;
    
    fetch(`https://api.websitecarbon.com/site?url=${url}`)
      .then(response => response.text())
      .then(htmlContent => {
        // Print or process the HTML content as needed
        console.log(htmlContent);
        const jsondata=JSON.parse(htmlContent);
        const grams=jsondata.statistics.co2.grid.grams;
        const energy=jsondata.statistics.energy;
        const percentile=grams/0.042;
        data_co2.innerHTML()=grams;
        energy.innerHTML()=energy;
        percentile.innerHTML()=`Your cleanliness is in the ${percentile}% of all websites`
      })
      

      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
    
});