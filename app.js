const url = "https://icanhazdadjoke.com/";

const btn = $(".btn");
const result = $(".result");

const fetchDadJoke = async () => {
  result.textContent = "Loading...";

  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
    success: function(res) {
      console.log(res);
      result.text(res.joke);
    },
    error: function() {
      alert("There was an error.");
    }
  });

};
btn.click(fetchDadJoke);
fetchDadJoke();
