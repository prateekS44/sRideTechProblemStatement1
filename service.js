const axios = require('axios');

const Audit = require('./auditModel');

exports.getDateNumber = () => {
    console.log('Called')
    const date = new Date();
    const day = date.getDate();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return parseInt(day + month + year)
}
 
exports.isPrimeNumber = (number) => {
    if(typeof(number) !== 'number' || number === 1) return false;
    for(let i=2; i<= Math.sqrt(number); i++) {
        if(number % i == 0){
            return false;
        }
    }
    return true;
}
 
exports.randomValueInRange = (start, end, fixed) => {
    return (Math.random() * (end - start) + start).toFixed(fixed) * 1;
}

exports.getWeatherDataByLatLong = (latitude, longitude) => {
    return axios.get(`https://api.openweathermap.org//data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.WEATHERMAP_API_KEY}`)
    .then((response) => {
        // console.log('SUCCESS')
        return response.data;
    })
    .catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return error.response;
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return error.request;
        } else {
            // Something happened in setting up the request that triggered an Error
            return error.message;
        }
    })
}

exports.saveAuditData = (status, data) => {
    return Audit.create({ 
        status: status, 
        data: data
    })
    .then(audit => audit.id)
    .catch(err => {
        throw err;
    });
}
