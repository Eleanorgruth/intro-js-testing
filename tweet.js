class Tweet {
  constructor(sender, content, link) {
    this.sender = sender;
    this.content = content;
    this.link = link || 'no link provided';
    // this does the same thing as the conditional
        // if (this.link === undefined) {
        //   this.link = 'no link provided'
        // }
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
  }
  like() {
    this.likes ++
  }
  retweet() {
    this.retweets ++
  }
  reply(replyText) {
    this.replies.push(replyText)
    this.replyCount ++
  }

}


module.exports = Tweet;
