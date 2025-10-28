/* =========================================================
SCRIPT: AutoRemoveBG.jsx
AUTOR: [Weslley Lobo]
DATA DE CRIAÇÃO: 27/10/2025
VERSÃO: 1.0

DESCRIÇÃO:
Este script automatiza o processo de remoção de fundo no Adobe Photoshop.
Ele faz o seguinte:

Lê todas as imagens da pasta "input_photoshop" localizada na área de trabalho.
Remove automaticamente o fundo usando o recurso "Selecionar Sujeito".
Recorta a imagem no tamanho do sujeito detectado.
Exporta o resultado em formato PNG (com transparência) para a pasta "output_photoshop".

SUPORTE A FORMATOS:
JPG, JPEG, PNG, WEBP, TIF, TIFF, BMP

OBSERVAÇÃO:
Se a pasta "input_photoshop" não existir, ela será criada automaticamente.
A pasta "output_photoshop" também será criada automaticamente se não existir.
========================================================= */

// === CONFIGURAÇÕES DE PASTAS ===

// Caminhos das pastas
var desktopPath = Folder.desktop;
var inputFolder = new Folder(desktopPath + "/input_photoshop");
var outputFolder = new Folder(desktopPath + "/output_photoshop");

// Verifica se a pasta de entrada existe
if (!inputFolder.exists) {
    inputFolder.create();
    alert("A pasta 'input_photoshop' foi criada na área de trabalho.\nPor favor, adicione as imagens nela e execute o script novamente.");
    // Encerra o script de forma limpa, sem erro
}

// Cria a pasta de saída, se não existir
if (!outputFolder.exists) {
    outputFolder.create();
}

// === PROCESSAMENTO DOS ARQUIVOS ===

// Lista todos os arquivos de imagem compatíveis
var files = inputFolder.getFiles(/\.(jpg|webp|jpeg|png|tif|tiff|bmp)$/i);

if (files.length === 0) {
    alert("Nenhuma imagem encontrada na pasta de entrada.");
} else {
    for (var i = 0; i < files.length; i++) {
        var inputFile = files[i];
        var doc = open(inputFile);

        // Garante modo RGB
        if (doc.mode != DocumentMode.RGB) {
            doc.changeMode(ChangeMode.RGB);
        }

        // Desbloqueia a camada de fundo para edição
        if (doc.activeLayer.isBackgroundLayer) {
            doc.activeLayer.isBackgroundLayer = false;
        }

        // Executa "Remover Fundo" (Selecionar Sujeito)
        var idautoCutout = stringIDToTypeID("autoCutout");
        executeAction(idautoCutout, undefined, DialogModes.NO);

        // Inverte seleção para pegar o fundo
        doc.selection.invert();
        doc.selection.clear();

        // Inverte de volta para pegar o sujeito
        doc.selection.invert();

        // Corta a imagem no tamanho da seleção
        var bounds = doc.selection.bounds;
        doc.crop(bounds);
        doc.selection.deselect();

        // === EXPORTA COMO PNG ===
        var outputFile = new File(outputFolder + "/" + inputFile.name.replace(/\.[^\.]+$/, "") + ".png");

        var pngOptions = new ExportOptionsSaveForWeb();
        pngOptions.format = SaveDocumentType.PNG;
        pngOptions.PNG8 = false; // Mantém 24 bits
        pngOptions.transparency = true;
        pngOptions.interlaced = false;
        pngOptions.quality = 100;

        doc.exportDocument(outputFile, ExportType.SAVEFORWEB, pngOptions);

        // Fecha o documento sem salvar alterações no PSD original
        doc.close(SaveOptions.DONOTSAVECHANGES);
    }

    alert("Processamento concluído! Imagens salvas em: " + outputFolder.fsName);
}
