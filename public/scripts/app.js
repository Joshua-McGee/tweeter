$(document).ready(function () {

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  //loops through all our tweets and appends them to the html element with the id(#tweets-container)
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      // takes return value (from createTweetElement) and appends it to the tweets container
      $('#tweets-container').append(createTweetElement(tweet));
    };
  }

  // this function is used to create our html elements and returns a article with all the info appended
  const createTweetElement = function(tweet) {
    
    // takes tweet object and returns tweet article
    const avatarImg = $("<img>").attr("src", `${tweet.user.avatars}`).addClass("header-img");
    const name = $("<p>").text(`${tweet.user.name}`).addClass("name");
    const handleText = $("<p>").text(`${tweet.user.handle}`).addClass("handler-text");
    const tweetText = $("<p>").text(`${tweet.content.text}`).addClass("main-text");

    // append content to the header tag
    const headerTag = $("<header>")
      .append(avatarImg)
      .append(name)
      .append(handleText)
      .append(tweetText);

    // creates our div
    const divLine = $("<div>").addClass("footer-line");

    const timeCreated = $("<p>").text(`${tweet.created_at}`).addClass("date-time");
    const retweetIcon = $("<img>").attr("src", "/images/retweet.png").addClass("icons");
    const flagIcon = $("<img>").attr("src", "/images/flag.png").addClass("icons");
    const heartIcon = $("<img>").attr("src", "/images/heart.png").addClass("icons");
    // append icons to the icon div that holds them
    const iconDiv = $("<div>").addClass("icon-div")
      .append(retweetIcon)
      .append(flagIcon)
      .append(heartIcon);

    // append content to the footer tag
    const footerTag = $("<footer>")
      .append(timeCreated)
      .append(iconDiv);

    //the final tweetbox that everything above is appended too
    const $tweet = $("<article>").addClass("tweetbox")
      .append(headerTag)
      .append(divLine)
      .append(footerTag);

    return $tweet;
  };
  // need to call the function with data passed into it
  renderTweets(data);

});

