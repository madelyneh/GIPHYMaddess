// the array for the 
let topics = ["animals", "transportation", "math"];
let input ;

//this adds the buttons on the page
topics.forEach(function(element) {
   let button = $("<button>");
    button.addClass("choices");
    button.attr("text", element);
    button.text(element);
    $(".buttons").append(button);
});

$("#submit").on("click", function(event) {
    
    event.preventDefault();

    input = $("#newTopic").val().trim();

    topics.push(input);

    //fix thissss
    topics.indexOf(input)(function(element) {
        let button = $("<button>");
         button.addClass("choices");
         button.attr("text", element);
         button.text(element);
         $(".buttons").append(button);
     });




});