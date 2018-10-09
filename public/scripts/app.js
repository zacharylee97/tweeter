/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

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

  renderTweets(data);
});