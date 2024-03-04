// 2. Get all the countries with population of less than 2 lacs using Filter function


let  request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    let countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}