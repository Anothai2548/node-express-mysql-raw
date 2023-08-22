const sql = require("./db.js")

const Tutorial = function(tutorial){
    
    this.title = tutorial.title;
    this.description = tutorial.description;
    this.published = tutorial.published;
}

Tutorial.getAll = (title, result) => {
    let sqltext = "SELECT * FROM tutorial";

    sql.query(sqltext, (err, res) => {

        if(err){
            console.log("error : ", err)
            result(null, err)
            return
        }

        console.log("tutorial : ", res);
        result(null, res)
    })
}

module.exports = Tutorial;