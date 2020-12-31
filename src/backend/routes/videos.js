const express = require('express'),
    router = express.Router();

// get video lists
router.get('/list', function (req, res) {
    let totalVideo;
    const pageSize = parseInt(req.query.pageSize, 10) || 2;
    const page = parseInt(req.query.page, 10) || 0;
    let totalPage;
    const skip = page * pageSize;
    // compute the limit parameter for MySQL query
    const limit = skip + ',' + pageSize;
    let sql = `SELECT v.id as video_id, v.title, v.description, v.url, u.id as user_id ,u.username FROM user_video uv JOIN video v ON v.id = uv.video_id JOIN user u ON uv.user_id=u.id  LIMIT ${limit};`;
    db.query('SELECT count(*) as totalVideo FROM video;', function (err, data) {
        if (err) throw err;
        totalVideo = data[0].totalVideo;
        totalPage = Math.ceil(totalVideo / pageSize);
        db.query(sql, function (err, data, fields) {
            if (err) throw err;
            if (totalPage === 0 || page < totalPage) {
                res.json({
                    status: 200,
                    message: "Video lists retrieved successfully",
                    pagination: {
                        total: totalVideo,
                        totalPage: totalPage,
                        current: page,
                        pageSize,
                        previous: page > 0 ? page - 1 : undefined,
                        next: page < pageSize - 1 ? page + 1 : undefined
                    },
                    data
                });
            }
            else {
                res.status(200).send({
                    status: 400,
                    message: `Queried page ' ${page} + ' is >= to maximum page number ' ${totalPage}`
                });
            }
        });
    });
});

// share a new video
router.post('/share', function (req, res) {
    let sql = `INSERT INTO video(title, url, description) VALUES (?);`;
    let values = [
        req.body.video.title,
        req.body.video.url,
        req.body.video.description,
    ];
    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err;
        const sql2 = `INSERT INTO user_video (user_id,video_id) VALUES (${req.body.user.id}, LAST_INSERT_ID())`;
        db.query(sql2, function (err) {
            if (err) throw err;
            res.json({
                status: 200,
                message: "New video shared successfully"
            })
        });
    })
});

module.exports = router;