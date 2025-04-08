// blogArtigo.js - Arquivo de dados/modelo
const artigos = {
    '1': {
      id: '1',
      title: 'Como cuidar da pele seca',
      content: [
        {
          title: '1. Limpeza suave',
          text: 'Evite sabonetes agressivos e prefira produtos de limpeza hidratantes...'
        },
        // ... outros tópicos
      ],
      conclusion: 'Com esses cuidados simples, sua pele seca ficará muito mais saudável e radiante!'
    },
    '2': {
      // Outro artigo...
    }
  };
  
  export const getArtigoById = (id) => {
    return artigos[id] || null;
  };
  
  export default artigos;