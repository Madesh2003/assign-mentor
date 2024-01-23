const mongoose = require('mongoose');

function ConnectToDatabase(){
    mongoose.connect('mongodb://localhost:27017/mentorsdetails')
    .then(res => console.log('Database Connected Successfully'))
    .catch(err => console.log(err));
}


module.exports = { ConnectToDatabase }