
Router.route('/', function () {
    this.render('urls');
},{
    name:'urls.all'
});

Router.route('/news/add', function () {
    this.render('urls');
},{
    name: 'urls.add'
});

Router.route('/news/:title', function () {
    this.render('newsView', {
        data: function () {
            return News.findOne({urlTitle: this.params.title});
        }
    });
},{
    name: 'news.single'
});
