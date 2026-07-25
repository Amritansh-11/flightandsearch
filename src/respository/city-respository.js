const {City}=require('../models/index');

class CityRepository{
    async createCity({name}){
      try{
        const city = await City.create({name});
        return city;

      }
      catch(error){
        console.log("Something went wron on the repo layer");
        throw{error};
      }
     }

    async deleteCity(city_id){
       try{ await City.destroy({
            where:{
               id:city_id 
            }
        })
        return true;
    }
    catch(error){
        console.log("Something went wron on the repo layer");
        throw{error};
    }

    }

    async updateCity(city_id,data){
        try{
           const result=await City.update(data,{
            where:{
                id:city_id
            }
           })
           return result;
           
           
           
           
        }
        catch(error){
           console.log("Something went wron on the repo layer");
           throw{error};
        }


    }
    async getCity(city_id){
       try{
        const city=await City.findByPk(city_id);
        return city;

       }
       catch(error){
         console.log("Something went wron on the repo layer");
        throw{error};
       }
    }
}

module.exports= CityRepository;
























