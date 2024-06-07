document.getElementById('filme-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let titulo = document.getElementById('titulo').value;
    let diretor = document.getElementById('diretor').value;
    let ano = document.getElementById('ano').value;
    let novoFilme = document.createElement('li');
    novoFilme.textContent = ` O Título do seu filme é: ${titulo},  O Diretor  ${diretor},  O Ano: ${ano}`;
    document.getElementById('lista').appendChild(novoFilme);
    document.getElementById('filme-form').reset();
});
