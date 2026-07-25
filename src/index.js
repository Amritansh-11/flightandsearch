const express= require("express");

const {PORT }=require('./config/serverConfig');
const CityRepository=require('./respository/city-respository')
const apiRoutes=require('./routes/index')
const setupAndstartserver =async ()=>{
    const app=express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api',apiRoutes);



    
    app.listen(PORT ,()=>{
      console.log(`Server started at ${PORT}`)
      
      
    
    }

)
}
setupAndstartserver();