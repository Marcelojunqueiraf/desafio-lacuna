// Esse script foi utilizado para testar a API de forma end to end, simulando um cliente

const axios = require('axios');

// Base URL of the API
const BASE_URL = 'http://localhost:3000';

// Example usage
(async () => {
  // lista ingredientes (vazia)
  console.log('Listando ingredientes (vazia)');
  const ingredientes = await axios.get(`${BASE_URL}/ingredientes`);
  console.log(ingredientes.data);

  // adiciona ingredientes
  console.log('Adicionando ingredientes');
  await axios.post(`${BASE_URL}/ingredientes`, {
    nome: 'Arroz',
    unidade: 'kg',
  });

  await axios.post(`${BASE_URL}/ingredientes`, {
    nome: 'Feijão',
    unidade: 'kg',
  });
  await axios.post(`${BASE_URL}/ingredientes`, {
    nome: 'Carne',
    unidade: 'kg',
  });

  // lista ingredientes (com dados)
  console.log('Listando ingredientes (com dados)');
  const ingredientesComDados = await axios.get(`${BASE_URL}/ingredientes`);
  console.log(ingredientesComDados.data);

  // get ingrediente especifico
  console.log('Get ingrediente 1');
  const ingrediente = await axios.get(`${BASE_URL}/ingredientes/1`);
  console.log(ingrediente.data);

  // atualiza ingrediente
  console.log('Atualizando ingrediente 1');
  await axios.patch(`${BASE_URL}/ingredientes/1`, {
    nome: 'Arroz',
    unidade: 'g',
  });

  // remove ingrediente
  console.log('Removendo ingrediente 2');
  await axios.delete(`${BASE_URL}/ingredientes/2`);

  // lista ingredientes
  console.log('Listando ingredientes (atualizado)');
  const ingredientesAtualizados = await axios.get(`${BASE_URL}/ingredientes`);
  console.log(ingredientesAtualizados.data);

  // lista receitas (sem dados)
  console.log('Listando receitas (vazia)');
  const receitas = await axios.get(`${BASE_URL}/receitas`);
  console.log(receitas.data);

  // adiciona receitas
  console.log('Adicionando receitas');
  await axios.post(`${BASE_URL}/receitas`, {
    nome: 'Arroz com Feijão',
    modoDePreparo:
      'Coloque o arroz e o feijão na panela e cozinhe por 20 minutos',
  });
  await axios.post(`${BASE_URL}/receitas`, {
    nome: 'Carne Assada',
    modoDePreparo: 'Coloque a carne na assadeira e asse por 1 hora',
  });
  await axios.post(`${BASE_URL}/receitas`, {
    nome: 'Salada',
    modoDePreparo: 'Misture os ingredientes e sirva',
  });

  // lista receitas (com dados)
  console.log('Listando receitas (com dados)');
  const receitasComDados = await axios.get(`${BASE_URL}/receitas`);
  console.log(receitasComDados.data);

  // get receita 1
  console.log('Get receita 1');
  const receita = await axios.get(`${BASE_URL}/receitas/1`);
  console.log(receita.data);

  // atualiza receita 2
  console.log('Atualizando receita 2');
  await axios.patch(`${BASE_URL}/receitas/2`, {
    nome: 'Carne Assada com Batatas',
    modoDePreparo: 'Uma receita deliciosa de carne assada com batatas',
  });

  // remove receita 3
  console.log('Removendo receita 3');
  await axios.delete(`${BASE_URL}/receitas/3`);

  // lista receitas
  console.log('Listando receitas (atualizado)');
  const receitasAtualizadas = await axios.get(`${BASE_URL}/receitas`);
  console.log(receitasAtualizadas.data);

  // adiciona ingredientes
  console.log('Adicionando ingredientes a receita 1');
  await axios.post(`${BASE_URL}/receitas/1/ingredientes`, {
    ingredienteId: 1,
    quantidade: 2,
  });
  await axios.post(`${BASE_URL}/receitas/1/ingredientes`, {
    ingredienteId: 3,
    quantidade: 1,
  });

  // get receita com ingredientes
  console.log('Get receita 1 com ingredientes');
  const receitaComIngredientes = await axios.get(`${BASE_URL}/receitas/1`);
  console.log(receitaComIngredientes.data);

  // remove ingrediente 2 da receita 1
  console.log('Removendo ingrediente 3 da receita 1');
  await axios.delete(`${BASE_URL}/receitas/1/ingredientes/3`);

  // get receita 1
  console.log('Listando receita 1 (atualizado)');
  const receitaAtualizada = await axios.get(`${BASE_URL}/receitas/1`);
  console.log(receitaAtualizada.data); 

})().catch((error) => {
    console.error('Error:', error.message);
});