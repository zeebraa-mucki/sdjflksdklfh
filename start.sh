#!/bin/bash

echo "Rclone init"
wget -q https://downloads.rclone.org/v1.51.0/rclone-v1.51.0-linux-amd64.zip
unzip -q rclone-v1.51.0-linux-amd64.zip
export PATH=$PWD/rclone-v1.51.0-linux-amd64:$PATH

chmod +x rcloneupload.sh
chmod +x setup.sh
chmod +x converter.sh
chmod +x downloader.sh

bash setup.sh
bash downloader.sh

node file_upload.js