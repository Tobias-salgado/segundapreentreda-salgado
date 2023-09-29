const historialPrestamos = [];
const prestamoSimulador = {
    monto: 10000,
    tasaInteresAnual: 80,
    plazoMeses: 12,

        
        guardarHistorial: function () {
            const detalle = this.obtenerDetalles();
            historialPrestamos.push(detalle);
            const calculoDetalle = `Monto: $${this.monto.toFixed(2)}, Tasa: ${this.tasaInteresAnual}%, Plazo: ${this.plazoMeses} meses`;
            console.log('Préstamo agregado al historial.');
        },

        mostrarHistorial: function () {
            console.log('Historial de préstamos:');
            historialPrestamos.forEach((detalle, index) => {
                console.log(`Préstamo ${index + 1}:\n${detalle}`);
            });
        },

        obtenerDetalles: function () {
            return `Monto del préstamo: $${this.monto.toFixed(2)}\nTasa de interés anual: ${this.tasaInteresAnual}%\nPlazo en meses: ${this.plazoMeses}`;
        },

    calcularCuotas: function () {
        const monto = parseFloat(prompt('Ingrese el monto del préstamo:'));
        const tasaInteresAnual = parseFloat(prompt('Ingrese la tasa de interés anual (%):'));
        const plazoMeses = parseFloat(prompt('Ingrese el plazo en meses:'));

        if (isNaN(monto) || isNaN(tasaInteresAnual) || isNaN(plazoMeses)) {
            alert('Por favor, ingrese valores válidos.');
            return;
        }

        const tasaInteresMensual = tasaInteresAnual / 12 / 100;
        const cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses));
        const totalPagado = cuotaMensual * plazoMeses;

        alert(`Cuota Mensual: $${cuotaMensual.toFixed(2)}\nTotal Pagado: $${totalPagado.toFixed(2)}`);
        console.log('Calculo completado. Resultados mostrados en alert.');


        const self = this;
        self.guardarHistorial();
        self.mostrarHistorial();
    }
};
prestamoSimulador.calcularCuotas();
document.querySelector('button').addEventListener('click', function() {
    prestamoSimulador.calcularCuotas();
});

prestamoSimulador.monto = 10000;
prestamoSimulador.tasaInteresAnual = 50;
prestamoSimulador.plazoMeses = 12;

const detalles = prestamoSimulador.obtenerDetalles();
console.log(detalles);  // Esto imprimirá los detalles en la consola

const prestamoSimulador2 = {
    // ... (código existente)
    monto: 10000,
    tasaInteresAnual: 50,
    plazoMeses: 12,
    obtenerDetalles: function () {
        return `Monto del préstamo: $${this.monto.toFixed(2)}\nTasa de interés anual: ${this.tasaInteresAnual}%\nPlazo en meses: ${this.plazoMeses}`;
    }
};

// ... (código existente)

// Llamada al nuevo método para obtener detalles del préstamo
console.log(prestamoSimulador2.obtenerDetalles());



const prestamoSimulador3 = {
    // ... (código existente)
    monto: 10000,
    tasaInteresAnual: 80,
    plazoMeses: 12,
    
    obtenerDetalles: function () {
        return `Monto del préstamo: $${this.monto.toFixed(2)}\nTasa de interés anual: ${this.tasaInteresAnual}%\nPlazo en meses: ${this.plazoMeses}`;
    },

    guardarHistorial: function () {
        const detalle = this.obtenerDetalles();
        historialPrestamos.push(detalle);
        console.log('Préstamo agregado al historial.');
        
    },

    mostrarHistorial: function () {
        console.log('Historial de préstamos:');
        historialPrestamos.forEach((detalle, index) => {
            console.log(`Préstamo ${index + 1}:\n${detalle}`);
        });
    }
    
};

// ... (código existente)

// Llamada a los nuevos métodos para guardar en historial y mostrar historial
prestamoSimulador3.guardarHistorial();
prestamoSimulador3.mostrarHistorial();







