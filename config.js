module.exports = {

  kmsEncryptedHookUrl: "", // encrypted slack webhook url
  unencryptedHookUrl: "https://hooks.slack.com/services/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", // unencrypted slack webhook url
  slackChannel: "#test",  // slack channel to send a message to
  slackUsername: "AWS SNS via Lamda", // slack username to user for messages
  region: "us-east-1", // default region for links in services that dont include region in sns
  icon_emoji: ":aws_emoji:", // slack emoji icon to use for messages
  orgIcon: "https://kangaroobox.com/assets/images/logo.png", // url to icon for your organization for display in the footer of messages
  orgName: "DerbyWars", // name of your organization for display in the footer of messages
  services: {
    elasticbeanstalk: {
      match_text: "ElasticBeanstalkNotifications" // text in the sns message or topicname to match on to process this service type
    },
    cloudwatch: {
      match_text: "CloudWatchNotifications" // text in the sns message or topicname to match on to process this service type
    },
    codedeploy: {
      match_text: "CodeDeploy" // text in the sns message or topicname to match on to process this service type
    },
    elasticache: {
      match_text: "ElastiCache" // text in the sns message or topicname to match on to process this service type
    },
    autoscaling: {
      match_text: "AutoScaling" // text in the sns message or topicname to match on to process this service type
    }
  }

}
