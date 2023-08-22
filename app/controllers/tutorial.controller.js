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
    res.send({massage: "FindOne : " + id})
}

exports.update = (req, res) => {
    res.sesnd({massage: "Update"})
}

exports.delete = (req, res) => {
    res.send({massage: "Delete"})
}

exports.deleteAll = (req, res) => {
    res.send({massage: "DeleteAll"})
}