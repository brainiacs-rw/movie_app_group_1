const mongoose = require('mongoose');
const colors = require('colors');
const db_connection = () => {
    const conn = mongoose.connect(process.env.MONGO_ULR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    if(conn) {
        const message = `mongodb is connected at ${process.env.MONGO_ULR}`.magenta;
        console.log(`-------------------------\n\t${message}`);
    }else {
        process.exit();
    }
}


module.exports = db_connection