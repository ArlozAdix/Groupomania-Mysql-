const Post = require('../models/post');

exports.getAll = (req, res) =>{
    Post.findAll()
    .then(product => {
        res.status(200).json(product)
    })
}

exports.getOne = (req, res) =>{
    const {id} = req.params
    Post.findByPk(id)
    .then(product =>{
        if(!product) return res.status(404).json({msg : "Not Found"})
        res.status(200).json(product)
    })
    .catch(error => res.status(500).json(error))
}

exports.createOne = (req, res) =>{
    const {body} = req

    Post.create({...body
        // , 
        // image : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    .then(() =>{
        res.status(201).json({msg: "Created post"})
    })
    .catch(error => res.status(500).json(error))
    
}

exports.updateOne = (req, res) =>{
    const {id} = req.params
    const {body} = req;

    Post.findByPk(id)
    .then(product =>{
        if(!product) return res.status(404).json({msg : "Not Found"})
        // Inserer les possibilites de modification
        product.title = body.title
        product.save()
        .then(() => res.status(201).json({msg : "Updated post"}))
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json(error))
}

exports.deleteOne = (req, res) =>{
    const {id} = req.params

    Post.destroy({where : {id : id}})
    .then(suppLine => {
        if (suppLine === 0) return res.status(404).json({msg : "Not Found"})
        res.status(200).json({msg : "Deleted post"})
    })
    .catch(error => res.status(500).json(error))
}

exports.likePost = (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const user = body.userId;
    // Post.findByPk(id)
    // .then(post => {
    //     if (body.like == 1 && !post.usersLiked.includes(user)) {
    //         post.like++;
    //         post.usersLiked.push(body.userId);
    //         post.save();
    //     }
    //     if (req.body.like == -1 && !post.usersDisliked.includes(user)) {
    //         post.dislike++;
    //         post.usersDisliked.push(req.body.userId);
    //         post.save();
    //     }
    //     if (req.body.like == 0) {
    //         if (post.usersLiked.indexOf(req.body.userId) != -1) {
    //             post.like--;
    //             post.usersLiked.splice(post.usersLiked.indexOf(req.body.userId), 1);
    //         }
    //         if (post.usersDisliked.indexOf(req.body.userId) != -1) {
    //             post.dislike--;
    //             post.usersDisliked.splice(post.usersDisliked.indexOf(req.body.userId), 1);
    //         }
    //         post.save();
    //     }
    //     res.status(200).json({message: 'Changement like pris en compte'})
    // })
    // .catch( error => {
    //     res.status(500).json({ error });
    // });
 };
