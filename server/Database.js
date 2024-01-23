const mongoose=require('mongoose');
;

const Connection = async () => {
    const URL = `mongodb+srv://user1:mswordpass@ms-word-clone.sbf2ifg.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL);

       
        console.log("Db connected Successfully");
    } catch (error) {
        console.error("Error while connection:", error);
    }
}

module.exports = { Connection };

