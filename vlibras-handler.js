document.addEventListener('DOMContentLoaded', function() {
    var widget = new window.VLibras.Widget('https://vlibras.gov.br/app');

    // Verificar se o VLibras deve ser ativado
    if (localStorage.getItem('vlibras-enabled')) {
        setTimeout(function() {
            var vlibrasButton = document.querySelector('[vw-access-button]');
            if (vlibrasButton) {
                vlibrasButton.click();
            }
        }, 2000);
    }

    // Escutar quando o VLibras é ativado ou desativado
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.getAttribute('vw-access-button') !== null) {
            if (localStorage.getItem('vlibras-enabled')) {
                localStorage.removeItem('vlibras-enabled');
            } else {
                localStorage.setItem('vlibras-enabled', 'true');
            }
        }
    });
});
