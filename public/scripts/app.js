/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  function createTweetElement(tweetData) {
    const name = tweetData.user.name;
    const avatar = tweetData.user.avatars.small;
    const handle = tweetData.user.handle;
    const text = tweetData.content.text;
    const date = tweetData.created_at;

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

  var $tweet = createTweetElement(tweetData);
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});