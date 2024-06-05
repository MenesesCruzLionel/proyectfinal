<?php

include("conexion.php");
if (isset($_POST['regist'])) {
    if (
        strlen($_POST['email']) >= 1 &&
        strlen($_POST['contrase']) >= 1
    ) {
        $email = trim($_POST['email']);
        $contrase = trim($_POST['contrase']);

        $canti = $conex->query("SELECT correo FROM registrarseini WHERE correo='$email' ORDER BY correo DESC LIMIT 1");

        if ($canti->num_rows > 0) {
            $repe = $canti->fetch_object()->email;
?>

            <h3 class="fs-5 fw-bold mb-3">el email ya esta registrado</h3>
            <?php
        } else {
            $consulta = "INSERT INTO registrarseini(id, correo, contraseina) VALUES ('','$email','$contrase')";


            $resultado = mysqli_query($conex, $consulta);
            if ($resultado) {
            ?>
                <h3 class="fs-5 fw-bold mb-3">tu registro ha sido completado</h3>

            <?php
            } else {
            ?>
                <h3 class="fs-5 fw-bold mb-3">ha ocurrido un error</h3>
        <?php
            }
        }
    } else {
        ?>
        <h3 class="fs-5 fw-bold mb-3">Llena todos los campos</h3>
<?php
    }
}

?>