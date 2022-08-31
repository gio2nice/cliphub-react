router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/home');
        return;
    }

    res.render('login', { logged_in: false });
});