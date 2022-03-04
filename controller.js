const {getDateNumber, isPrimeNumber, randomValueInRange, getWeatherDataByLatLong, saveAuditData} = require('./service');
 
exports.getWeather = (req, res, next) => {
    const dateNumber = getDateNumber();
    if(!isPrimeNumber(dateNumber)) {
        saveAuditData("Error", "Date is not prime so you can't request the data")
        .then(result => console.log('Audit data saved'))
        .catch(error => console.log('Error while saving audit data,',error))
        return res.status(400).send("Date is not prime so you can't request the data");
    }
    const latitude = randomValueInRange(-90,90,3);
    const longitude = randomValueInRange(-180,180,3);
    getWeatherDataByLatLong(latitude,longitude)
    .then(data => {
        saveAuditData("Success", JSON.stringify(data))
        .then(result => console.log('Audit data saved'))
        .catch(error => console.log('Error while saving audit data,',error))
        res.status(200).json(data)
    })
    .catch(error => {
        saveAuditData("Error", error.message || "Internal server error")
        .then(result => console.log('Audit data saved'))
        .catch(error => console.log('Error while saving audit data,',error))
        res.status(500).send("Internal server error");
    });
}
