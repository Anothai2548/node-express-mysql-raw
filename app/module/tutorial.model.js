const sql = require("./db.js")

const Tutorial = function(tutorial){
    this.title = tutorial.title;
    this.description = tutorial.description;
    this.published = tutorial.published;
}

Tutorial.getAll = (title, result) => {
    let sqltext = "SELECT * FROM tutorials";

    sql.query(sqltext, (err, res) => {
        if(error){
            console.log("error : ", err)
            return;
        }

        console.log("tutorial : ", result);
    })
}