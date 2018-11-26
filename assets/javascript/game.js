// the array for the 
let topics = ["cat", "dog", "bird"];
let input ;

//this adds the buttons on the page
topics.forEach(function(element) {
   let button = $("<button>");
    button.addClass("choices btn-small");
    button.attr("text", element);
    button.text(element);
    $(".buttons").append(button);
});

$("#submit").on("click", function(event) {
    
    event.preventDefault();

    input = $("#newTopic").val().trim();

    $("#newTopic").val("");

    topics.push(input);

    let button = $("<button>");

    button.addClass("choices btn-small");
    button.attr("text", input);
    button.text(input);
    $(".buttons").append(button);


    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=8fXgerysAnG8XcRSZByQxv0shnCkZ6Xo&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

       for (i = 0; i < 10; i ++) {

        let imageContent = $(".giphys");
        let newDiv = $("<div>")
        let rating = $("<span>");
        let image = $("<img>");
        newDiv.addClass("giphyBox col s5");
        image.addClass("images");
        image.attr("src", response.data[i].images.original_still.url);
        image.attr("id", response.data[i].id);
        rating.addClass("rating");
        rating.text(response.data[i].rating);
        newDiv.append(image);
        newDiv.append(rating);
        imageContent.prepend(newDiv);
       };

    });
});

$(".choices").on("click", function() {

    let input = this.getAttribute("text");
   
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=8fXgerysAnG8XcRSZByQxv0shnCkZ6Xo&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

       for (i = 0; i < 10; i ++) {

        let imageContent = $(".giphys");
        let newDiv = $("<div>")
        let rating = $("<span>");
        let image = $("<img>");

        newDiv.addClass("giphyBox col s5");
        image.addClass("images");
        image.attr("src", response.data[i].images.original_still.url);
        image.attr("id", response.data[i].id);
        rating.addClass("rating");
        rating.text(response.data[i].rating);
        newDiv.append(image);
        newDiv.append(rating);
        imageContent.prepend(newDiv);
       };

    });

});



$(document).on("click", ".images", function() {

    let imageId = this.getAttribute("id");
    let source = this.getAttribute("src");
   

    let queryURL = "https://api.giphy.com/v1/gifs/" + imageId + "?api_key=8fXgerysAnG8XcRSZByQxv0shnCkZ6Xo&";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        if (source !== response.data.images.original.url) {
            $("#" + imageId).attr("src", response.data.images.original.url);
        } else {
            $("#" + imageId).attr("src", response.data.images.original_still.url);

        };

    });

});
