//to put character ID in localStorage when clicked from index page
var getChar = JSON.parse(localStorage.getItem('localCharID'));
console.log("This is the localstorage " + getChar)

// parts of API url
var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
var allChars = "?ts=1&"
var charID = "/" + getChar;
var stories = "/stories";

var charUrl = baseUrl + charID + allChars + apiKey;
var charStoriesUrl = baseUrl + charID + stories;

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

    $(".character-img").attr("src", charImg);
    $(".character-name").append(charName);

    if (charDesc == "") {
        $(".character-desc").append("No description available at this time. Check back again!");
    } else {
        $(".character-desc").append(charDesc);
    };

    for (let i = 0; i < 3; i++) {
        let charSeries = element.series.items[i].name;
        console.log(charSeries);
        let idIndex = i + 1;
        $("#series-" + idIndex).append(charSeries);
    };

    attribution.innerHTML = data.attributionHTML;
});

