let missing = 11;
initEvents();

function initEvents() {
        document.getElementById('goalkeeper').onclick = (e) => clickAction(e);
        document.getElementById('central').onclick = (e) => clickAction(e);
        document.getElementById('lateral-derecho').onclick = (e) => clickAction(e);
        document.getElementById('lateral-izquierdo').onclick = (e) => clickAction(e);
        document.getElementById('volante-central-izquierdo').onclick = (e) => clickAction(e);
        document.getElementById('volante-izquierdo').onclick = (e) => clickAction(e);
        document.getElementById('volante-derecho').onclick = (e) => clickAction(e);
        document.getElementById('volante-central-derecho').onclick = (e) => clickAction(e);
        document.getElementById('delantero').onclick = (e) => clickAction(e);
        document.getElementById('delantero-derecho').onclick = (e) => clickAction(e);
        document.getElementById('delantero-izquierdo').onclick = (e) => clickAction(e);        
}

function addMissing() {
        missing++;
        document.getElementById('missing').innerHTML = missing;
}

function removeMissing() {
        missing--;
        document.getElementById('missing').innerHTML = missing;
}

function check() {
        if (missing == 0) {
                setTimeout(() => {
                        alert('Ganaste un 10% de descuento!');
                }, 100);
        }
}

function clickAction(e) {
        e.target.classList.contains('selected') ? addMissing() : removeMissing();
        e.target.classList.toggle('selected');
        check();
}