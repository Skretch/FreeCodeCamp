$("#newQBtn").click(function(){
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
      type: "GET",
      headers: {"X-Mashape-Key": "S5QqB4D7SVmsh7auFjcshydl5aZUp1N58sLjsnxHPuDFyVyDgj", "Accept": "application/json"},
      success: function(response){
        $("#quoteAuthor").text(response[0].author);
        $("#quoteText").text(response[0].quote);
        $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text=" + response[0].quote + " by " + response[0].author).attr("target", "_blank");
      }
    });
  })