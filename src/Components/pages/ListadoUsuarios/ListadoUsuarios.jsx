import { useState, useEffect } from "react";
export function ListadoUsuarios(){
    //Simulando un conjunto de datos que vienen del back
    let usuarios=[

        {
            id: 5,
            nombre: "Daniel Loondoño",
            telefono: "3012568956",
            ciudad: "Sabaneta"
        },
        {
            id: 58,
            nombre: "Maria del Mar",
            telefono: "3012565656",
            ciudad: "Boston"
        },
        {
            id: 1,
            nombre: "Blanca Yepes",
            telefono: "3022565656",
            ciudad: "Boston"
        },
        {
            id: 58,
            nombre: "Sebastian Campo",
            telefono: "3042565656",
            ciudad: "Itagui"
        },
        {
            id: 58,
            nombre: "Socorro Yepes",
            telefono: "3062565656",
            ciudad: "Guayabal"
        }
        
    ]
       
    const[datosApi, setDatosApi]=useState(null)
    const[setestadoCarga,setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    

    // useEffect(function(){},[
    //     //Aca se llama al sevicio(back)
    //     function(){
    //     //Se carga la variable de estado con los datos del servicio y se cambia la variable de estado de la carga
    //     setDatosApi(usuarios)
    //     setEstadoCarga(false)


    //     }              
    // ])

return(
<>
<br /><br /><br />
{
    console.log(usuarios)
}
<h3> LISTADO DE USUARIOS</h3>
<div className="container">
    <div className="row row cols-1 row-clos-md-3 g-3">
    {
    //Renderizando un arreglo de objetos
    usuarios.map(function(usuario){
        return(
            <div className="col">
                <div className="card h-100 shadow p-5">
                    <h5>{usuario.nombre}</h5>
                    <h4>Ciudad {usuario.ciudad}</h4>
                    <h3>Telefono {usuario.telefono}</h3>
                </div>
            </div>
        )
    })
}
    </div>
</div>



</>
)

}