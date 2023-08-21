exports.create = (req, res) => {
    res.send("Create")
}

exports.findAll = (req, res) => {
    res.send({massage: "FindAll"});
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