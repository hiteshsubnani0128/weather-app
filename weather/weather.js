const request = require('request');
request({
    url : 'https://api.darksky.net/forecast/5c62dbd1f0372135faf6dfd0f60c9710/26.9013363,75.828819',
    json : true
}, (error, response, body) => {
    
    if(error) {
                console.log(errorMessage);
            }
            else if(response.statusCode == 400){
                console.log('Unable to fetch weather');
            }
            else if(response.statusCode == 200){
                console.log(JSON.stringify(body.currently.temperature, undefined, 2));
            }
});