const sql = require("./db.js")

const Tutorial = function(tutorial){
    
    // this.title = tutorial.title
    // this.description = tutorial.description
    // this.published = tutorial.published
}

Tutorial.create = () => {

}

Tutorial.getAll = (title, result) => {
    let sqltext = "SELECT * FROM tutorials"

    sql.query(sqltext, (err, res) => {

        if(err){
            //console.log("error : ", err)
            result(err, null)
            return
        }

        //console.log("tutorial : ", res)
        result(null, res)
    })
}

Tutorial.findAllPublished = () => {

}

Tutorial.findById = (id, result) => {
    sql.query("SELECT * FROM tutorials WHERE id = " + id, (err, res) => {

        if(err) {
    
            result(err, null)
            return 
            
        } else if(res.length) {

            result(null, res[0])
            return

        } else {
            result({kind: "not_found"}, null)
        }
    })
}

Tutorial.update = () => {

}

Tutorial.delete = (id, result) => {
    sql.query("DELETE * FROM tutorials WHERE id = " + id, (err, res) => {

        if(err) {

            result(err, null)
            return

        } else if(res.length) {

            result(null, res[0])
            return 

        } else {
            result({kind: "not_found"}, null)
        }
    })
}

Tutorial.deleteAll = (title, result) => {
    sql.query("DELETE * FROM tutorials", (err, res) => {

        if(err) {

            result(err, null)
            return
            
        } else {
            result(null, res)
        }
    })
}

module.exports = Tutorial