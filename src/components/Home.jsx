import React from "react";
import Carrusel from "./Carrusel";

export default function Home(){
    
    return(
        <>
         {/* <!-- Start Banner Hero --> */}
            <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                    <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="./assets/img/celular_carrusel.png" alt=""/>
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left align-self-center">
                                        <h1 class="h1 text-success"><b>Total Hogar</b> eCommerce</h1>
                                        <h3 class="h2">Celulares Nuevos | Reacondicionados</h3>
                                        <p style={{color: '#000 !important'}}>
                                            ofrecemos una amplia vairedad de modelos de celulares, tanto nuevos como reacondicionados
                                            estos dispositivos ofrecen una alternativa asequible para aquellos que buscan un celular de alta calidad a un precio más accesible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="./assets/img/secadora.png" alt=""/>
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Secadora de Pelo</h1>
                                        <h3 class="h2">¡Obtén el look perfecto en minutos!</h3>
                                        <p>
                                            tenemos en stock una amplia gama de marcas de secadoras de pelo y planchas de pelo,
                                            diseñada para ayudarte a lograr un cabello suave, brillante y sin frizz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="row p-5">
                                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img class="img-fluid" src="./assets/img/parlante.jpg" alt=""/>
                                </div>
                                <div class="col-lg-6 mb-0 d-flex align-items-center">
                                    <div class="text-align-left">
                                        <h1 class="h1">Parlantes</h1>
                                        <h3 class="h2">Ullamco laboris nisi ut </h3>
                                        <p>
                                            We bring you 100% free CSS templates for your websites. 
                                            If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
                    <i class="fas fa-chevron-left"></i>
                </a>
                <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
    {/* <!-- End Banner Hero --> */}
        {/* ----------------------------------------------------------------------------------------------------- */}
        {/* <!-- Start Categories of The Month --> */}
            <section class="container py-5">
                <div class="row text-center pt-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">Categorías del Mes</h1>
                        <p>
                            Les presentamos a continuación las categorías más vendidas y demandadas del mes
                        </p>
                    </div>
                </div>
                <div class="row" id="addProdIndex">
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="./assets/img/celular.jpg" class="rounded-circle img-fluid border"/></a>
                        <h5 class="text-center mt-3 mb-3">Celulares</h5>
                        <p class="text-center"><a class="btn btn-success">Ver Tienda</a></p>
                    </div>
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="./assets/img/licuadora2.jpg" class="rounded-circle img-fluid border"/></a>
                        <h2 class="h5 text-center mt-3 mb-3">Licuadoras</h2>
                        <p class="text-center"><a class="btn btn-success">Ver Tienda</a></p>
                    </div>
                    <div class="col-12 col-md-4 p-5 mt-3">
                        <a href="#"><img src="./assets/img/colchon.jpg" class="rounded-circle img-fluid border"/></a>
                        <h2 class="h5 text-center mt-3 mb-3">Colchones Espuma</h2>
                        <p class="text-center"><a class="btn btn-success">Ver Tienda</a></p>
                    </div>
                </div>
            </section>
    {/* <!-- End Categories of The Month --> */}

    {/* <!-- Start Featured Product --> */}
    <section class="bg-light">
        <div class="container py-5">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Productos más vendidos</h1>
                    <p>
                        No te pierdas los productos que han sido los más vendidos y solicitados por nuestros clientes
                    </p>
                </div>
            </div>
            <div class="row" id="addProdIndex2">
                <div class="col-12 col-md-4 mb-4">
                    <div class="card h-100">
                        <a href="shop-single.html">
                            <img src="./assets/img/feature_prod_01.jpg" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body">
                            <ul class="list-unstyled d-flex justify-content-between">
                                <li>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-warning fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                    <i class="text-muted fa fa-star"></i>
                                </li>
                                <li class="text-muted text-right">$240.00</li>
                            </ul>
                            <a href="shop-single.html" class="h2 text-decoration-none text-dark">Gym Weight</a>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                            </p>
                            <p class="text-muted">Reviews (24)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Featured Product --> */}
        </>
    )
}

