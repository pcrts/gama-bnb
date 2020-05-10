var ul = document.getElementById('locais');
var url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

fetch(url)
.then(function(response){
  response.json().then(function(data){
    console.log(data); 
    var resultados = data; 
    return resultados.map(function(local) { 
    let li = document.createElement('li'),
        img = document.createElement('img'),
        tipo = document.createElement('div'),
        nome = document.createElement('div'),
        preco = document.createElement('div'),
        infos = document.createElement('div'),
        valor = document.createElement('div');

    img.setAttribute("class", "foto"); 
    tipo.setAttribute("class", "tipo");
    nome.setAttribute("class", "nome");
    preco.setAttribute("class", "preco"); 
    infos.setAttribute("class", "infos"); 
    valor.setAttribute("class", "valor");   
    img.src = local.photo;  
    tipo.innerHTML = local.property_type;
    nome.innerHTML = local.name;
    preco.innerHTML = "R$ " + "<strong>"+local.price+"</strong>" + "/dia";
        ul.appendChild(li); 
        li.appendChild(img);
        li.appendChild(infos);
        infos.appendChild(tipo);
        infos.appendChild(nome);
         infos.appendChild(valor);
        valor.appendChild(preco);
    })
    });
  });



 