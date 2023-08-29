const sql = require("./db.js")

const Tutorial = function(tutorial){
    
    this.title = tutorial.title
    this.description = tutorial.description
    this.published = tutorial.published
}

Tutorial.create = (newTutorial, result) => {
    sql.query("INSERT INTO tutorials SET ?" , newTutorial, (err, res) => {

        if(err) {

            result(err, null)
            return
        }

        result(null, {id: res.insertId, ...newTutorial})
    })  
}

Tutorial.getAll = (result) => {
    sql.query("SELECT * FROM tutorials", (err, res) => {

        if(err){

            result(err, null)
            return

        } else if(res.length) {

            result(null, res)
            return

        } else {

            result({kind: 'not_found'}, null)
            return
        }
    })
}

Tutorial.getAllPublished = (result) => {
    sql.query("SELECT * FROM tutorials WHERE published = FALSE", (err, res) => {

        if(err) {

            result(err, null)
            return 

        }

        result(null, res)
    })
}

Tutorial.findById = (id, result) => {
    sql.query("SELECT * FROM tutorials WHERE id = " + id, (err, res) => {

        if(err) {
    
            result(err, null)
            return 
            
        } else if(res.length) {

            result(null, res)
            return

        } else {

            result({kind: "not_found"}, null)
            return
        }
    })
}

Tutorial.updateById = (id, newTutorials, result) => {
    sql.query("UPDATE tutorials SET title = ?, description = ?, published = ?, id = ?",[newTutorials.title, newTutorials.description, newTutorials.published, id], (err, res) => {

        if(err) {

            result(null, err)
            return
        
        } else if(res.affectedRows == 0) {

            result({kind: 'not_found'}, null)
            return
        }

        result(null, {id: id, ...newTutorials})
    })
}

Tutorial.remove = (id, result) => {
    sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {

        if(err) {

            result(err, null)
            return

        } else if(res.affectedRows == 0) {
            
            result({kind: "not_found"}, null)
            return
        }

        result(null, res)
    })
}

Tutorial.removeAll = (result) => {
    sql.query("DELETE FROM tutorials", (err, res) => {

        if(err) {

            result(err, null)
            return

        } else if(res.affectedRows == 0) {

            result({kind: "not_found"}, null)
        }

        result(null, res)
    })
}

module.exports = Tutorial