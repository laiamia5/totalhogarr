import React, { useEffect, useState } from "react";
import CardTienda from "./CardTienda"
import axios from 'axios'

export default function Tienda (){

    const [lista , setLista] = useState([])
    const [option, setOption] = useState("")

    useEffect(() => {
        if(lista.length === 0){
           obtenerProds()
        }

        if(option === '1') return FiltrarAlfabeticamente()
        else if(option === '2') return FiltrarMenorPrecio()
        else if(option === '3') return FiltrarMayorPrecio()
        else return

     }, [option])

    const obtenerProds = () => {
        axios.get('http://localhost:3001/productos')
        .then((res) => {
            setLista(res.data)
        })
        .catch((err) => alert(err))
    }

    const FiltrarMenorPrecio = () => {
        let orden = lista.sort( function( a , b){
            if(a.precio > b.precio) return 1;
            if(a.precio < b.precio) return -1;
            return 0;
        });
       setLista([...orden])
    }

    const FiltrarMayorPrecio = () => {
        let orden = lista.sort( function( a , b){
            if(a.precio > b.precio) return -1;
            if(a.precio < b.precio) return 1;
            return 0;
        });
       setLista([...orden])
    }

    const FiltrarAlfabeticamente = () => {
        let orden = lista.sort( function( a , b){
            if(a.nombre > b.nombre) return 1;
            if(a.nombre < b.nombre) return -1;
            return 0;
        });
       setLista([...orden])
    }

    return(
        <>
         {/* <!-- Start Content --> */}
    <div class="container py-5">
        <div class="row">

            <div class="col-lg-3">
                <h1 class="h2 pb-4">Filtros</h1>
                <ul class="list-unstyled templatemo-accordion">
                    <li class="pb-3">
                        <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Marca
                            <i class="fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul class="collapse show list-unstyled pl-3">
                            <li><a class="text-decoration-none" href="#">Kanji</a></li>
                            <li><a class="text-decoration-none" href="#">Samsung</a></li>
                            <li><a class="text-decoration-none" href="#">Motorola</a></li>
                        </ul>
                    </li>
                    <li class="pb-3">
                        <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Categorias
                            <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="collapseTwo" class="collapse list-unstyled pl-3">
                            <li><a class="text-decoration-none" href="#">Colchon</a></li>
                            <li><a class="text-decoration-none" href="#">Horno Electrico</a></li>
                            <li><a class="text-decoration-none" href="#">Lavarropas</a></li>
                            <li><a class="text-decoration-none" href="#">Licuadora</a></li>
                            <li><a class="text-decoration-none" href="#">Parlante</a></li>
                            <li><a class="text-decoration-none" href="#">Pava Eléctrica </a></li>
                            <li><a class="text-decoration-none" href="#">Plancha de Pelo</a></li>
                            <li><a class="text-decoration-none" href="#">Plancha de Ropa</a></li>
                            <li><a class="text-decoration-none" href="#">Secadora de Pelo</a></li>
                            <li><a class="text-decoration-none" href="#">Secarropas</a></li>
                        </ul>
                    </li>
                    <li class="pb-3">
                        <a class="collapsed d-flex justify-content-between h3 text-decoration-none" href="#">
                            Celulares
                            <i class="pull-right fa fa-fw fa-chevron-circle-down mt-1"></i>
                        </a>
                        <ul id="collapseThree" class="collapse list-unstyled pl-3">
                            <li><a class="text-decoration-none" href="#">Reacondicionados</a></li>
                            <li><a class="text-decoration-none" href="#">Nuevos</a></li>
                            <li><a class="text-decoration-none" href="#">accesorios</a></li>
                            <li><a class="text-decoration-none" href="#">servicio técnico</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="col-lg-9">
                <div class="row">
                    <div class="col-md-6">
                        {/* <ul class="list-inline shop-top-menu pb-3 pt-1"> */}
                            {/* <li class="list-inline-item">
                                <a class="h3 text-dark text-decoration-none mr-3" href="#">All</a>
                            </li>
                            <li class="list-inline-item">
                                <a class="h3 text-dark text-decoration-none mr-3" href="#">Men's</a>
                            </li>
                            <li class="list-inline-item">
                                <a class="h3 text-dark text-decoration-none" href="#">Women's</a>
                            </li>
                        </ul> */}
                    </div>
                     <div class="col-md-6 pb-4">
                        <div class="d-flex">
                            <select class="form-control" onChange={(event) => setOption(event.target.value)}>
                                <option >orden</option>
                                <option id="select_option_alfabeticamente" value='1' onMouseDown={FiltrarAlfabeticamente}>Alfabeticamente</option>
                                <option id="select_option_menor_precio" value='2'onClick={FiltrarMenorPrecio}>de menor a mayor precio</option>
                                <option id="select_option_mayor_precio" value='3' onClick={FiltrarMayorPrecio}>de mayor a menor precio</option>
                            </select>
                        </div>
                    </div> 

                </div>
                <div class="row" id="addProd">
                    {lista.map((el) => {
                        return(
                            <CardTienda elementos= {el} />
                        )
                    })}
                </div>
                <div div="row">
                    <ul class="pagination pagination-lg justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0" href="#" tabindex="-1">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark" href="#">3</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    {/* <!-- End Content --> */}

    {/* <!-- Start Brands --> */}
    <section class="bg-light py-5">
        <div class="container my-4">
            <div class="row text-center py-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Marcas que trabajamos</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div class="col-lg-9 m-auto tempaltemo-carousel">
                    <div class="row d-flex flex-row">
                        {/* <!--Controls--> */}
                        <div class="col-1 align-self-center">
                            <a class="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                                <i class="text-light fas fa-chevron-left"></i>
                            </a>
                        </div>
                        {/* <!--End Controls--> */}

                        {/* <!--Carousel Wrapper--> */}
                        <div class="col">
                            <div class="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                                {/* <!--Slides--> */}
                                <div class="carousel-inner product-links-wap" role="listbox">

                                    {/* <!--First slide--> */}
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/samsung.png" alt="Brand Logo" style={{transform: 'scale(1.5)'}}/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/motorola.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End First slide--> */}

                                    {/* <!--Second slide--> */}
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End Second slide--> */}

                                    {/* <!--Third slide--> */}
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/></a>
                                            </div>
                                            <div class="col-3 p-md-5">
                                                <a href="#"><img class="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End Third slide--> */}

                                </div>
                                {/* <!--End Slides--> */}
                            </div>
                        </div>
                        {/* <!--End Carousel Wrapper--> */}

                        {/* <!--Controls--> */}
                        <div class="col-1 align-self-center">
                            <a class="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                                <i class="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                        {/* <!--End Controls--> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--End Brands--> */}

        </>
    )
}