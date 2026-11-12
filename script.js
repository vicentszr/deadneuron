// 1. Saludo de bienvenida
const bienvenido = document.getElementById("bienvenido");
const hora = new Date().getHours();
let saludo;
if (hora < 14) {
    saludo = "¡Buenos días!";
} else if (hora < 21) {
    saludo = "¡Buenas tardes!";
} else {
    saludo = "¡Buenas noches!";
}
bienvenido.textContent = saludo + 'Bienvenido al blog de deadneuron!';

// 2. Modo claro y oscuro
const botonTema = document.getElementById('tema');
botonTema.addEventListener('click', () => {
    document.body.classList.toggle('claro');
    const esClaro = document.body.classList.contains('claro');
    botonTema.textContent = esClaro ? 'Modo oscuro' : 'Modo claro';
});

// 3. Buscador de entradas
const buscador = document.getElementById('buscador');
const tarjetas = document.querySelectorAll('.tarjeta');
const sinResultados = document.getElementById('sin-resultados');
buscador.addEventListener('input', () => {
    const texto = buscador.value.trim().toLowerCase();
    let visibles = 0;
    tarjetas.forEach(tarjeta => {
        const coincide = tarjeta.textContent.toLowerCase().includes(texto);
        tarjeta.hidden = !coincide;
        if (coincide) visibles++;
    });
    sinResultados.hidden = visibles > 0;
});
