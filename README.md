# GitHub Profile Card SVG Generator 🚀

Uma API simples que gera cards SVG personalizados com informações de perfis do GitHub. Perfeito para usar em READMEs, sites pessoais ou portfólios!

## 📸 Exemplo do card (themas) gerado


<div align="center">
<p>
  ## 📊 Minhas estatísticas

</p>
<div >
  
  
  <img src="https://template-github-47jp.vercel.app/api?user=prg-maker" 
       alt="GitHub Profile Card" 
       width="450">

 
</div>

<div>
  
  
  <img src="https://template-github-47jp.vercel.app/api/dark?user=prg-maker" 
       alt="GitHub Profile Card" 
       width="450">

  
  <p>
    <i>✨ Card atualizado automaticamente com meus dados do GitHub ✨</i>
  </p>
</div>
</div>

## 🎯 Sobre o projeto

Este é um template de servidor Node.js que cria dinamicamente imagens SVG com dados de perfis do GitHub. Ao fazer uma requisição para a API com um nome de usuário, ela busca as informações na API pública do GitHub e retorna um card visual personalizado.

## ✨ Funcionalidades

- **Busca automática** de dados do GitHub (bio, seguidores, repositórios, localização)
- **Geração dinâmica** de imagens SVG em tempo real
- **Design limpo** com cantos arredondados e esquema de cores suave
- **Cache de 1 hora** para otimizar performance
- **Fácil integração** com qualquer página ou README


## 🎨 Design do card

O card gerado tem as seguintes características:

- **Dimensões**: 450x120 pixels
- **Bordas**: Arredondadas (12px de raio)
- **Cores**: Fundo claro (`#f8fafc`) com borda suave (`#e2e8f0`)
- **Tipografia**: Sistema de fonte nativo (system-ui, sans-serif)

### Informações exibidas:
- Nome do usuário (formatado)
- Bio do GitHub
- Mensagem fixa "Apaixonado por código e soluções inovadoras"
- Número de repositórios públicos
- Número de seguidores
- Localização

## 🌐 Como usar

Faça uma requisição GET para a URL base com o parâmetro `user`:

<pre> <code> 
    &lt;div align="center"&gt; 
    ## 📊 Minhas estatísticas 
        &lt;img src="https://template-github-47jp.vercel.app/api?user=prg-maker" alt="GitHub Profile Card" width="450"&gt; 
    &lt;p&gt; &lt;i&gt;✨ Card atualizado automaticamente com meus dados do GitHub ✨&lt;i&gt; &lt;/p&gt; 
    &lt;/div&gt; 
</code> </pre>