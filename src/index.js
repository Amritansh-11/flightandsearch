const express= require("express");

const {PORT }=require('./config/serverConfig');
const CityRepository=require('./respository/city-respository')
const apiRoutes=require('./routes/index')
const setupAndstartserver =async ()=>{
    const app=express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api',apiRoutes);
const {City,Airport}=require('./models/index')
const db= require('./models/index')
const sequelize =require("sequelize")

    
    app.listen(PORT , async ()=>{
      console.log(`Server started at ${PORT}`)
      if(process.env.SHOW_DB){
        db.sequelize.sync({alter:true});
      }
      
      // const city= await City.findOne({
        // where:{
        //  id:3
        // }
      // })
      // const airports=await city.getAirports();
      // city
      // console.log(airports,city);
      // 
    
    }

)
}
setupAndstartserver();