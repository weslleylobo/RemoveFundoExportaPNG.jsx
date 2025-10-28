# 🪄 AutoRemoveBG.jsx

Script em **JavaScript para Adobe Photoshop** que automatiza o processo de **remoção de fundo e exportação em PNG**.
Ideal para quem precisa processar várias imagens de forma rápida, mantendo apenas o sujeito com transparência.

---

## 📄 Descrição

O **AutoRemoveBG.jsx** faz o seguinte:

1. Lê automaticamente todas as imagens da pasta `input_photoshop` localizada na área de trabalho.
2. Remove o fundo usando o comando interno “Selecionar Sujeito” do Photoshop.
3. Recorta a imagem no tamanho do sujeito detectado.
4. Exporta o resultado como **PNG com transparência** para a pasta `output_photoshop`.

---

## 🧩 Funcionalidades

* Processamento em lote (várias imagens de uma vez).
* Remoção automática de fundo.
* Exportação otimizada em PNG 24 bits com transparência.
* Criação automática da pasta de saída.
* Compatibilidade com vários formatos de imagem.

---

## 🖼️ Formatos Suportados

`JPG`, `JPEG`, `PNG`, `WEBP`, `TIF`, `TIFF`, `BMP`

---

## ⚙️ Instruções de Uso

1. **Crie duas pastas** na área de trabalho:

   * `input_photoshop` → coloque dentro as imagens que deseja processar.
   * `output_photoshop` → será criada automaticamente se não existir.

2. **Abra o Adobe Photoshop.**

3. Vá em:

   ```
   Arquivo > Scripts > Procurar...
   ```

   E selecione o arquivo `AutoRemoveBG.jsx`.

4. O script processará todas as imagens e salvará os arquivos recortados em:

   ```
   /Desktop/output_photoshop
   ```

---

## 📅 Informações

* **Autor:** Weslley Lobo
* **Data de criação:** 27/10/2025
* **Versão:** 1.0
* **Compatibilidade:** Adobe Photoshop CC 2025

---

## ⚠️ Observações

* O desempenho pode variar conforme a complexidade das imagens e a versão do Photoshop.
* Recomenda-se usar imagens bem iluminadas e com contraste claro entre fundo e sujeito para melhores resultados.
* O script **não altera os arquivos originais** — apenas gera novas cópias em PNG.

---

## 📜 Licença

Este projeto é distribuído sob a licença **MIT**.
Sinta-se à vontade para usar, modificar e compartilhar.

---
