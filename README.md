# cloud-upload-api
A simple API built with nodejs that handles file uploads to Google Drive using rClone

use heroku to deploy the app
use curl, postman or postwoman to send requests

can use /api/upload/multiple or /api/upload/single to upload 
Send a POST request to https://yourherokuapp.com/api/upload/multiple or https://yourherokuapp.com/api/upload/single
The POST request should contain the following:
- user text field 
- multipleFile containing the file 
- (multiple multipleFile fields can be added)

Features:
- Handles multiple requests from different clients
- File handling is done by multer
- Multiple files can be uploaded with only one POST request

# Deploy
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)