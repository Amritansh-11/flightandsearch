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
        const city =await this.cityrepository.updateCity(city_id,data)
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
   
  async getAllcity(filter){
    try{
      const cities =await this.cityrepository.getAllcity({name:filter.name});
      return cities;
    }
    catch(error){
      console.log("Something went wrong in the service layer")
      throw {error}
    }
  }
  async createMultipleCities(data) {
    try {
        const cities = await this.cityrepository.createMultipleCities(data);
        return cities;
    }
    catch (error) {
        console.log("Something went wrong in service layer");
        throw { error };
    }
}
async getAirportsByCity(city_id) {
    try {
        const city = await this.cityrepository.getAirportsByCity(city_id);
        return city;
    }
    catch (error) {
        console.log("Something went wrong in service layer");
        throw { error };
    }
}

}

module.exports=CityService;