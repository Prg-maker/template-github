function template_white(user, data) {
  // console.log(data.bio, data.email, data.followers, data.blog , data.location, data.public_repos)
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


function template_dark( user , data){

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="450" height="120" viewBox="0 0 450 120" xmlns="http://www.w3.org/2000/svg">
  <!-- Fundo com bordas arredondadas - versão dark -->
  <rect width="450" height="120" fill="#1e1e2e" rx="12" ry="12" stroke="#2d2d3a" stroke-width="1"/>
  
  <!-- Nome - tom claro para contraste -->
  <text x="20" y="35" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="#ffffff">
${user.charAt(0).toUpperCase() + user.slice(1)}
  </text>
  
  <!-- Título - azul mais vibrante para dark mode -->
  <text x="20" y="58" font-family="system-ui, sans-serif" font-size="14" font-weight="500" fill="#5f9eff">
    ${data.bio}
  </text>
  
  <!-- Descrição curta - tom de cinza mais suave -->
  <text x="20" y="80" font-family="system-ui, sans-serif" font-size="11" fill="#a0a0b0">
  Apaixonado por código e soluções inovadoras
  </text>
  
  <!-- Estatísticas em linha - tom de cinza intermediário -->
  <text x="20" y="100" font-family="system-ui, sans-serif" font-size="11" fill="#c0c0d0">
    📦 ${data.public_repos} repos  •  👥 ${data.followers} followers  •  📍${data.location}
  </text>

  <!-- Efeito sutil de brilho no fundo (opcional) -->
  <rect x="0" y="0" width="450" height="120" fill="url(#grad)" rx="12" ry="12" opacity="0.1"/>
  
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>`

}

export {
    template_dark,
    template_white,
}