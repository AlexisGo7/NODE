const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.static('public'));

const getCocktailData = async () => {
  try {
    const numCocktails = 5; // cuántos cócteles traer
    const cocktails = [];

    for (let i = 0; i < numCocktails; i++) {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await res.json();
      cocktails.push(data.drinks[0]);
    }

    // generar cards dinámicas con datos de receta
    const cardsHTML = cocktails.map(drink => {
      // armar lista de ingredientes
      const ingredientes = [];
      for (let i = 1; i <= 15; i++) {
        const ing = drink[`strIngredient${i}`];
        const medida = drink[`strMeasure${i}`];
        if (ing) ingredientes.push(`${medida || ''} ${ing}`);
      }

      return `
        <div class="card" 
             data-name="${drink.strDrink}" 
             data-img="${drink.strDrinkThumb}" 
             data-instructions="${drink.strInstructions?.replace(/"/g, '&quot;') || 'Sin instrucciones'}"
             data-ingredients="${ingredientes.join(', ').replace(/"/g, '&quot;')}">

          <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
          <h2>${drink.strDrink}</h2>
          <p><strong>${drink.strCategory}</strong></p>
          <p>${drink.strAlcoholic}</p>
        </div>
      `;
    }).join('');

    // leer plantilla HTML y reemplazar marcador
    const htmlTemplate = fs.readFileSync('./public/plantilla.html', 'utf-8')
      .replace('<!-- cards -->', cardsHTML);

    // generar archivo final
    fs.writeFileSync('./public/datosApi.html', htmlTemplate);
    console.log('✅ Archivo datosApi.html creado exitosamente');
  } catch (error) {
    console.error('❌ Error al obtener datos:', error);
  }
};

// ejecutar y lanzar servidor
getCocktailData().then(() => {
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/datosApi.html');
  });
});

app.listen(port, () => console.log(`🚀 Servidor corriendo en http://localhost:${port}`));
