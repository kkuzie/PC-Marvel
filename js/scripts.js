var currentOffset;

var marvel = {
    render: function (pageOffSet, grep) {
        console.log("This is the value of grep " + grep);
        if ((pageOffSet > 1) && (grep == "")) {
            var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            var offset = "?offset=" + pageOffSet;
            var allChars = "&ts=1&"
            var url = baseUrl + offset + allChars + apiKey;
            console.log("This is the data offset one " + url);

        } else if (grep != undefined) {
            var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            var allChars = "&ts=1&"
            var search = "?nameStartsWith=" + grep;
            var url = baseUrl + search + allChars + apiKey;
            console.log("This is the grep one " + url);

        } else {
            console.log("all characters if Statement");
            var baseUrl = "https://gateway.marvel.com:443/v1/public/characters"
            var apiKey = "apikey=d9758292826793baa47319d440b91d8a&hash=0137b844f3396fccaf1be6229cf376e4"
            var allChars = "?ts=1&"
            var url = baseUrl + allChars + apiKey;
        }
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
                
                let string = "";
                currentOffset = data.data.offset;
                console.log("This is the current offset " + currentOffset);
                for (let i = 0; i < data.data.results.length; i++) {
                    let element = data.data.results[i];
                    let charID = element.id;
                    console.log(charID);
                    console.log(typeof (charID))

                    string += "<div id=" + charID + " class='test' " + ">";
                    string += "         <img src='" + element.thumbnail.path + "/portrait_fantastic." + element.thumbnail.extension + "' />";
                    string += "     </a>";
                    string += "     <h4>" + element.name + "</h4>";
                    string += "</div>";

                    string += "</div>";

                    attribution.innerHTML = data.attributionHTML;

                }
                marvelCharacterContainer.innerHTML = string;
            },
            error: function () {
                message.innerHTML = "Oops, something went awry!";
            }
        }); //closes ajax
    } //closes render
}; //closes marvel

// window.onload = function(){
marvel.render();
// }

console.log("out of function")

//grabbing charID - send to localStorage
const onClick = (e) => {
    console.log(e.srcElement.parentNode.id + "Source Element");
    charSelect = e.srcElement.parentNode.id;
    console.log(charSelect);

    if (isNaN(charSelect) || charSelect == "") {
        console.log("Not a character ID")
    } else {
        console.log("Yep you selected a character")
        console.log("I will render character now")
        localStorage.setItem("localCharID", JSON.stringify(charSelect));
        window.location = 'char2.html';
    }
}
window.addEventListener('click', onClick);

// load/back buttons
$('.load-more-button').on('click', function () {
    var pageOffSet = 20 + currentOffset;
    marvel.render(pageOffSet);
});

$('.load-back-button').on('click', function () {
    var pageOffSet = currentOffset - 20;
    marvel.render(pageOffSet);
});

//search box
$('#grep').on('click', function () {
    console.log("I am working")
    let searchBox = document.getElementById('searchBox').value;
    var pageOffSet = 0;
    console.log("This is the listener for grep " + searchBox)
    marvel.render(pageOffSet, searchBox);
});