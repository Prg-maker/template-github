import express from 'express'
import axios from 'axios'


const app = express()

function gerarSVG(user , data){
    console.log(data.bio, data.email, data.followers, data.blog , data.location, data.public_repos)
    //https://api.github.com/users/Prg-maker/repos
    console.log(data)
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="450" height="120" viewBox="0 0 450 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Fundo com bordas arredondadas -->
  <rect width="450" height="120" fill="#f8fafc" rx="12" ry="12" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Nome -->
  <text x="20" y="35" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="#0f172a">
${user.charAt(0).toUpperCase() + user.slice(1)}
  </text>
  
  <!-- Título -->
  <text x="20" y="58" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#3b82f6">
    ${data.bio}
  </text>
  
  <!-- Descrição curta -->
  <text x="20" y="80" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">
  Apaixonado por código e soluções inovadoras
  </text>
  
  <!-- Estatísticas em linha -->
  <text x="20" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#475569">
    📦 ${data.public_repos} repos  •  👥 ${data.followers} followers  •  📍${data.location}
  </text>


</svg>`;
}



app.get('/api', async (req, res) => {
    let usuario = req.query.user;
    usuario = "prg-maker"
    if (!usuario) {
        return res.status(400).send('❌ Erro: Parâmetro "user" é obrigatório!');
    }
    try{
        const resposta = await axios.get(`https://api.github.com/users/${usuario}`);
        const svg = gerarSVG(usuario, resposta.data);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache de 1 hora
        res.send(svg);
    }catch(err){
      return err
    }

        
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});