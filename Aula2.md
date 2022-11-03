# Aula 02

## Aula 02

- [ ] Boas vindas
- [ ] Recap aula 01
- [ ] Comunidade Discord

---

---

# CSS

Introdução

---

## O que é CSS?

- Estilos para o HTML
- Cascading Style Sheets
  Folha de Estilo em Cascata
- Apresentação visual para o cliente

---

## Declaration

- **Declaração**
  Pedaço de código que irá ditar as propriedades e valores a serem aplicadas a um elemento HTML
- Como escrevemos ?

```css
body {
  background: black;
  /* color: green; Essa linha será ignorada */
}
```

---

## Cascading

- Cascata
  Quando há 2 (ou mais) declarações a última será mais relevante

```css
body {
  background: red;
}

body {
  background: blue;
}
```

---

## Specificity

- Especificidade
  Cada seletor tem um peso e a soma dos pesos, será levada em conta para que determinada declaração seja mais específica

```css
#id {
  /* peso 100 */
}
```

```css
.class {
  /* peso 10 */
}
```

```css
element {
  /* peso 1 */
}
```

> _A cascata perde prioridade e é priorizada a especificidade da declaração_

---

## Box Model

- Tudo são caixas
  Todos os elementos HTML serão considerados uma caixa, assim como uma caixa de papelão
- Caixas possuem determinadas propriedades
  Conteúdo, Largura, Altura, Borda, Preenchimento (espaço interno), Espaçamento (espaço externo)

![http://espezua.github.io/blog/imgs/boxmodel.png](http://espezua.github.io/blog/imgs/boxmodel.png)

---

---

## Alinhamento de mentalidade

- [ ] Evolução
- [ ] Prática
- [ ] Continue …

---

## Config para o VSCode

**.vscode/settings.json**

```json
{
  // editor
  "editor.wordWrap": "on",
  "editor.fontSize": 18,
  "editor.lineHeight": 30,
  "editor.tabSize": 2,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,

  // explorer
  "explorer.compactFolders": false,

  // workbench
  "workbench.editor.enablePreview": false,
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Omni",

  // prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.enable": true,
  "prettier.singleQuote": false,
  "prettier.tabWidth": 2,
  "prettier.semi": false,

  // terminal
  "terminal.integrated.fontSize": 16,
  "terminal.integrated.profiles.windows": {
    "Git Bash": {
      "source": "Git Bash"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "window.zoomLevel": 1
}
```

---

---

# CSS

Aplicando ao nosso projeto

---

---

## Encerramento

- [ ] 🎉 Celebra!
- [ ] Comunidade
- [ ] Chave [senha]
- [ ] O que ainda veremos?

---

## ↓ Baixar código da aula 02

[nlw.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a23a2bc-e22f-4a98-978e-36f7617ccaa4/nlw.zip)
