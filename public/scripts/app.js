$(document).ready(function () {

  //change this if you want shorter or longer tweets
  const maxTweetLength = 140;

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

  // Fetches the tweets from the server, and updates the page
  const loadTweets = function() {
    $.ajax({ url: '/tweets' })
      .then(tweets => {
        // emptys my tweets
        $('#tweets-container').empty(); 
        // calls renderTweets to append them all to the page
        renderTweets(tweets);
      }, err => {
        console.log('DID NOT WORK', err);
        alert('Something went wrong :( ...' + err.statusText);
      })
  };

  // function thats used to alert an error on empty string
  const errorCreate = function (err) {
    alert('Why you no enter anything?');
  }

  // HIJACK THE FORM FOR AJAX POST
  const form = $('.new-tweet-form');
  form.on('submit', (evt) => {
    //keeps the button from refreshing the page
    evt.preventDefault();
    // this condition checks the length of our forms input and if its too long sends an alert and returns
    if ($("#a-tweet").val().length > maxTweetLength) {
      alert('Too long server didnt read');
      return;
    }
    // passes the form data and posts it to our server
    $.ajax({
      url: '/tweets/',
      type: 'POST',
      data: $(evt.target).serialize()
    })
    // the catch (errorCreate) is auto called when data is passed an empty string
    .then(loadTweets, errorCreate)
  });

  // need to call the function
  loadTweets();

});
