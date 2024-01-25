function meuScript () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {

    evento.preventDefault();

    const Nome = form.querySelector('.nome');
    const Sobrenome = form.querySelector('.sobrenome');
    const Altura = form.querySelector('.altura');
    const Peso = form.querySelector('.peso');

    pessoas.push({
        Nome: Nome.value,
        Sobrenome: Sobrenome.value,
        Altura: Altura.value,
        Peso: Peso.value,
    })

    console.log(pessoas);

    resultado.innerHTML += `<p>${Nome.value} ${Sobrenome.value}` + `${Altura.value} ${Peso.value} </p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuScript ();
