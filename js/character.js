var marvel = {
    render: function () {
        var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
        var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
        var allChars = "?ts=1&"
        var url = baseUrl + allChars + apiKey;

        // var url = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4";
        var message = document.getElementById('message');
        var attribution = document.getElementById('attribution');
        var charIndividual = document.getElementById('individualCharacter');
        var charDetails = document.getElementById('charDetails');
        var charExtras = document.getElementById('charExtras');

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
                var stringCharIndividual = "";
                var stringCharDetails = "";
                var stringCharExtras = "";

                for (var i = 0; i < data.data.results.length; i++) {
                    var element = data.data.results[i];
                    console.log(element);
                    // var charID = data.data.results.id;
                    // console.log(charID);
                    //    var charID = element.id;
                    //    console.log(charID);
                    // console.log(element.name);


                    //character page
                    //    console.log(element.description);
                    stringCharIndividual += "<div class='hero'>";
                    stringCharIndividual += "         <img src='" + element.thumbnail.path + "/standard_fantastic." + element.thumbnail.extension + "' />";
                    stringCharIndividual += "<h1>" + element.name + "</h1>";
                    stringCharIndividual += "</div>";

                    stringCharDetails += "<h3>description</h3>";
                    stringCharDetails += "<p>" + element.description + "</p>";
                    stringCharDetails += "<h3>Images</h3>";

                    stringCharDetails += "<h3>story</h3>";
                    //comment section
                    stringCharDetails += "<h3>comments</h3>";

                    stringCharDetails += "<form><input name='name' type='text' class='feedback-input' placeholder='Your MARVELous name'/><br><textarea name='text' class='feedback-input' placeholder='Write a MARVELous comment'></textarea><br><input class='comment-button' type='submit' value='SUBMIT'/></form>";





                    ///story section
                    stringCharDetails += "<h3>story</h3>";

                    stringCharExtras += "<h4>latest news</h4>";
                    stringCharExtras += "            <h4>Related Characters</h4>";
                    stringCharExtras += "<h4>Series</h4>";

                }


                charIndividual.innerHTML = stringCharIndividual;
                charDetails.innerHTML = stringCharDetails;
                charExtras.innerHTML = stringCharExtras
            },
            error: function () {
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