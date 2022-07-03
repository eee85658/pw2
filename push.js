var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF2A-d7MXSZ-hQrHOZuP-1iRAP_4BVzusvp6wHg-_ZogN2T7-QCeAWjjubk9VK2aH04DZsNMSCtNDgWMy-ruL2k',
    privateKey: 'L3GiS97nxalBULOX7dD42a0QeLYg5XzabdT3gy5WLdc'
  }

push.setVapidDetails('mailto:test@code.co.tw', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')