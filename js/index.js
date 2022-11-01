let faltantes = 11;

document.getElementById('arquero').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('central').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('lateral-derecho').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('lateral-izquierdo').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('volante-central-izquierdo').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('volante-izquierdo').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('volante-derecho').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('volante-central-derecho').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('delantero').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('delantero-derecho').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});
document.getElementById('delantero-izquierdo').addEventListener('click', function(e){
        if (e.target.classList.contains('selected')){
                removeFaltante();
        } else {
                addFaltante();
        }
        e.target.classList.toggle('selected');
});

function addFaltante() {
        faltantes--;
        document.getElementById('faltantes').innerHTML = faltantes;
        check();
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