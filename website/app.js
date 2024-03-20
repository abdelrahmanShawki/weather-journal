

// Personal API Key for OpenWeatherMap API
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '962f31478475387fbb71ba60fe52206c';



// Event listener to add function to existing HTML DOM element


let getWeather = async (zipCode) => { 
    let url = baseUrl + "zip=" + zipCode + "&appid=" + apiKey;
    try { 
        const response = await fetch(url);
        const res = await response.json();
        let temp = res.main.temp;
        let date = new Date().toISOString().split('T')[0];;
        let data = {
             temperature : temp ,
             date : date ,
             zipCode : zipCode
            }

        return data;
    }
    catch (error) { 
        document.getElementById('roundedDiv').innerText  = 'Error , no logical result';
    }
    
} 


document.getElementById('generate').addEventListener('click', getData = () => {
    let zipCode = document.getElementsByTagName('input')[0].value;
    getWeather(zipCode).then((data) => {
            postData('http://localhost:3000/postProjectData' , data).then((newData) => {
                updateUI(newData);
            })
    })
});




let postData = async (url = '' , data = {}) => {
    const response = await fetch(url , { 
        method : 'POST' , 
        credentials : 'same-origin' , 
        headers: { 
            'Content-Type' : 'application/json'
        } , 
        body: JSON.stringify(data)
    });
    try { 

        const newData = await response.json();
        console.log('data posted successfully')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return newData;
    }
    catch(error) { 
        console.log(error);
    }
}



let updateUI = (newData) => {
    try { 
        if(!newData) { 
            throw new Error('no data posted to fetch');
        }
        document.getElementById('roundedDiv').innerText = 
        `Temperature: ${newData.temperature}°C |   ${newData.date}  | zip code ${newData.zipCode}`;
    }
    catch(error) { 
            console.log(error);
    }
   
}
/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */