<script>
    // What is the point of variables?

    // we could do this
    console.log("I am from Spain.");
    console.log("Spain is a beautiful contry.");
    console.log("Jesse is going to visit Spain next month.");

    // but we need usability
    var country = "Portugal";
    console.log(country);

    // Now we can easily change the country name
    console.log(`I am from ${country}.`);
    console.log(`${country} is a beautiful contry.`);
    console.log(`Jesse is going to visit ${country} next month.`);

    // What are datatypes?
    var country = "France";      // string
    var population = 80000000;   // integer
    var averageFamilySize = 2.5; // float
    var inEurope = true;         // boolean
    var landLocked = false;      // boolean
    var countryInfo = ["France", 80000000, 2.5, true, false];   // array

countryInfo.forEach(function(item, index, array) {
  console.log(item, index);
});

console.log(
	`${countryInfo[0]} is a country with an estimated population of ${countryInfo[1]}. The average household
	consists of ${countryInfo[2]} people.`
);

    var countryOne = {name:"France", population:80000000, avgHousehold:2.5, inEurope:true, landLocked:false};
    var countryTwo = {name:"England", population:20000000, avgHousehold:2.2, inEurope:true, landLocked:false};
    var countryThree = {name:"Japan", population:100000000, avgHousehold:1.9, inEurope:false, landLocked:false};

    /*
    console.log(
	    `${countryOne.name} is a country with an estimated population of ${countryOne.population}. The average household
	    consists of ${countryOne.avgHousehold} people.`
    );

    console.log(
	    `${countryTwo.name} is a country with an estimated population of ${countryTwo.population}. The average household
	    consists of ${countryTwo.avgHousehold} people.`
    );

    console.log(
	    `${countryThree.name} is a country with an estimated population of ${countryThree.population}. The average household
	    consists of ${countryThree.avgHousehold} people.`
    );
    */

    function displayCountryInformation(countryInfo) {
        console.log(
	        `${countryInfo.name} is a country with an estimated population of ${countryInfo.population}. The average household
	        consists of ${countryInfo.avgHousehold} people.`
        );
    }

    displayCountryInformation(countryOne);
    displayCountryInformation(countryTwo);
    displayCountryInformation(countryThree);

    // if we want to add a new country
    var countryFour = {name:"Mexico", population:120000000, avgHousehold:3.1, inEurope:false, landLocked:false};
    displayCountryInformation(countryFour);

    // show how easy adding 'in europe' to print is with functions

    var countryData = {
        "France": {
            population:80000000,
            avgHousehold:2.5,
            inEurope:true,
            landLocked:false
            },
        "England": {
            population:20000000,
            avgHousehold:2.2,
            inEurope:true,
            landLocked:false
        },
        "Japan": {
            population: 100000000,
            avgHousehold:1.9,
            inEurope:false,
            landLocked:false
        }
    }

    function displayCountryInformationAdvanced(countryName, countryInfo) {
        console.log("Advanced");
        console.log(
	        `${countryName} is a country with an estimated population of ${countryInfo.population}. The average household
	        consists of ${countryInfo.avgHousehold} people.`
        );
    }

    // loop over country data and run displayCountryInformation()
    for (country in countryData) {
       displayCountryInformationAdvanced(country, countryData[country]);
    }

</script>


























