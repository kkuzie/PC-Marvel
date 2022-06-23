//to put character ID in localStorage when clicked from index page
var getChar = JSON.parse(localStorage.getItem('localCharID'));
console.log("This is the localstorage " + getChar)

// parts of API url
var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
var allChars = "?ts=1&"
var charID = "/" + getChar;
var stories = "/stories";
var comics = "/comics";

var charUrl = baseUrl + charID + allChars + apiKey;

var charStoriesUrl = baseUrl + charID + stories;
var charComicsUrl = baseUrl + charID + comics + allChars + apiKey;

$.getJSON(charUrl, function (data) {
    console.log(data);


    let element = data.data.results[0];
    console.log(element);

    let charImg = element.thumbnail.path + "/standard_fantastic." + element.thumbnail.extension;
    console.log(charImg);

    let charName = element.name;
    let charDesc = element.description;
    let charStory = element.stories.items[0].resourceURI;
    console.log(charStory);

    let attribution = document.getElementById('attribution');
    attribution.innerHTML = data.attributionHTML;

    $(".character-img").attr("src", charImg);
    $(".character-name").append(charName);

    if (charDesc == "") {
        $(".character-desc").append("No description available at this time. Check back again!");
    } else {
        $(".character-desc").append(charDesc);
    };

    for (let i = 0; i < 10; i++) {
        let charSeries = element.series.items[i];
        // let charSeriesName = charSeries + ".name";
        console.log("this is charSeries "+charSeries);
        if (charSeries == undefined) {
            console.log("No more series")
            console.log("too many in series");
        } else {

            let charSeriesName = charSeries.name;
            var list = document.getElementById('charSeriesList');
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(charSeriesName));
            list.appendChild(entry);
        };

    };

});


