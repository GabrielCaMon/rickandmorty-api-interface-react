import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
    <App/>, document.getElementById('root'), 
);

function createNode(element)
{
    return document.createElement(element);
}

function append(parent,el)
{
    return parent.appendChild(el);
}
const ul = document.getElementById("authors");

const url = '`https://rickandmortyapi.com/api/character/?page=${Math.floor(Math.random() * 20 + 1)}`';

fetch(url)
.then((resp) => resp.json())
.then(function(data){
    let authors = data.results;
    return authors.map(function(author){
        let li = createNode('div'),
        img = createNode('img'),
        figure = createNode('figure'),
        figcaption = createNode('figcaption'),
        span = createNode('span');
        figcaption.innerHTML=`<span id = "nomeChar">${author.name}</span></br> <span id = "subNome">Id:  ${author.id} - ${author.created} </span>`;
        img.src= author.image;
        span.innerHTML=`
        
        <table id="tabelaEspec">

       
<tr><td class="ce">Status: </td><td class="cd">${author.status}</td></tr>
   
<tr><td class="ce">Espécie: </td><td class="cd">${author.species}</td></tr>
<tr><td class="ce">Tipo: </td><td class="cd">${author.type}</td></tr>
<tr><td class="ce">Gênero: </td><td class="cd">${author.gender}</td></tr>
<tr><td class="ce">Origem: </td><td class="cd">${author.origin.name}</td></tr>
<tr><td class="ce">Localização: </td><td class="cd">${author.location.name}</td></tr>
</table>

        `;
            
        append(li,figure);
        append(figure,img);
        append(figure,figcaption);
        append(li,span);
        append(ul,li);
        
    });
})
.catch(function(error){
    console.log(JSON.stringify(error));
});

