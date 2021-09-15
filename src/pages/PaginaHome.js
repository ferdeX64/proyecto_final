import React from 'react';

export const PaginaHome=()=>(
    
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="4000">
                  <img src="https://c.wallhere.com/photos/9d/99/buses_sunlight_Everlasting_Summer-192547.jpg!d" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="https://images-ext-1.discordapp.net/external/yegowjiom1W6Apv4hTF1dYX0AlZEduGbMnU-U-JHqyg/%3F_nc_cat%3D102%26ccb%3D1-5%26_nc_sid%3D8bfeb9%26_nc_ohc%3DURgR4fSOoKQAX-E1GZ1%26_nc_ht%3Dscontent.fatf4-1.fna%26oh%3Da0b6eb6ee6d723262e504cac5324991a%26oe%3D61600CF9/https/scontent.fatf4-1.fna.fbcdn.net/v/t1.6435-9/s720x720/45795438_730895687296743_348390206405083136_n.jpg?width=500&height=373" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="https://images-ext-2.discordapp.net/external/dSzfh2rnQVaCBrYyeYziNX0iHJR1S3ZuBtiBpwnePJk/%3F_nc_cat%3D104%26ccb%3D1-5%26_nc_sid%3De3f864%26_nc_eui2%3DAeH7CeCyw9ZIczUGuS7S18lRN5X8_KpjYbw3lfz8qmNhvDkXvLDwKzwRUo_Us927261y1fGGe47VZGz1fT_7vQF3%26_nc_ohc%3Dwsez3Pa6vSwAX-HJIIn%26tn%3DOSDjOgaSmtre_syq%26_nc_ht%3Dscontent.fuio21-1.fna%26oh%3Dc8af38c2b18399f2e395279f6bae000f%26oe%3D615E8974/https/scontent.fuio21-1.fna.fbcdn.net/v/t1.6435-9/31598664_1637039056415549_4306060432021389312_n.jpg?width=500&height=375" class="d-block w-100" alt="..."/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>        
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Misión
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>Prestar servicios de calidad</strong>, al ser actor principal en todos los proyectos de movilidad que desarrolla la ciudad, contando con personal organizado, ético, altamente calificado, humano y solidario aliado con la tecnología en vanguardia, ofreciendo a nuestros usuarios un servicio eficiente y responsable.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Visión
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>Ser empresa líder en el transporte urbano y del país </strong>para satisfacer las necesidades de la movilidad humana contribuyendo al engrandecimiento del desarrollo socio económico de la ciudadanía.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Información
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>Turnos diarios desde Latacunga</strong> hacia Quevedo, La Mana, Quito, Ambato, Santo Domingo y servicio de Turismo dentro de todo el País con unidades modernas excelencia en el servicio.
                    </div>
                 </div>
                </div>
              </div>
        </>
    
);