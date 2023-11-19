function downloadPDF() {
    // Substitua 'caminho/para/seu/arquivo.pdf' pelo caminho real do seu arquivo PDF.
    var pdfUrl = 'Currículo 2023.pdf';
    
    // Cria um elemento <a> temporário e simula o clique para iniciar o download.
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Currículo 2023.pdf';
    link.click();
}