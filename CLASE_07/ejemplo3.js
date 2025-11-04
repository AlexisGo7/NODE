const getData = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/200");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log("error al obtener los datos", error);
  }
};
getData();
