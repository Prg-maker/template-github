import express from 'express'
const router = express.Router()
import axios from 'axios'
import {
  template_dark,
  template_white
} from '../templates_github/themes.js'




router.get('/api/dark', async (req, res) => {
    let usuario = req.query.user;
    usuario = "prg-maker"
    
    if (!usuario) {
        return res.status(400).send('❌ Erro: Parâmetro "user" é obrigatório!');
    }
    try{
        const resposta = await axios.get(`https://api.github.com/users/${usuario}`);
        const svg = template_dark(usuario, resposta.data);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.send(svg);
    }catch(err){
      return err
    }

        
});

router.get('/api', async (req, res) => {
    let usuario = req.query.user;
    usuario= 'prg-maker'
    if (!usuario) {
        return res.status(400).send('❌ Erro: Parâmetro "user" é obrigatório!');
    }
    try{
        const resposta = await axios.get(`https://api.github.com/users/prg-maker`);
        const svg = template_white(usuario, resposta.data);

        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', 'public, max-age=3600'); 
        res.send(svg);
    }catch(err){
      return err
    }

        
});

router.get("/" , (request , response)=> {
    response.send("Hello Word!")    
})

export default router