echo "ookkoko11";
file_path="https://gg.bb1.workers.dev/1:/onedl11/The%20Boys%20Season%201%20%20(1080p%20x265%20q22%20FS93%20Joy)/The%20Boys%20S01E01%20The%20Name%20of%20the%20Game%20%20(1080p%20x265%20q22%20FS94%20Joy).mkv";
xx=$file_path;
cd ./uploads;
wget ${file_path};
for i in *.mkv; do
    ffmpeg -i "$i" -vcodec libvpx -qmin 0 -qmax 50 -crf 10 -b:v 1M -acodec libvorbis "${i%.*}.webm"
done
