const promesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve('La promesa se cumplió');
  } else {
    reject('La promesa no se cumplió');
  }
});

promesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
