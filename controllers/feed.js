exports.getPosts = (req, res) => {
    res.status(200).json({
        post: [{ title: 'First post', content: 'This is the first post!' }]
    });
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    //POST DB
    res.status(201).json({
        message: 'Post created succesfully',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
};