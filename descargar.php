 

<?php 
if(!empty($_GET['archivo']))
{
	$filename = basename($_GET['archivo']);
	$filepath = 'cv/' . $filename;
	if(!empty($filename) && file_exists($filepath)){

 
		header("Cache-Control: public");
		header("Content-Description: FIle Transfer");
		header("Content-Disposition: attachment; filename=$filename");
		header("Content-Type: application/zip");
		header("Content-Transfer-Emcoding: binary");

		readfile($filepath);
		exit;

	}
	else{
		echo "This File Does not exist.";
	}
}


// if (!isset($_GET['archivo']) || empty($_GET['archivo'])) {
// 	exit();
//    }
//    $root = "cv/";
//    $file = basename($_GET['archivo']);
//    $path = $root.$file;
//    $type = '';
	
//    if (is_file($path)) {
// 	$size = filesize($path);
// 	if (function_exists('mime_content_type')) {
// 	$type = mime_content_type($path);
// 	} else if (function_exists('finfo_file')) {
// 	$info = finfo_open(FILEINFO_MIME);
// 	$type = finfo_file($info, $path);
// 	finfo_close($info);
// 	}
// 	if ($type == '') {
// 	$type = "application/force-download";
// 	}
// 	// Define los headers
// 	header("Content-Type: $type");
// 	header("Content-Disposition: attachment; filename=$file");
// 	header("Content-Transfer-Encoding: binary");
// 	header("Content-Length: " . $size);
// 	// Descargar el archivo
// 	readfile($path);
//    } else {
// 	die("El archivo no existe.");
//    }
 ?>