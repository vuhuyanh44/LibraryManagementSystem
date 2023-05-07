var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join('uploads'))
    },
    filename: async function (req, file, cb) {
        var name = file.originalname;
        cb(null, name);
    }
})
var upload = multer({
    storage: storage
})
var multiUpload = upload.fields([{ name: 'main', maxCount: 10 }]);

router.post('/upload', multiUpload, async function (req, res) {
    res.json({
        results: "ok",
        message: "Upload file successfully"
    });
});

router.get('/open-pdf/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = "uploads/" + filename;

    const fileExtension = path.extname(filePath);

    const allowedTypes = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".pdf"
    ];

    if (!allowedTypes.includes(fileExtension)) {
        return res.status(400).send("Invalid file type");
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }

        res.contentType(fileExtension);
        res.send(data);
    });
});

module.exports = router;