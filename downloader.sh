echo "ookkoko11";
file_path="https://gg.bb1.workers.dev/1:/onedl11/The%20Boys%20Season%201%20%20(1080p%20x265%20q22%20FS93%20Joy)/The%20Boys%20S01E01%20The%20Name%20of%20the%20Game%20%20(1080p%20x265%20q22%20FS94%20Joy).mkv";
xx=$file_path;
cd ./uploads;
wget ${file_path};
for i in *.mkv; do
    ffmpeg -i "$i" -c:v libx264 -crf 18 -preset medium -c:a aac -b:a 128k -movflags +faststart -vf scale=-2:720,format=yuv420p "${i%.*}.mp4"
done
