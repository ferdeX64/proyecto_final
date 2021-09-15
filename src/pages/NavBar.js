import React from 'react';

export const NavBar=()=>(
    
        <>
            <nav class="navbar sticky-top navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="https://cdn.worldvectorlogo.com/logos/c-tran.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                &nbsp;&nbsp;&nbsp;Cotopaxi
                </a>
            </div>
            </nav>
            <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Menu</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                            <a class="nav-link active" href="/rutas">Rutas</a>
                            <a class="nav-link active" href="/reservas">Reservas</a>
                            <a class="nav-link active"  href="/acerca">Quienes somos</a>
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a class="btn btn-light btn-primary me-md-2" href="/iniciar_sesion" role="button">Iniciar sesión</a>
                        
                    </div>
                </div>
            </nav>

        </>
    
);
