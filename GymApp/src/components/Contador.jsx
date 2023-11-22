import React, { useState, useEffect } from 'react';

const ContadorDeVisitas = () => {
    const [cantidad, setContador] = useState(0);

    useEffect(() => {
        const cantidadGuardada = localStorage.getItem('contadorDeVisitas');
        if (cantidadGuardada) {
            setContador(parseInt(cantidadGuardada, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('contadorDeVisitas', cantidad.toString());
    }, [cantidad]);

    const sumarVisita = () => {
        setContador(cantidad + 1);
    };

    return (
        <div>
            <p>Contador de Visitas: {cantidad}</p>
            <button className="sumador" onClick={sumarVisita}>Visita</button>
        </div>
    );
};

export default ContadorDeVisitas;