// function getCharacter() {
//     fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     }
// getCharacter();
// var count;
var marvel = {
    render: function() {
        var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
        var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
        var allChars = "?ts=1&"
        var url  = baseUrl+allChars+apiKey;

        // var url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4";
        var message = document.getElementById('message');
        var attribution = document.getElementById('attribution');
        var marvelCharacterContainer = document.getElementById('marvel-characterContainer');

        $.ajax({
            url: url,
            type: "GET",
            beforeSend: function() {
                message.innerHTML = "Loading...";
            },
            complete: function() {
                message.innerHTML = "Yup, fully loaded!"
            },
            success: function(data) {
                attribution.innerHTML = data.attributionHTML;
                var string = "";
                // string += "<div class='row'>";

                for(var i=0; i<data.data.results.length; i++) {
                    var element = data.data.results[i];
                    var charID = element.id;
                    console.log(charID);

                    console.log(element.name);

                    string += "<div id=" + '"charID"' + ">";
                    string += "     <a href='" + element.urls[0].url+ "' target='_blank'>"
                    string += "         <img src='" + element.thumbnail.path +"/portrait_fantastic." + element.thumbnail.extension + "' />";
                    string += "     </a>";
                    string += "     <h3>" +element.name + "</h3>";
                    string += "</div>";

                    if((i+1) % 5 == 0) {
                        string += "</div>";
                        // string += "<div class='row'>";
                    }
                    $('.load-more-button').on('click', function() {
                        count ++;
                    });
                }

                marvelCharacterContainer.innerHTML = string;
            },
            error: function() {
                message.innerHTML = "Oops, something went awry!";
            }
        });
    }
};
marvel.render();

// $('.load-more-button').on('click', function() {
//     data.count ++;
//     marvel.render();
//   });