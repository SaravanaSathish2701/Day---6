// 5. Print the country which use US Dollars as currency.

let request = new XMLHttpRequest();
request.open('Get', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function () {
        let data = JSON.parse(this.response);
        let  cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }