<?php
    class Rutas extends Conectar{
        public function get_rutas(){
            $conectar = parent::conexion();
            $sql ="SELECT * FROM rutas";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }
        public function get_info_ruta($id){
            $conectar = parent::conexion();
            $sql ="SELECT * FROM rutas where id=?";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1,$id);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }
        public function insert_usuario($nombre,$cedula,$telefono,$email,$password,$sexo,$estado){
            $conectar = parent::conexion();
            $sql ="INSERT INTO pasajero(nombre,cedula,telefono,email,password,sexo,estado) VALUES (?,?,?,?,?,?,1)";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1,$nombre);
            $sql->bindValue(2,$cedula);
            $sql->bindValue(3,$telefono);
            $sql->bindValue(4,$email);
            $sql->bindValue(5,$password);
            $sql->bindValue(6,$sexo);

            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }
        public function cerrar_sesion(){
            $conectar = parent::conexion();
            $sql ="UPDATE pasajero SET estado=0 WHERE estado=1";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }
        public function iniciar_sesion($email,$password){
            $conectar = parent::conexion();
            $sql ="UPDATE pasajero SET estado=1 WHERE email=? AND password=?";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1,$email);
            $sql->bindValue(2,$password);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }
        
    }
?>