const countryList = document.getElementById('country-list');  //hacer referencia al HTML
function getCountry() { 
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(paises => {
      console.log(paises);

      paises.forEach(pais => {
        const list = document.createElement('li');
        list.textContent = pais.name.common;

        const flagImg = document.createElement('img');
        flagImg.src = pais.flags.png;

        list.appendChild(flagImg);
        countryList.appendChild(list);
      });
    })
    .catch(error => console.error(error));
}

getCountry();  