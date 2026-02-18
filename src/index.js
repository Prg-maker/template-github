import express from 'express'
import axios from 'axios'


const app = express()

function gerarSVG(user ){

   return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="1280" height="320" viewBox="0 0 1280 320" xmlns="http://www.w3.org/2000/svg"   xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs >
    <!-- Background gradient -->
    
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%" >
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#f3f3f5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ececf0;stop-opacity:1" />
    </linearGradient>
    
    <!-- Blur filters -->
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
    </filter>
    
    <!-- Grid pattern -->
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#030213" stroke-width="1" opacity="0.05"/>
    </pattern>
    
    <!-- Corner gradient 1 -->
    <radialGradient id="corner1" cx="100%" cy="0%" r="100%">
      <stop offset="0%" style="stop-color:#030213;stop-opacity:0.03" />
      <stop offset="100%" style="stop-color:#030213;stop-opacity:0" />
    </radialGradient>
    
    <!-- Corner gradient 2 -->
    <radialGradient id="corner2" cx="0%" cy="100%" r="100%">
      <stop offset="0%" style="stop-color:#d4183d;stop-opacity:0.03" />
      <stop offset="100%" style="stop-color:#d4183d;stop-opacity:0" />
    </radialGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1280" height="320" fill="url(#bgGradient)"/>
  
  <!-- Background blur elements -->
  <g opacity="0.2">
    <circle cx="144" cy="72" r="64" fill="#030213" filter="url(#blur)"/>
    <circle cx="1120" cy="280" r="80" fill="#717182" filter="url(#blur)"/>
    <circle cx="640" cy="160" r="72" fill="#e9ebef" filter="url(#blur)"/>
  </g>
  
  <!-- Grid pattern overlay -->
  <rect width="1280" height="320" fill="url(#grid)"/>
  
  <!-- Decorative corners -->
  <ellipse cx="1216" cy="64" rx="200" ry="200" fill="url(#corner1)"/>
  <ellipse cx="64" cy="256" rx="150" ry="150" fill="url(#corner2)"/>
  
  <!-- Main Content -->
  <g transform="translate(64, 0)">
    
    <!-- Top Icons Group -->
    <g transform="translate(0, 40)">
      <!-- Code2 Icon -->
      <g>
        <polyline points="6,6 0,12 6,18" stroke="#030213" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="10,6 16,12 10,18" stroke="#030213" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="18" y1="6" x2="24" y2="18" stroke="#030213" stroke-width="2" stroke-linecap="round"/>
      </g>
      
      <!-- Sparkles Icon -->
      <g transform="translate(44, 4)">
        <polygon points="12,2 13.5,7 18,8.5 13.5,10 12,14.5 10.5,10 6,8.5 10.5,7" fill="#d4183d"/>
        <circle cx="18" cy="4" r="1.5" fill="#d4183d"/>
        <circle cx="6" cy="16" r="1.5" fill="#d4183d"/>
      </g>
    </g>
    
    <!-- Name -->
    <text x="0" y="120" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="700" fill="#030213">
      ${user}
    </text>
    
    <!-- Terminal Icon + Title Group -->
    <g transform="translate(0, 155)">
      <!-- Terminal Icon -->
      <rect x="0" y="0" width="20" height="16" rx="2" stroke="#030213" stroke-width="2" fill="none"/>
      <polyline points="5,5 9,8 5,11" stroke="#030213" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="11" y1="11" x2="15" y2="11" stroke="#030213" stroke-width="2" stroke-linecap="round"/>
      
      <!-- Title Text -->
      <text x="28" y="16" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="500" fill="#2f81f7">
        Desenvolvedor Full Stack
      </text>
    </g>
    
    <!-- Description (multi-line support) -->
    <g transform="translate(0, 205)">
      <text x="0" y="0" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="400" fill="#717182">Apaixonado por criar soluções inovadoras e transformar ideias em código.</text>
    </g>
 
    <!-- Social Media Icons -->
    <g transform="translate(0, 240)">
      <!-- GitHub -->
      <circle cx="20" cy="20" r="20" fill="#ececf0"/>
      <g transform="translate(10, 10)">
        <path d="M10,0 C4.477,0 0,4.477 0,10 C0,14.418 2.865,18.166 6.839,19.489 C7.339,19.579 7.521,19.267 7.521,18.997 C7.521,18.755 7.512,18.047 7.507,17.119 C4.726,17.717 4.139,15.847 4.139,15.847 C3.685,14.679 3.029,14.368 3.029,14.368 C2.121,13.753 3.098,13.765 3.098,13.765 C4.101,13.837 4.629,14.794 4.629,14.794 C5.521,16.316 6.97,15.874 7.539,15.613 C7.631,14.962 7.889,14.521 8.175,14.266 C5.955,14.009 3.62,13.163 3.62,9.373 C3.62,8.292 4.01,7.411 4.649,6.721 C4.546,6.463 4.203,5.464 4.747,4.103 C4.747,4.103 5.586,3.829 7.497,5.106 C8.31,4.881 9.16,4.769 10.01,4.764 C10.86,4.769 11.71,4.881 12.524,5.106 C14.434,3.829 15.272,4.103 15.272,4.103 C15.817,5.464 15.474,6.463 15.371,6.721 C16.011,7.411 16.398,8.292 16.398,9.373 C16.398,13.173 14.058,14.006 11.831,14.259 C12.191,14.572 12.512,15.189 12.512,16.132 C12.512,17.488 12.501,18.581 12.501,18.997 C12.501,19.269 12.681,19.584 13.188,19.488 C17.165,18.163 20.029,14.417 20.029,10 C20.029,4.477 15.523,0 10,0 Z" fill="#030213"/>
      </g>
      
      <!-- LinkedIn -->
      <circle cx="76" cy="20" r="20" fill="#ececf0"/>
      <g transform="translate(66, 10)">
        <path d="M16,8 C18.209,8 20,9.791 20,12 L20,20 L16,20 L16,12 C16,10.895 15.105,10 14,10 C12.895,10 12,10.895 12,12 L12,20 L8,20 L8,12 C8,9.791 9.791,8 12,8 L16,8 Z" fill="#030213"/>
        <rect x="2" y="8" width="4" height="12" fill="#030213"/>
        <circle cx="4" cy="4" r="2" fill="#030213"/>
      </g>
      
     
      
      <!-- Mail -->
      <circle cx="132" cy="20" r="20" fill="#ececf0"/>
      <g transform="translate(122, 10)">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#030213" stroke-width="2" fill="none"/>
        <polyline points="2,6 12,13 22,6" stroke="#030213" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </g>
  </g>
  <rect width="1280" height="320" fill="none" stroke="none" rx="20" ry="20" style="pointer-events: none;"/>
</svg>`;
}



app.get('/api', async (req, res) => {
    const usuario = req.query.user;
    if (!usuario) {
        return res.status(400).send('❌ Erro: Parâmetro "user" é obrigatório!');
    }
    try{
        const resposta = await axios.get(`https://api.github.com/users/${usuario}`);
        const svg = gerarSVG(usuario, resposta.data);

        console.log(resposta)
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