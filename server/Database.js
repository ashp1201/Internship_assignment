const mongoose=require('mongoose');
;

const Connection = async () => {
    const URL = `mongodb+srv://<user>:<password>@ms-word-clone.sbf2ifg.mongodb.net/?retryWrites=true&w=majority`;
    //here update username and password 
    // I have removed from my credential 
    try {
        await mongoose.connect(URL);

       
        console.log("Db connected Successfully");
    } catch (error) {
        console.error("Error while connection:", error);
    }
}

module.exports = { Connection };

