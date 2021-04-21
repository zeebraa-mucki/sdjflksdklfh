$file_name = $1;
$xx = $file_name + '.mp4';
ffmpeg -i $file_name $xx;
