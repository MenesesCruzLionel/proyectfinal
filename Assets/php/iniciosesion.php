<?php
include("conexion.php");
if (isset($_POST["btn_log"])) {
    if (
        strlen($_POST['correo']) >= 1 &&
        strlen($_POST['contrase']) >= 1
    ) {

        $email = trim($_POST['correo']);
        $contrase = trim($_POST['contrase']);
        $sql = $conex->query("SELECT*FROM registrarseini WHERE correo='$email' and contraseina='$contrase' ");
        if ($usu_enco = $sql->fetch_object()) {
            echo"<script> window.location.href='../proyecto-chef/paginaweb.html';</script>";
        } else {
        ?>
            <h3 class="fs-5 fw-bold mb-3">Datos incorrectos</h3>
        <?php
        }
    } else{
        ?>
        <h3 class="fs-5 fw-bold mb-3">Llena todos los campos</h3>
<?php
    }
}

?>