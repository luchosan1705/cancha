let faltantes = 11;

document.getElementById('arquero').addEventListener('click', (e) => clickAction(e));
document.getElementById('central').addEventListener('click', (e) => clickAction(e));
document.getElementById('lateral-derecho').addEventListener('click', (e) => clickAction(e));
document.getElementById('lateral-izquierdo').addEventListener('click', (e) => clickAction(e));
document.getElementById('volante-central-izquierdo').addEventListener('click', (e) => clickAction(e));
document.getElementById('volante-izquierdo').addEventListener('click', (e) => clickAction(e));
document.getElementById('volante-derecho').addEventListener('click', (e) => clickAction(e));
document.getElementById('volante-central-derecho').addEventListener('click', (e) => clickAction(e));
document.getElementById('delantero').addEventListener('click', (e) => clickAction(e));
document.getElementById('delantero-derecho').addEventListener('click', (e) => clickAction(e));
document.getElementById('delantero-izquierdo').addEventListener('click', (e) => clickAction(e));

function addFaltante() {
        faltantes--;
        document.getElementById('faltantes').innerHTML = faltantes;
}

function removeFaltante() {
        faltantes++;
        document.getElementById('faltantes').innerHTML = faltantes;
}

function check() {
        if (faltantes == 0) {
                setTimeout(() => {
                        alert('Ganaste un 10% de descuento!');
                }, 100);
        }
}

function clickAction(e) {
        e.target.classList.contains('selected') ? removeFaltante() : addFaltante();
        e.target.classList.toggle('selected');
        check();
}