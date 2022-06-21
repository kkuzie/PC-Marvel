// function getCharacter() {
//     fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     }
// getCharacter();

var marvel = {
    render: function() {
        var url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4";
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
                    console.log(element.name);

                    string += "<main class='grid'>";
                    string += "     <a href='" + element.urls[0].url+ "' target='_blank'>"
                    string += "         <img src='" + element.thumbnail.path +"/portrait_fantastic." + element.thumbnail.extension + "' />";
                    string += "     </a>";
                    string += "     <h3>" +element.name + "</h3>";
                    string += "</main>";

                    if((i+1) % 5 == 0) {
                        string += "</main>";
                        // string += "<div class='row'>";
                    }
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