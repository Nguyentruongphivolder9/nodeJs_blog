class SiteController {
    home(req, res) {
        res.render('news');
    }

    // GET /news/:slug
    search(req, res) {
        res.send('Search');
    }
}

module.exports = new SiteController();
