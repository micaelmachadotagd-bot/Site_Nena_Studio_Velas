# Nena Studio — Site

## Estrutura
- index.html — página inicial (com 3 peças em destaque)
- loja.html — coleção completa (10 peças)
- sobre.html — história e missão da marca
- contactos.html — contactos e redes sociais
- css/style.css — estilos
- js/script.js — menu mobile e pequenos detalhes de interação
- imagens/ — fotos reais dos produtos

## Como adicionar um produto novo
1. Coloca a foto na pasta `imagens/` (nome sem espaços, ex: `vela-nova.jpg`)
2. Em `loja.html`, copia um bloco `<article class="card">...</article>` inteiro, cola-o antes do `</div>` que fecha `.cards`, e muda:
   - o `src` da imagem
   - o `alt` (descrição curta da imagem)
   - o `<h3>` (nome do produto)
   - o `<p class="desc">` (descrição)
   - o texto depois de `?text=` no link do WhatsApp (usa um site como urlencoder.org para converter o texto da mensagem)
3. Se quiseres que apareça também na página inicial como destaque, faz o mesmo em `index.html`.

## Contacto / botão "Perguntar"
Os botões "Perguntar" abrem o WhatsApp (+351 917 695 757) com uma mensagem já escrita a perguntar sobre aquela peça específica. Não há carrinho nem pagamento automático — a venda é sempre combinada diretamente contigo.

## Como publicar as alterações no GitHub
No terminal do VS Code, dentro da pasta do projeto:
```bash
git add .
git commit -m "Atualização do site"
git push
```
