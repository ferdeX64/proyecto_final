import React from 'react';

export const Reservas=()=>(
    
        <>
            <br></br><br></br>
            <div class="container">
                <div class="row">
                    <div class="col">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://images-ext-1.discordapp.net/external/nH3aotNbtKDZTj9lWJxCm6dO8b_3x5au-flE9mR35S0/%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpYWplJTIwYnVzfGVufDB8fDB8fA%253D%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60/https/images.unsplash.com/photo-1564694202883-46e7448c1b26?width=300&height=375" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Viaja con nosotros</h5>
                                <p>Reserva tu boleto para transportarte sin ningún problema.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="https://static2.lavozdigital.es/cadiz/prensa/noticias/201405/21/fotos/8871938.jpg" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Realiza tu pago de forma fácil y segura</h5>
                                <p>Puedes pagar mediante tarjeta de credito o deposito bancario.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="https://images-ext-2.discordapp.net/external/kKYLt9jxgQgf85baMSZivey2bFk2s6_BspO--tFcCa8/%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJ1c3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D500%26q%3D60/https/images.unsplash.com/photo-1600198741448-fc40d918673a?width=300&height=375" class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Suerte en tu viaje!!</h5>
                                <p>Viaja comodamente con cooperativa de transportes Cotopaxi, estamos para servirte.</p>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>                    
                    <div class="col order-5">
                        <div class="card text-center">
                            <div class="card-header">
                                Aviso
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">No puedes reservar!!</h5>
                                <p class="card-text">Deseas viajar ha alguno de estos destinos?. Inicia sesión y podras acceder a nuestras promociones e informacion adicional.</p>
                                
                            </div>                
                        </div>
                        <br></br><br></br><br></br>
                        <img src="https://media.discordapp.net/attachments/841425859122036789/885232228366422056/UH9sPshm6sicEfyFSpq1-azcqotImGAwK2Nj100jFj6wVFVc9-FPr9cdk28nB4pUiwOedu1QpS8hqANA09ban2LY3TX3AcagZRRq.png?width=500&height=201" class="img-fluid" alt="..."></img>
                    </div>
                    
                    <div class="col order-1">
                    Destino: <br></br><br></br>
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccione su destino</option>
                    <option value="1">Quevedo</option>
                    <option value="2">La Maná</option>
                    <option value="3">Valencia</option>
                    <option value="4">California</option>
                    <option value="5">Guayacan</option>
                    <option value="6">Pilalo</option>
                    <option value="7">La Esperanza</option>
                    </select><br></br>
                    Fecha:<br></br><br></br>
                    <input type="date"name="fecha"/><br></br><br></br>
                    Hora:<br></br><br></br>
                    <input type="time"name="Hora"/><br></br><br></br>
                    N° de asiento:<br></br><br></br>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecciona un asiento</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select><br></br><br></br><br></br>
                    <button type="button" class="btn btn-danger">No puedes realizar reserva</button>
                    <br></br><br></br><br></br>
                    </div>
                </div>
            </div>
        </>
    
);