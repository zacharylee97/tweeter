function createTweetElement(tweetData) {
  //Save required data from tweetData
  const name = tweetData.user.name;
  const avatar = tweetData.user.avatars.small;
  const handle = tweetData.user.handle;
  const text = tweetData.content.text;
  const created = new Date(tweetData.created_at);
  const date = created.toString();

  //Create Tweet element using jQuery
  const $tweet = $("<article>").addClass("tweet");

  const $tweetHeader = $("<header>").addClass("tweetHeader");
  const $avatar = $("<img>").addClass("avatar").attr("src", avatar);
  const $username = $("<p>").addClass("username").text(name);
  const $handle = $("<p>").addClass("handle").text(handle);
  $tweetHeader.append($avatar, $username, $handle);

  const $text = $("<p>").addClass("text").text(text);

  const $footer = $("<footer>").addClass("footer");
  const $date = $("<p>").addClass("date").text(date);
  const $icons = $("<div>").addClass("icons");
  const $flag = $("<i>").addClass("fas fa-flag");
  const $retweet = $("<i>").addClass("fas fa-retweet");
  const $heart = $("<i>").addClass("fas fa-heart");
  $icons.append($flag, $retweet, $heart);
  $footer.append($date, $icons);

  $tweet.append($tweetHeader, $text, $footer);

  return $tweet;
}

function renderTweet(tweet) {
  // calls createTweetElement for each tweet
  var $tweet = createTweetElement(tweet);
  // takes return value and appends it to the tweets container
  $('#tweets-container').prepend($tweet);
}

function newTweet() {
  //Validate tweet length
   let text = ($("#text").val());
   if (text === "") {
      alert("Please enter your tweet!");
  } else if (text.length > 140) {
    alert("Tweet is too long!");
  } else {
      let str = $("#target").serialize();
      $.post("/tweets", str, function(data){
        $("#target").trigger("reset");
        $(".counter").text(140);
        $.get("/tweets", function(data){
          let tweet = renderTweet(data[0]);
        });
      });
    }
  }