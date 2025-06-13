const formInscricao = document.getElementById('inscricao-form');
if (formInscricao) {
  formInscricao.addEventListener('submit', function (e) {

    e.preventDefault();

    const submitButton = formInscricao.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;


    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';


    fetch('https://sheetdb.io/api/v1/k5klar8c0jpme', {
        method: 'POST',
        body: new FormData(formInscricao),
    })
    .then(response => response.json()) 
    .then(data => {

        if (data.created === 1) {
            alert('Inscrição realizada com sucesso!');
            formInscricao.reset();
        } else {

            alert('Ocorreu um erro. Verifique os dados e tente novamente.');
        }
    })
    .catch(error => {

        console.error('Erro:', error);
        alert('Ocorreu um erro de conexão. Tente novamente mais tarde.');
    })
    .finally(() => {

        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    });
  });
}