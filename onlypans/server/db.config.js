const dbName = 'onlypans-deliveries';
const dbHost = 'localhost';
const dbPort = 27017;
module.exports = {
    url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}