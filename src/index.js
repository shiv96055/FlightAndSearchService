const express = require("express");

const { PORT } = require('./config/serverConfig');
const setupAndStartServer = async () =>{

    // crate express object
    const app = express() ;
    app.listen(PORT, () => {
        console.log(`Server Start at ${PORT}`);
        console.log(process.env);
    });


} 

setupAndStartServer();