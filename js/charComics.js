//to put character ID in localStorage when clicked from index page
var getChar = JSON.parse(localStorage.getItem('localCharID'));
console.log("This is the localstorage " + getChar)

// parts of API url
var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
var allChars = "?ts=1&"
var charID = "/" + getChar;
var comics = "/comics";
var stories = "/stories";

var charComicsUrl = baseUrl + charID + comics + allChars + apiKey;
console.log(charComicsUrl);

        $.getJSON(charComicsUrl, function (data) {
            console.log(data);

            for (i = 0; i < 4; i++) {
                let element = data.data.results[i];
                console.log(element);
                let charImg = element.thumbnail.path + "/standard_fantastic." + element.thumbnail.extension;
                $(".charImg-" + [i]).attr("src", charImg);

            }
        });

