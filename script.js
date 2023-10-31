let listaHorariosEntrada = document.getElementById('horariosEntrada');
let listaHorariosSaida = document.getElementById('horariosSaida');

function getHoraAtual() {
    const now = new Date();
    return now.toLocaleString('pt-BR');
}

function getHoraInicioPico() {
    const horaInicioPico = document.getElementById("horaInicioPico").value;
    const now = new Date();
    return `${now.toLocaleDateString('pt-BR')} ${horaInicioPico}`;
}

function getHoraFinalPico() {
    const horaFinalPico = document.getElementById("horaFinalPico").value;
    const now = new Date();
    return `${now.toLocaleDateString('pt-BR')} ${horaFinalPico}`;
}



function registrarEntrada() {
    const horaAtual = getHoraAtual();
    const horaInicioPico = getHoraInicioPico();
    const horaFinalPico = getHoraFinalPico();
    const sensorEntrada = document.getElementById("sensorEntrada").value;
    const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;
    let contagemPessoas = parseFloat(document.getElementById("contagemPessoas").textContent);
    let totalPessoas = parseFloat(document.getElementById("totalPessoas").textContent);
    let totalPico = parseFloat(document.getElementById("totalPico").textContent);
    let contador = parseFloat(document.getElementById("contador").textContent);

    if (horaAtual >= horaInicioPico && horaAtual <= horaFinalPico && sensorEntrada === "sim" && viagemEmAndamento === "sim") {
        contagemPessoas += contador;
        totalPico += contador;
        totalPessoas = Math.max(contagemPessoas, totalPessoas);
    }

    document.getElementById("contagemPessoas").textContent = contagemPessoas.toString();
    document.getElementById("totalPessoas").textContent = totalPessoas.toString();
    document.getElementById("totalPico").textContent = totalPico.toString();

    const item = document.createElement('li');
    item.appendChild(document.createTextNode(`Entrada: ${horaAtual}- ${contador} pessoa(s)`));
    listaHorariosEntrada.appendChild(item);
}

function registrarSaida() {
    const horaAtual = getHoraAtual();
    const horaInicioPico = getHoraInicioPico();
    const horaFinalPico = getHoraFinalPico();
    const sensorSaida = document.getElementById("sensorSaida").value;
    const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;
    let contagemPessoas = parseFloat(document.getElementById("contagemPessoas").textContent);
    let contador = parseFloat(document.getElementById("contador").textContent);

    if (horaAtual >= horaInicioPico && horaAtual <= horaFinalPico && sensorSaida === "sim" && viagemEmAndamento === "sim" && contagemPessoas > 0) {
        contagemPessoas -= contador;
    }

    document.getElementById("contador").textContent = contagemPessoas.toString();

    const item = document.createElement('li');
    item.appendChild(document.createTextNode(`Saída: ${horaAtual} - ${contador} pessoa(s)`));
    listaHorariosSaida.appendChild(item);
}
