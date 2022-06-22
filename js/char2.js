var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
        var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"

        var allChars = "?ts=1&"
        var charID = "/{characterId}";
        var stories = "/stories";

        var charUrl = baseUrl + allChars + apiKey;
        var charStoriesUrl = baseUrl + charID + stories;


$.getJSON(charUrl, function(data){
    console.log(data);

    var element = data.data.results;
    console.log(element);
    var charImg = element[1].thumbnail.path + "/standard_fantastic." + element[0].thumbnail.extension;
    console.log(charImg);

    var charName = element[1].name;
    var charDesc = element[1].description;

    $(".character-img").attr("src", charImg);
    $(".character-name").append(charName);
    $(".character-desc").append(charDesc);




});

$.getJSON(charStoriesUrl, function(data){
    console.log(data);
});