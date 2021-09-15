import React from 'react';

export const Rutas=()=>(
    
        <>
            <table class="table  table-dark table-striped">
                <thead>
                    <tr>            
                    <th scope="col">Ciudad de destino</th>
                    <th scope="col">Fecha</th> 
                   
                    </tr>
                </thead>
                <tbody>
                    <tr>                  
                    <th scope="row"><select class="form-select" aria-label="Default select example">
                    <option selected>Seleccione su destino</option>
                    <option value="1">Quevedo</option>
                    <option value="2">La Maná</option>
                    <option value="3">Valencia</option>
                    <option value="4">California</option>
                    <option value="5">Guayacan</option>
                    <option value="6">Pilalo</option>
                    <option value="7">La Esperanza</option>
                    </select></th>
                    <td> <input type="date"name="fecha"/></td>
                    
                    </tr>                    
                </tbody>
            </table>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Hora</th>
                        <th scope="col">Estado</th>      
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> <input type="time"name="Hora"/></th>                 
                        <td><button type="button" class="btn btn-warning">Pendiente</button></td>
                    </tr>                    
                </tbody>
            </table>
            <br></br><br></br><br></br>
            <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-info">Consultar</button>               
            </div>
            <br></br><br></br><br></br>
            <div class="card text-center">
            <div class="card-header">
                Aviso
                </div>
                <div class="card-body">
                    <h5 class="card-title">Primero inicia sesión!!</h5>
                    <p class="card-text">Deseas viajar ha alguno de estos destinos?. Inicia sesión y podras acceder a nuestras promociones e informacion adicional.</p>
                    
                </div>                
            </div>
        </>
    
);
