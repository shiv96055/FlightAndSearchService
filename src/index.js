const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');

const CityRepository = require('./repository/city-repository');
const setupAndStartServer = async () =>{

    // crate express object
    const app = express() ;

    // middle ware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.listen(PORT, async () => {
        console.log(`Server Start at ${PORT}`);
       // console.log(process.env);
       const repo = new CityRepository();
       repo.deleteCity(1);
    });


} 

setupAndStartServer();