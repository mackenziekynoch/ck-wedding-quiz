const path = require('path');
const express = require('express');
const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
require('dotenv').config()

aws.config.update({
  secretAccessKey: process.env.AWSSecretAccessKey,
  accessKeyId: process.env.AWSAccessKeyId,
  region: 'us-east-1'
});

const app = express();
const s3 = new aws.S3();
const port = 3000;

app.use(express.static('client/public'));

app.get('*', (req, res) =>{
  res.sendFile(path.resolve('client/public/index.html'));
});

const upload = multer({
  // dest: './server/images'
  storage: multerS3({
    s3: s3,
    // acl: 'public-read',
    bucket: process.env.S3Bucket,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        console.log(file);
        cb(null, req.params.eventName + '/' + file.originalname); //use Date.now() for unique file keys
    }
  })
});

app.post('/manage/:eventName/files', upload.array('file'), (req, res) => {
  console.log(`saving ${req.files.length} images for event ${req.params.eventName}`)
  res.status(201).end('file uploaded!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});