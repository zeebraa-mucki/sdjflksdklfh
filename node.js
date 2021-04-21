// import the require modules
const express = require('express'),
      bodyParser = require('body-parser'),
      multer = require('multer');

// define multer storage configuration     
const storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null, './public/upload/');
    },
    filename: function(req,file,callback){
        callback(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage : storage});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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
    }catch(err){
        console.log(error.message);
        res.status(200).json({
            "status": "failed",
            "code" : "500",
            "message" : error.message
        });
    }
});

app.listen(5010,function(){
    console.log("server is running on port 5010");
});