function validar() {

	if (document.getElementById("uno").value != document.getElementById("dos").value) {
		alert("no coinciden las contraseñas")
		document.getElementById("dos").focus() /*en esto conseguimos que el cursor esté sobre el campo */
		return false
	}
	else
		alert("Se ha registrado correctamente")
	return true

}
const productos = {
            prod1: { precio: 90, cantidad: 0 },
            prod2: { precio: 200, cantidad: 0 },
            prod3: { precio: 120, cantidad: 0 },
            prod4: { precio: 200, cantidad: 0 },
        };

        // Cargar datos desde localStorage
        function cargarDatos() {
            const datosGuardados = localStorage.getItem("carrito");
            if (datosGuardados) {
                const carrito = JSON.parse(datosGuardados);
                for (const key in productos) {
                    if (carrito[key] !== undefined) {
                        productos[key].cantidad = carrito[key];
                    }
                }
            }
        }

        // Guardar datos en localStorage
        function guardarDatos() {
            const datosParaGuardar = {};
            for (const key in productos) {
                datosParaGuardar[key] = productos[key].cantidad;
            }
            localStorage.setItem("carrito", JSON.stringify(datosParaGuardar));
        }

        // Inicializar el total
        let total = 0;

        // Función para actualizar el total y el recuento
        function actualizarTotalYRecuento() {
            total = Object.values(productos).reduce((suma, prod) => suma + (prod.precio * prod.cantidad), 0);
            const recuentoTotal = Object.values(productos).reduce((suma, prod) => suma + prod.cantidad, 0);

            document.getElementById("total").textContent = `Total: ${total}`;
            document.getElementById("recuento").textContent = `Cantidad total de productos: ${recuentoTotal}`;

            // Actualizar visualmente la cantidad de cada producto
            document.getElementById("cantidadProd1").textContent = ` ${productos.prod1.cantidad}`;
            document.getElementById("cantidadProd2").textContent = ` ${productos.prod2.cantidad}`;
            document.getElementById("cantidadProd3").textContent = ` ${productos.prod3.cantidad}`;
            document.getElementById("cantidadProd4").textContent = ` ${productos.prod4.cantidad}`;
        }

        // Función para sumar productos
        function sumar(productoId) {
            productos[productoId].cantidad++; // Incrementar cantidad
            guardarDatos(); // Guardar datos
            actualizarTotalYRecuento(); // Actualizar
        }

        // Función para restar productos
        function restar(productoId) {
            if (productos[productoId].cantidad > 0) {
                productos[productoId].cantidad--; // Decrementar cantidad
                guardarDatos(); // Guardar datos
                actualizarTotalYRecuento(); // Actualizar
            }
        }
        
          function reiniciarProducto(productoId) {
            productos[productoId].cantidad = 0; // Establecer a cero
            guardarDatos(); // Guardar datos
            actualizarTotalYRecuento(); // Actualizar visualmente
        }

        // Función para reiniciar todo a cero
        function reiniciar() {
            // Establecer todas las cantidades a cero
            for (const key in productos) {
                productos[key].cantidad = 0;
            }
            guardarDatos(); // Guardar el cambio
            actualizarTotalYRecuento(); // Actualizar
        }

        // Configurar event listeners para los botones de suma y resta
        document.getElementById("sum1").addEventListener("click", () => {
            sumar("prod1");
        });

        document.getElementById("sum2").addEventListener("click", () => {
            sumar("prod2");
        });

        document.getElementById("sum3").addEventListener("click", () => {
            sumar("prod3");
        });

        document.getElementById("sum4").addEventListener("click", () => {
            sumar("prod4");
        });

        document.getElementById("res1").addEventListener("click", () => {
            restar("prod1");
        });

        document.getElementById("res2").addEventListener("click", () => {
            restar("prod2");
        });

        document.getElementById("res3").addEventListener("click", () => {
            restar("prod3");
        });

        document.getElementById("res4").addEventListener("click", () => {
            restar("prod4");
        });
        
         document.getElementById("resetProd1").addEventListener("click", () => {
            reiniciarProducto("prod1");
        });

        document.getElementById("resetProd2").addEventListener("click", () => {
            reiniciarProducto("prod2");
        });

        document.getElementById("resetProd3").addEventListener("click", () => {
            reiniciarProducto("prod3");
        });

        document.getElementById("resetProd4").addEventListener("click", () => {
            reiniciarProducto("prod4");
        });


        document.getElementById("reiniciar").addEventListener("click", reiniciar); // Configurar el botón de reinicio

        // Cargar datos al inicio
        cargarDatos();
        // Actualizar total y recuento al inicio
        actualizarTotalYRecuento();


miBoton = document.getElementById("mandar");
/*aquí tenemos otra manera, la que venimos usando habitualmente para escribir en el documento*/
document.getElementById("sip").addEventListener('click', () => {
   if (document.getElementById("sip").checked == true) /*buena manera de determinar si está clickado o no*/
       miBoton.disabled = false;
   else
       miBoton.disabled = true;


})

function cerrar(){
	
	alert("Se ha cerrado la sesion");
}
function numero() {
    const cvv = document.getElementById("CV").value;
    const fechaInput = document.getElementById("fcha").value;
    const fechaActual = new Date();

    if (isNaN(cvv)) {
        alert("CVV debe ser un número.");
        return false;
    } else if (cvv.length !== 3) {
        alert("CVV debe tener 3 dígitos.");
        return false;
    } else if (new Date(fechaInput) <= fechaActual) {
        alert("La fecha de vencimiento debe ser posterior a la actual.");
        return false;
    } else {
        alert("Datos ingresados correctamente.");
        return true;
    }
}

	
	
	
