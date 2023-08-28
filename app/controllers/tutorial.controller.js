const Tutorial = require("../module/tutorial.module.js")

exports.create = (req, res) => {
    res.send("Create")
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
    res.send({massage: "FindAllPublished"})
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

    Tutorial.delete()
}

exports.deleteAll = (req, res) => {
    const title = req.params.title

    Tutorial.deleteAll()
}