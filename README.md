# TizGon Landing

Landing page moderna inspirada em vitrines de produto premium. Construída com HTML + CSS + JS (sem build). Marca TizGon sempre aparente.

## Pré‑visualização
- Abra `index.html` direto no navegador; ou
- Use a extensão Live Server do VS Code para auto‑reload.

## Estrutura
```
assets/
  logo.png      # sua marca (TizGon)
  moto.jpg      # imagem destaque
index.html      # marcação da página
styles.css      # estilos mobile‑first
script.js       # tema, menu, animações leves
```

## Como editar
- Textos e seções: `index.html`.
- Cores e layout: `styles.css` (variáveis em `:root`).
- Tema claro/escuro e menu mobile: `script.js`.

## GitHub Pages (deploy)
1. Faça push do repositório para o GitHub.
2. No repositório, vá em `Settings > Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Escolha a branch (ex.: `main`) e a pasta `/root`.
5. Salve; aguarde a URL `https://<usuario>.github.io/<repo>/`.

## Personalização rápida
- Trocar acento de cor: altere `--accent` em `styles.css`.
- Trocar imagem: substitua `assets/moto.jpg` (ideal 1600px de largura) e, se quiser, converta para WebP.
- CTA do WhatsApp: atualize o número em `index.html` (link `wa.me`).

## Acessibilidade e performance
- Mobile‑first com `clamp()` para tipografia fluida.
- Estados de foco visíveis e suporte a `prefers-reduced-motion`.
- Imagem principal com `decoding="async"`.

## Licença
Uso interno TizGon. Ajuste conforme sua necessidade.
