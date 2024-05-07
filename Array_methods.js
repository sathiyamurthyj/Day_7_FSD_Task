// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.onload = (()=>{
    if(xhr.status != 200){
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
        var responseArray = JSON.parse(xhr.responseText);
        // console.log(responseArray);

        // Get all the countries from Asia continent /region using Filter method
        let countriesInAsia = responseArray.filter((obj) => obj.region === "Asia");
        console.log(countriesInAsia);

        // Get all the countries with a population of less than 2 lakhs using Filter method
        let popLess2lakhs = responseArray.filter((obj) => obj.population < 200000);
        console.log(popLess2lakhs);

        // Print the following details name, capital, flag, using forEach method
        responseArray.forEach(element => {
            console.log(`Name: ${element.name.common}, capital: ${element.capital} and flag: ${element.flag}`);            
        });

        // Print the total population of countries using reduce method
        let totalPop = responseArray.reduce((acc, item) => acc+item.population, 0);
        console.log(`Total Population is ${totalPop}`);



        // Print the country that uses US dollars as currency.

        let countriesUSD = responseArray.filter((item) => item?.currencies?.USD).map((val) => val.name.common);
        console.log(`${countriesUSD.length} countries are using US Dollars and they are ${countriesUSD}.`);    }
});

xhr.send();

