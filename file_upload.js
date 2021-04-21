// import the require modules
const express = require('express'),
      bodyParser = require('body-parser'),
      multer = require('multer');
const path = require('path');  
const shell = require('shelljs');    

const PORT = process.env.PORT || 5000;
// define multer storage configuration     
var storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null, path.resolve(__dirname, 'uploads'));
    },
    filename: function(req,file,callback){
        callback(null, file.originalname + '-' + file.fieldname + '-' + Date.now()+ '-' + req.body.user);
    }
});



const upload = multer({ storage : storage});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/converted_files', express.static(__dirname + '/converted_files'));
app.use('/uploads', express.static(__dirname + '/uploads'));

//single file upload api 
app.post('/api/upload/single', upload.single('singleFile'), (req,res,next) => {
    try{
        const file = req.file;
        if (!file) {
            res.status(400).json({
                "status": "failed",
                "code" : "400",
                "message" : "Please upload file"
            });
        }

        res.status(200).json({
            "status": "success",
            "code" : "200",
            "message" : "file uploaded successfully"
        });

        try{
            shell.exec('./rcloneupload.sh');
            console.log("script run");
            var fs = require('fs');
            var filename = file.path;
            console.log('OK: ' + filename);
        }catch(err){
            console.log(err);

        }

    }catch(err){
        console.log(error.message);
        res.status(200).json({
            "status": "failed",
            "code" : "500",
            "message" : error.message
        });
    }
});

//multiple file upload api 
app.post('/api/upload/multiple',upload.array('multipleFile',4), (req,res,next) => {
    console.log("okay");


    try{
        const files = req.files;
        


        if (!files) {
            res.status(400).json({
                "status": "failed",
                "code" : "400",
                "message" : "Please upload file"
            });
        }
        console.log(files[0].path);
        res.status(200).json({
            "status": "success",
            "code" : "200",
            "message" : "file uploaded successfully",
            "data" : files
        });

        try{
            shell.exec('./rcloneupload.sh');
            console.log("called");
            var fs = require('fs');
            var filename = files[0].path;
            console.log('OK: ' + filename);
            var filename = files[1].path;
            console.log('OK: ' + filename);
        }catch(err){
            console.log(err);

        }
    }catch(error){
        res.status(200).json({
            "status": "failed",
            "code" : "500",
            "message" : error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}/`);
  });

//user
//multipleFile
//multipleFile