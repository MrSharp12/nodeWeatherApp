const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibXJzaGFycCIsImEiOiJjazE1djZ0cTkwcW1wM21sYmN2ZjRnbjJhIn0.HCIKT7M_q4CtFgemzWrOUg&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to make connection to the server', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Please try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    });
};

module.exports = geocode;