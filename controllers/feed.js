exports.getPosts = (req, res) => {
    res.status(200).json({
        post: [{ title: 'First post', content: 'This is the first post!' }]
    });
}

