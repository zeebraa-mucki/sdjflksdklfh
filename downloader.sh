$file_path = $1;
$xx = $file_path + ".mp4"
cd ./uploads;
wget $file_path;
for i in *.mkv; do
    ffmpeg -i "$i" -codec copy "${i%.*}.mp4"
done
