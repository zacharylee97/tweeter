/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {

  function loadTweets() {
    $.get("/tweets", function(data){
      renderTweets(data);
    });
  }

  loadTweets();

  function renderTweets(tweets) {
    // loops through tweets
    tweets.forEach(function(element){
      // calls createTweetElement for each tweet
      var $tweet = createTweetElement(element);

      // takes return value and appends it to the tweets container
      $('#tweets-container').append($tweet);
    });
  }

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
});