const {CityRepository}=require('../respository/index')

class CityService{
  constructor(){
    this.cityrepository=new CityRepository();
  }
  async createcity(data){
    try{
        const city= await this.cityrepository.createCity(data);
        return city;

    }
    catch(error){
        console.log("Something went wrong in service layer")
        throw{error}
    }
  }
  async deletecity(city_id){
     try{
        const response= await this.cityrepository.deleteCity(city_id)
        return response;
     }
     catch(error){
        console.log("Something went wrong in service layer")
        throw{error}
      
     }
  }
  async updatecity(city_id,data){
    try{
        const city =await this.cityrepository.updatecity(city_id,data)
         return city;
    }
    catch(error){

    console.log("Something went wrong in service layer")
    throw{error}
     }

  }
  async getcity(city_id){
       try{
         const city= await this.cityrepository.getcity(city_id);
         return city;
        }
      catch(error){
          console.log("Something went wrong in service layer")
            throw{error}

       }
  }

}
module.exports=CityService;