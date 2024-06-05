<?php
// Crear la conexión
$conex = mysqli_connect("localhost", "root", "", "chef");
// Verificar la conexión
if ($conex->connect_errno) {
    die("conexionfallida" . $conex->connect_error);
}
?>
<?php
