let posts = [{post: 'peach', likes: 0, id: 0 }, {post: 'penguins', likes: 0, id:1 }]
let id = 2

module.exports = {
    create: (req, res) => {
        req.body.id = id
        posts.push(req.body)
        id++
        res.status(200).send(posts)
    },

    read: (req, res) => {
        res.status(200).send(posts)
    },

    update: (req, res) => {
        for(let i = 0; i < posts.length; i++) {
            if(posts[i].id === +req.params.id) {
                posts[i] = req.body || posts[i].post
                return res.status(200).send(posts)
            }
        }
    },

    delete: (req, res) => {
        for(let i = 0; i < posts.length; i++) {
            if(posts[i].id === +req.params.id) {
                posts.splice(i, 1)
                return res.status(200).send(posts)
            }
        }
    }

}