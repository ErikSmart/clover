<?php
$nombre = $_POST['nombre'];
$mail = $_POST['correo'];
$asunto = $_POST['asunto'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " " . $asunto . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['asunto'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'erikcat06@gmail.com';
$titulo = 'Mensaje del sitio Web Clover4';

mail($para, $titulo, utf8_decode($mensaje), $header);

echo "Your message was sent correctly <b>".$_POST['nombre']."</b>";
?>
