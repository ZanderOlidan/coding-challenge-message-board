import mongoose from 'mongoose';

const DB_URL = 'mongodb://db/users';

const initalizeMongo = () => {
    mongoose.connect(DB_URL);
    console.log(`Connecting to ${DB_URL}`);

    const db = mongoose.connection;
    db.on('error', () => {
        console.error("Connection Error: Don't think we can reach the db")
    })
    db.once('open', () => {
        console.log("Horay! We're connected");
        // addUser();
    })
}


export default initalizeMongo();