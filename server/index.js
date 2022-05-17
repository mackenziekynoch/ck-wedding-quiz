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

app.get('/manage/:eventName/files/meta', (req, res) => {
  const bucketParams = {
    Bucket: process.env.S3Bucket,
    Prefix: req.params.eventName,
  };
  s3.listObjects(bucketParams, function(err, data) {
    if (err) {
      console.log("Error querying event images", err);
    } else {
      res.status(200).send(data);
      console.log("Success querying event images", data);
    }
  });
});

app.get('/manage/:eventName/files/:fileName', (req, res) => {
  const bucketParams = {
    Bucket: process.env.S3Bucket,
    Key: `${req.params.eventName}/${req.params.fileName}`,
  };
  s3.getObject(bucketParams, (err, data) => {
    if (err) {
      console.log("Error retrieving image", req.params.fileName, err);
    } else {
      res.status(200).send(data.Body);
      console.log("Success retrieving image", req.params.fileName);
    }
  });
});

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