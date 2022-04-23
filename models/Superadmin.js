let Database = require("./Database");
class User {
    id = 0;
    name = "";
    username = "";
    password = "";
    firebaseid = "";
    query = "";
    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.username = "";
        this.password = "";
        this.firebaseid = "";
    }

    save = () => {
        if (this.id == 0) {
            this.query = "INSERT INTO superadmins (id, name, username,password,firebaseid)  ";
            this.query += "VALUES (" + this.id + ",'" + this.name + "','" + this.username + "','" + this.password + "','" + this.firebaseid + "')";
        }
        else {
            this.query = "UPDATE superadmins SET id=" + this.id + ",name='" + this.name + "',username='" + this.username + "',password='" + this.password + "',firebaseid='" + this.firebaseid + "' WHERE id=" + this.id;
        }
        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }


get = () => {
    this.query = "SELECT * FROM superadmins";
    console.log(this.query);
    return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
            this.db.close();
            if (err)
                return reject(err);
            resolve(result);
        });
    });
}



select = () => {
    this.query = "SELECT * FROM superadmins ";
    // this.query += " WHERE id = '" + this.id + "' ";
    return new Promise((resolve, reject) => {
        this.db.query(this.query, (err, result) => {
            this.db.close();
            if (err)
                reject(err);
            resolve(result);
        });
    });

}
delete = ()=>{

    this.query = "DELETE FROM superadmins ";
    this.query += " WHERE id = '"+ this.id + "' ";                
    return new Promise((resolve, reject)=>{
        this.db.query(this.query, (err, result)=>{
            this.db.close();
            if(err)
                reject(err);                
            resolve(result);
        });
    });         
}


}

module.exports = {
    User: User
}
