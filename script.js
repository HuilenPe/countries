const countryList = document.getElementById('country-list');  //hacer referencia al HTML
function getCountry() { //funcion para obtener los paises
  fetch('https://restcountries.com/v3.1/all')//hacer la peticion
    .then(response => response.json())//convertir la respuesta a json
    .then(paises => {//recorrer el json
      console.log(paises);//imprimir en consola

      paises.forEach(pais => {//recorrer el json
        const list = document.createElement('li'); //crear un elemento li
        list.textContent = pais.name.common;//agregar el nombre del pais

        const flagImg = document.createElement('img');//crear un elemento img
        flagImg.src = pais.flags.png;//agregar la imagen del pais

        list.appendChild(flagImg);//agregar la imagen al li
        countryList.appendChild(list);//agregar el li al ul
      });
    })
    .catch(error => console.error(error));//imprimir el error en consola
}

getCountry();  //llamar a la funcion