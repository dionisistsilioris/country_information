const countriesContainer = document.querySelector('.countries');
const getCountryData = function(country){
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();
request.addEventListener('load', function () {
  try{
    const data=JSON.parse(this.responseText);
    console.log(data);
    const html=`
    <div class="countries">
    <article class="country">
      <img class="country__img" width='300px' height='auto' src="${data[0].flag}" />
      <div class="country__data">
        <h3 class="country__name"> ${data[0].name}</h3>
        <h4 class="country__region"> ${data[0].region}</h4>
        <p class="country__row"><span>👫</span> ${data[0].population}</p>
        <p class="country__row"><span>🗣️</span> ${data[0].languages[0].name}</p>
        <p class="country__row"><span>💰</span> ${data[0].currencies[0].name}</p>
      </div>
    </article>
    </div>
    `;
    countriesContainer.innerHTML = html;
    countriesContainer.style.opacity.opacity=2;
  }catch{
html=`
<div class="error">div>
`
}



})
}
function loadCountry(){
let country=document.getElementById('country-name').value; 
getCountryData(country); 
}