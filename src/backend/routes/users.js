const express = require('express'),
    router = express.Router();

// get user lists
router.get('/list', function (req, res) {
    let sql = `SELECT * FROM user`;
    db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
            status: 200,
            message: "User lists retrieved successfully",
            data,
        })
    })
});

// login/register an user
router.post('/login', function (req, res) {
    // check if user existed or not
    let checkExistedSql = `SELECT * FROM user WHERE username='${req.body.username}'`;
    db.query(checkExistedSql, function (err, data) {
        if (err) throw err;
        if (data.length > 0) {
            // check password
            let checkPasswordSql = `SELECT * FROM user WHERE username='${req.body.username}' and password='${req.body.password}'`;
            db.query(checkPasswordSql, function (err, data, fields) {
                if (err) throw err;
                if (data.length > 0) {
                    res.json({
                        status: 200,
                        message: `${req.body.username} is logged in successfully`,
                        data
                    });
                } else {
                    res.status(200).send({
                        status: 401,
                        message: 'Login failed! Wrong password!'
                    });
                }
            });
        } else {
            let registerSql = `INSERT INTO user(username, password) VALUES (?)`;
            let values = [
                req.body.username,
                req.body.password
            ];
            db.query(registerSql, [values], function (err, data, fields) {
                if (err) throw err;
                db.query(checkExistedSql, function (err, data) {
                    if (err) throw err;
                    res.json({
                        status: 200,
                        message: `New user: ${req.body.username} is registered successfully`,
                        data
                    });
                });
            });
        }
    });
});

module.exports = router;