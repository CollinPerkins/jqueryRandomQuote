$(document).ready(function() {
  getQuote();
});

var quoteObj = {
  quote: "",
  quoteAuthor: ""
}

$('.newQuote').click(function() {
  getQuote();
});

function getQuote() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&lang=en&format=jsonp&jsonp=?",
      success: function( response ) {
        quoteObj.quote = response.quoteText;
        quoteObj.quoteAuthor = response.quoteAuthor;
        insertHtml();
      }
  });
};

function insertHtml(){
  $('.quote').html(quoteObj.quote);
  $('.quoteAuthor').html("-" + quoteObj.quoteAuthor);
  $('.twitterBtn').attr('href','https://twitter.com/intent/tweet?text=' + quoteObj.quote + '-' +  quoteObj.quoteAuthor );
};
