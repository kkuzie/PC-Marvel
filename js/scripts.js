// function getCharacter() {
//     fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     }
// getCharacter();
// var count;
var currentOffset;
var marvel = {
    render: function (pageOffSet, grep) {
        console.log ("This is the value of grep "+grep);
        if((pageOffSet > 1 ) && (grep =="")){
            // var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            // var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            // var allChars = "?ts=1&"
            // var url = baseUrl + allChars + apiKey;
            var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            var offset = "?offset="+pageOffSet;
            var allChars = "&ts=1&"
            var url = baseUrl + offset + allChars + apiKey;
            console.log("This is the data offset one "+ url);

    
        } else if (grep != undefined){
            var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            var allChars = "&ts=1&"
            var search = "?nameStartsWith="+grep;
            var url = baseUrl + search +allChars + apiKey;
            console.log("This is the grep one "+url);

        }else{
            console.log("all characters if Statement");
             var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            var allChars = "?ts=1&"
            var url = baseUrl + allChars + apiKey;
            // var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            // var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            // var offset = "?offset="+pageOffSet;
            // var allChars = "&ts=1&"
            // var url = baseUrl + offset + allChars + apiKey;
            // console.log("This is the data offset one "+ url);
    
        }
        // var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
        // var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
        // var allChars = "?ts=1&"
        // var url = baseUrl + allChars + apiKey;

        // var url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4";
        var message = document.getElementById('message');
        var attribution = document.getElementById('attribution');
        var marvelCharacterContainer = document.getElementById('marvel-characterContainer');

        $.ajax({
            url: url,
            type: "GET",
            beforeSend: function () {
                message.innerHTML = "Loading...";
            },
            complete: function () {
                message.innerHTML = "Yup, fully loaded!"
            },
            success: function (data) {
                attribution.innerHTML = data.attributionHTML;
                var string = "";
                // string += "<div class='row'>";
                 currentOffset = data.data.offset;
                console.log("This is the current offset "+currentOffset);
                for (var i = 0; i < data.data.results.length; i++) {
                    var element = data.data.results[i];
                    var charID = element.id;
                    console.log(charID);
                    console.log(typeof (charID))

                    console.log(element.name);

                    string += "<div id=" + charID + " class='test' " + ">";
                    // string += "     <a href='" + element.urls[0].url+ "' target='_blank'>"
                    string += "         <img src='" + element.thumbnail.path + "/portrait_fantastic." + element.thumbnail.extension + "' />";
                    string += "     </a>";
                    string += "     <h4>" + element.name + "</h4>";
                    string += "</div>";

                    // if((i+1) % 5 == 0) {
                    string += "</div>";
                    // string += "<div class='row'>";
                    // }
                    // $('.load-more-button').on('click', function () {
                    //     count++;
                    // });
                }

                marvelCharacterContainer.innerHTML = string;
            },
            error: function () {
                message.innerHTML = "Oops, something went awry!";
            }
        });//closes ajax

    }//closes render

};//closes marvel
// window.onload = function(){
    marvel.render();
// }

// var character = {
//     render: 
// function char2 (charSelect) {
//         console.log("IN the character render")
        // var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
        // var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"

        // var allChars = "?ts=1&"
        // var charID = "/" + charSelect;
        // var stories = "/stories";

        // var charUrl = baseUrl + charID + allChars + apiKey;
        // console.log(charUrl)
        // // var charStoriesUrl = baseUrl + charID + stories;

        // var attribution = document.getElementById('attribution');


        // $.getJSON(charUrl, function (data) {
        //     console.log(data + "This should be data");

        //     var element = data.data.results;
        //     console.log(element);

        //     var charImg = element.thumbnail.path + "/standard_fantastic." + element.thumbnail.extension;
        //     console.log(charImg);

        //     var charName = element.name;
        //     var charDesc = element.description;
        //     var charStory = element.stories.items[0].resourceURI;
        //     console.log(charStory);

        //     $(".character-img").attr("src", charImg);
        //     $(".character-name").append(charName);

        //     if (charDesc == "") {
        //         $(".character-desc").append("No description available at this time. Check back again!");
        //     } else {
        //         $(".character-desc").append(charDesc);
        //     };

        //     for (var i = 0; i < element.series.items.length; i++) {
        //         var charSeries = element.series.items[i].name;
        //         console.log(charSeries);
        //         $("#series-1").append(charSeries);
        //         $("#series-2").append(charSeries);

        //     };

        //     attribution.innerHTML = data.attributionHTML;
        // });

    // }
// }

// if (document.querySelector('#charPg') == null) {
//     marvel.render();
// }




console.log("out of function")

// $(document).ready(function() {
// $('div').click(function(e){
//     alert(e.target.attr());
//     console.log(e.srcElement.id);
//     // console.log(e.target.id);
//     // console.log($('div').attr('id'));
//     // console.log('div was clicked');
// });
// });
const onClick = (e) => {
    console.log(e.srcElement.parentNode.id + "Source Element");
    charSelect = e.srcElement.parentNode.id;
    console.log(charSelect);

    if (isNaN(charSelect) || charSelect == "") {
        console.log("Not a character ID")
    } else {
        console.log("Yep you selected a character")
        console.log("I will render charater now")
        localStorage.setItem("localCharID",JSON.stringify(charSelect));
        window.location = 'char2.html';
        // char2(charSelect);

    }

}
window.addEventListener('click', onClick);








$('.load-more-button').on('click', function() {
    var pageOffSet = 20 + currentOffset;
        marvel.render(pageOffSet);
  });

  $('.load-back-button').on('click', function() {
    var pageOffSet = currentOffset - 20;
        marvel.render(pageOffSet);
  });

  $('#grep').on('click', function() {
      console.log("I am working")
    var searchBox = document.getElementById('searchBox').value;
    var pageOffSet = 0;
    console.log("This is the listener for grep "+ searchBox)
        marvel.render(pageOffSet, searchBox);
  });