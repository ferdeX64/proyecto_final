import React from 'react';

export const IniciarS=()=>(
    
        <>
            <br></br><br></br>
            <div class="container">
                <div class="row justify-content-md-center">
                    
                    <div class="col-md-auto">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Dirección de correo electrónico:</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">Su correo electrónico no se compartira con nadie</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>                            
                            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                        </form>                         
                        <br></br><br></br>
                        <div class="card-header mb-3">
                                Aviso
                        </div>
                        <div class="card-body mb-3">
                                <h5 class="card-title">Si aun no tienes una cuenta Unete!!</h5>
                                <p class="card-text">Deseas viajar ha alguno de estos destinos?. Unete a nosotros completamente gratis, podras acceder a nuestras promociones e informacion adicional.</p>
                                <button type="button" class="btn btn-dark btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Registrarse
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Formulario de registro</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Nombre:</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                            <div id="emailHelp" class="form-text">No olvides escribir tu nombre completo.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Cédula:</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                            <div id="emailHelp" class="form-text">Identificate para poder realizar compras.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Teléfono:</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>                                            
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Correo electrónico:</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                            <div id="emailHelp" class="form-text">Ingresa un e-mail válido.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                                        </div>
                                        <div class="mb-3">                                            
                                            <label for="exampleInputPassword1" class="form-label">Sexo:</label><br></br>
                                            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
                                            <label class="btn btn-primary" for="option1">Hombre</label>
                                            &nbsp; &nbsp;
                                            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
                                            <label class="btn btn-danger" for="option2">Mujer</label>
                                        </div>
                                        
                                    </form>                                        
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <a class="btn btn-success btn-primary me-md-2" href="/" role="button">Registrarse</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>                
                        
                                          
                    </div>
                    
                </div>            
            </div>
            
        </>
    
);