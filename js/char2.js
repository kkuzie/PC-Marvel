var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"

var getChar = JSON.parse(localStorage.getItem('localCharID'));
console.log("This is the localstorage "+ getChar)
var allChars = "?ts=1&"
var charID = "/"+getChar;
var stories = "/stories";

var charUrl = baseUrl + charID + allChars + apiKey;
var charStoriesUrl = baseUrl + charID + stories;

var attribution = document.getElementById('attribution');

$.getJSON(charUrl, function (data) {
    console.log(data);

    var element = data.data.results[0];
    console.log(element);

    var charImg = element.thumbnail.path + "/standard_fantastic." + element.thumbnail.extension;
    console.log(charImg);

    var charName = element.name;
    var charDesc = element.description;
    var charStory = element.stories.items[0].resourceURI;
    console.log(charStory);

    $(".character-img").attr("src", charImg);
    $(".character-name").append(charName);

    if (charDesc == "") {
        $(".character-desc").append("No description available at this time. Check back again!");
    } else {
        $(".character-desc").append(charDesc);
    };

    for(var i=0; i<3 ;i++) {
    var charSeries = element.series.items[i].name;
    console.log(charSeries);
    var idIndex = i +1;
    $("#series-"+idIndex).append(charSeries);
    // $("#series-"+([i]+1)).append(charSeries);

    };

    attribution.innerHTML = data.attributionHTML;
});

// $.getJSON(charStoriesUrl, function (data) {
//     console.log(data);
// });