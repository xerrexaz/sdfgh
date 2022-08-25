//  ! Savage.#0001 - https://https://discord.gg/xq3jNPpQ8QvSAZPbZaVG

const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect(process.env.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connected to the database! |  ! epic.#1760 - https://https://discord.gg/xq3jNPpQ8Q")
    }catch (e) {
        console.log(e)
    }
};

connect();

//  ! Savage.#0001 - https://https://discord.gg/xq3jNPpQ8QvSAZPbZaVG