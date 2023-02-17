const { validationResult } = require('express-validator');

exports.getPosts = (req, res) => {
    res.status(200).json({
        post: [{ title: 'First post', content: 'This is the first post!' }]
    });
}

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ message: 'Validation failed data is incorrect', errors: errors.array() })
    }
    const title = req.body.title;
    const content = req.body.content;
    //POST DB
    res.status(201).json({
        message: 'Post created succesfully',
        post: {
            _id: new Date().toISOString(),
            title: title,
            content,
            creator: { name: 'Miguel' },
            createdAt: new Date()
        }
    });
};