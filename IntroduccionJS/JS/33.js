/* 143 - Fetch API */

function obtenerEmpleados() {
    const archivo = 'empleados.json';

    fetch(archivo)
        .then(resultado => resultado.json())
        .then(datos => {
            const { empleados } = datos
            console.log(empleados);

           /*  empleados.forEach(empleado => {
                console.log(empleado);
            }); */
        })
}

obtenerEmpleados();