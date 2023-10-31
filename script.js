let listaHorariosEntrada = document.getElementById('horariosEntrada');
let listaHorariosSaida = document.getElementById('horariosSaida');

function registrarEntrada() {
    const now = new Date();
    const horaAtual = now.toLocaleString('pt-BR');
    const horaInicioPico = new Date(document.getElementById("horaInicioPico").value);
    const horaFinalPico = new Date(document.getElementById("horaFinalPico").value);
    const sensorEntrada = document.getElementById("sensorEntrada").value;
    const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;
    let contagemPessoas = parseFloat(document.getElementById("contagemPessoas").textContent);
    let totalPessoas = parseFloat(document.getElementById("totalPessoas").textContent);
    let totalPico = parseFloat(document.getElementById("totalPico").textContent);
    let contador = parseFloat(document.getElementById("contador").textContent);

    if (now >= horaInicioPico && now <= horaFinalPico && sensorEntrada === "sim" && viagemEmAndamento === "sim") {
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
    const now = new Date();
    const horaAtual = now.toLocaleString('pt-BR');
    const horaInicioPico = new Date(document.getElementById("horaInicioPico").value);
    const horaFinalPico = new Date(document.getElementById("horaFinalPico").value);
    const sensorSaida = document.getElementById("sensorSaida").value;
    const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;
    let contagemPessoas = parseFloat(document.getElementById("contagemPessoas").textContent);
    let contador = parseFloat(document.getElementById("contador").textContent);

    if (now >= horaInicioPico && now <= horaFinalPico && sensorSaida === "sim" && viagemEmAndamento === "sim" && contagemPessoas >= contador) {
        contagemPessoas -= contador;
    }

    document.getElementById("contagemPessoas").textContent = contagemPessoas.toString();

    const item = document.createElement('li');
    item.appendChild(document.createTextNode(`Saída: ${horaAtual} - ${contador} pessoa(s)`));
    listaHorariosSaida.appendChild(item);
}
