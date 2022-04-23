const { Router } = require("express");
var User = require("../models/Superadmin")
var express = require("express");
var bodyparser = require("body-parser");
var cookieparser = require("cookie-parser");
var multer = require("multer");

const router = express.Router()

router.post("/save", (req, res) => {
    let body = req.body;
    let user = new User.User();
    user.id = body.data.id;
    user.name = body.data.name;
    user.username = body.data.username;
    user.password = body.data.password;
    user.firebaseid = body.data.firebaseid;

    user.save().then(result => {
        console.log("Result")
        console.log(result);
        let data = {
            "status": "fail"
        }
        if (result.length != 0) {
            data = {
                "status": "success"
            }
        }
        res.end(JSON.stringify(data));
    },
        err => {
            console.log("Error : " + err);
            let data = {
                "data": {
                    "status": "fail"
                }
            };
            res.end(JSON.stringify(data));
        });
});




router.post("/list", (req, res) => {
    let body = req.body;
    let user = new User.User();


    user.select().then(result => {
        console.log("Result")
        console.log(result);
        let data = {
            "status": "fail"
        }
        if (result.length != 0) {
            data = {
                "status": "success",
                "data": result
            }
        }
        res.end(JSON.stringify(data));
    },
        err => {
            console.log("Error : " + err);
            let data = {
                "data": {
                    "status": "fail"
                }
            };
            res.end(JSON.stringify(data));
        });
});

router.post("/get", (req, res) => {
    let body = req.body;
    let user = new User.User();
    user.id = body.data.id;


    user.get().then(result => {
        console.log("Result")
        console.log(result);
        let data = {
            "status": "fail"
        }
        if (result.length != 0) {
            data = {
                "data": result
            }

        }
        res.end(JSON.stringify(data));
    },
        err => {
            console.log("Error : " + err);
            let data = {
                "data": {
                    "status": "fail"
                }
            };
            res.end(JSON.stringify(data));
        });
});

router.post("/delete", async (req, res) => {
    let body = req.body;
    let user = new User.User();
    user.id = body.data.id;

    user.delete().then(result => {
        console.log(result);
        let data = {
            "data": {
                "status": "success",
                // 'tdate': result.tdate,
                "data": result
            }
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "data": {

                    "status": "fail"
                }
            };
            res.end(JSON.stringify(data));
        });
});





module.exports = router