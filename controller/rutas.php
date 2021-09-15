<?php
    header('Content-Type: application/json');
    require_once("../config/conexion.php");
    require_once("../models/rutas.php");
    $rutas=new rutas();
    $body =json_decode(file_get_contents("php://input"),true);

    switch($_GET["op"]){
        case "GetRutas":
            $datos=$rutas->get_rutas();
            echo json_encode($datos);
        break;

        case "GetInfoRuta":
            $datos=$rutas->get_info_ruta($body["id"]);
            echo json_encode($datos);
        break;
        case "RegistroUsuario":
            $datos=$rutas->insert_usuario($body["nombre"],$body["cedula"],$body["telefono"],$body["email"],$body["password"],$body["sexo"],$body["estado"]);
            echo json_encode("Registro de usuario correcto");
        break;
        case "CerrarSesion":
            $datos=$rutas->cerrar_sesion();
            echo json_encode("Sesión cerrada");
        break;
        case "IniciarSesion":
            $datos=$rutas->iniciar_sesion($body["email"],$body["password"]);
            echo json_encode("Sesión iniciada");
        break;
    }
?>