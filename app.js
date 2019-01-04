const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
    a: {
        demand: true,
        alisa : 'address',
        describe : 'Address to featch wether for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;
var formattedAddress = encodeURIComponent(argv.a);
request({
    url : 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDMIBY1H3RBPhmjLRO6zmh3-jWe9eJZZsc&address='+ formattedAddress,
    json : true
}, (error, response, body) => {
    if(error){
        console.log('Unable to connect to Google server');
    }
    else if(body.status === 'ZERO_RESULTS'){
        console.log('Unable to find that Address.');
    }
    else{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`lat: ${body.results[0].geometry.location.lat}`);
    console.log(`lat: ${body.results[0].geometry.location.lng}`);
 } });

