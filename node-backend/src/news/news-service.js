"use strict"
const CONSTANTS = require("../../CONSTANTS");
const appConfig = require("../config/appConfig");
let axios = require("axios")
module.exports = {
  getNews: getNews
}

async function getNews(params) {
  return new Promise((resolve, reject) => {
    let queryString = `?q=None&lang=en&country=in&max=10`;
    if(params.searchKey){
      queryString+=`&q=${params.searchKey}`
    }
    if(params.category){
      queryString += `&category=${params.category}`
    }

    if(params.title){
      queryString+=`&in=title`
    }
   
    if(params.country){
      if(CONSTANTS.countryCode.indexOf(params.countryCode)<0){
        return resolve({message:"Country Code not valid"})
      }
      queryString+=`&country=${params.countryCode}`
    }
    let url = `${appConfig.get("serverConfig").baseApi}?${queryString}&apikey=${appConfig.get("serverConfig").apikey}`;
    axios.get(url)
      .then(function (response) {
        if(response.status == 200){
          return resolve(response.data);
        }else{
          return reject(response.statusText);
        }
        
      }) .catch((err)=>{
        reject(err);
      })
  })

}
