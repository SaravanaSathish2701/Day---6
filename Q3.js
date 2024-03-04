// 3. Print the following details name, capital, flag using forEach function.

let request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    let countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}