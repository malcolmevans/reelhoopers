
var urlRe = /^https?:\/\/[^ \/,"]+\/[^ ,"]+$/i;


// HELPERS
Template.urls.helpers({
    items: function () {
        return Urls.find({}, {
            limit: 3,
            sort: {
                created_at: -1
            }
        });
    },
    news: function () {
        return News.find({},{sort: {dateAdded: -1}});
    }
});


// EVENTS    
Template.urls.events({
    "submit .addVideosForm2": function (e) {
        //if (e.which === 13) {
            var value = String(e.target.videourl.value || "");
            if (value && value.match(urlRe)) {
                e.target.videourl.value = '';

                Meteor.call('addVideos',videotitle,videodescription,value);
            }
        //}
    }
});
                // Test replace.
/*
                var last = Urls.findOne({}, {
                    sort: {
                        created_at: -1,
                        limit: 1
                    }
                });

                if (last) {
                    Urls.update(last._id, {
                        $set: {
                            url: value
                        }
                    })
                } else {
                    Urls.insert({
                        created_at: new Date(),
                        url: value
                    });
                }
                */

            



    Template.urls.events({
       'submit .addVideosForm':function(e){

           var title= e.target.title.value;

           var value = String(e.target.value || "");
           
           var description= e.target.description.value;

           var videourl= e.target.videourl.value;

           if(!title || !url){
               return false;
           }

           Meteor.call('addNews',title,value,description,videourl);

           Router.go('news.all');

           return false;
       }
    });


   /*
       Template.addNews.events({
       'submit .addNewsForm':function(e){

           var title= e.target.title.value;

           var url= e.target.url.value;
           var description= e.target.description.value;

           if(!title || !url){
               return false;
           }

           Meteor.call('addNews',title,url,description);

           Router.go('news.all');

           return false;
       }
    }); 
    */ 