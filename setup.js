
// ON STARTUP

Meteor.startup(function() {
    IframelyOembed.setTemplate('customWidget');
    IframelyOembed.setEndpoint('http://open.iframe.ly/api/oembed');
    IframelyOembed.setCacheOptions({
        cacheTTL: 1000 * 60 * 60, // Hour.
        cacheErrorTTL: 1000 * 60, // Minute.
        cacheEnabled: true
    });
});

// METHODS
Meteor.methods({
    addNews: function (title,value,description,videourl) {
        News.insert({
            title: title,
            url: value,
            description:description,
            videourl:videourl,
            urlTitle:title.replace(/\s/g,'-'),
            dateAdded:new Date()
        });
    }
});



Meteor.methods({
    addVideos: function (value) {
        Urls.insert({
            url: value,
            created_at: new Date()
        });
    }
});


// COLLECTIONS

Urls = new Mongo.Collection("urls");

News = new Mongo.Collection("news");

