let url = `https://raw.githubusercontent.com/MileSantinoni/superheroes/main/superheroes.json`
fetch(url)
.then(response => response.json())
.then(data => {var superheroes = data;
  let cad2= ``

for(let elemento of superheroes){
    cad2= cad2+ `
    <div class="card">
        <div class="face front">
          <img src=${elemento.foto} alt="">
          <h3>${elemento.superheroe}</h3>
        </div>
        <div class="face back">
          <h3>${elemento.superheroe}</h3>
          <div class="datos">
          <p> Alias "${elemento.alias}"</p>
          <p>Primera aparición en ${elemento.primera_aparicion}</p>
          <ul>
          <h2>Oficios</h2>
          <li> ${elemento.ocupación[0]}</li>
          <li>${elemento.ocupación[1]}</li>
          </ul>
          </div>
        </div>
      </div>
      `
}
document.querySelector("#personajes").innerHTML=cad2
  console.log(superheroes);})
.catch(error => console.log(error))
