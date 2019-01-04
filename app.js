const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(agrv.a);
