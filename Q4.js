// 4. Print the total population of countries using reduce function 


let request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    let countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}