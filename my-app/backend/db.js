const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://Arith7:Okyl76er@cluster0.hrcj0ei.mongodb.net/FoodzCart?retryWrites=true&w=majority";

const connection = async () => {
await mongoose.connect(mongoURI).then(async() => {
    console.log(`Connection to Database Successfull`);
    const fetched_data = await mongoose.connection.db.collection("food_items");
    fetched_data.find().forEach(function(err, data) {
        if(err){
            console.log(err);
        }
    })
}).catch(() => {
    console.log(`Connection to Database Unsuccessfull`);
})
}

module.exports = connection;
