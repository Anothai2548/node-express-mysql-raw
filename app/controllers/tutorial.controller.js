const Tutorial = require("../module/tutorial.module.js")

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({massage: "Centent can't be empty!"})
    }

    const tutorial = new Tutorial({

        title: req.body.title,
        description: req.body.description,
        published: req.body.published || false
    })

    Tutorial.create(tutorial, (err, data) => {

        if(err) {
            res.status(500).send({massage: err.massage || "Somme error occureed"})
        } else {
            res.send(data)
        }

    })
}

exports.findAll = (req, res) => {
    const title = req.query.title

    Tutorial.getAll(title, (err, data) => {

        if(err){
            res.status(500).send({massage: err.massage || "Some error occurred"})
        } else { 
            res.send(data)
        }
    })
}

exports.findAllPublished = (req, res) => {
    Tutorial.getAllPublished((err, data) => {

        if(err) {
            res.status(500).send({massage: err.massage || "Some error occured"})
        } else {
            res.send(data)
        }
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id

    Tutorial.findById(id, (err, data) => {

        if(err) {

            if(err.kind === "not_found") {
                res.status(404).send({massage: "Not found Tutorial with id " + id})
            } else {
                res.status(500).send({massage: "Error Tutorial with id " + id })
            }

        } else {
            res.send(data)
        }
    })
}

exports.update = (req, res) => {
    res.sesnd({massage: "Update"})
}

exports.delete = (req, res) => {
    const id = req.params.id
    
    Tutorial.remove(id, (err, data) => {
        if(err) {
            
            if(err.kind === 'not_found') {
                res.status(404).send({massage: 'Not found!' + id})
            } else {
                res.status(500).send({massage: 'Could not delet id' + id})
            }
        } else {
            res.send({massage: 'Deleted successfuly'})
        }
    })
}

exports.deleteAll = (req, res) => {
    const title = req.params.title

    Tutorial.deleteAll()
}