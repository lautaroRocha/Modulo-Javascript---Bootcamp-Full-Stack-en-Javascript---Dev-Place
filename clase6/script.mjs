//modulo para usar API fetch desde node
import fetch from 'node-fetch'

async function getUserFromGitHub(username){
    console.log('empiezo...');
    let url = "https://api.github.com/users/" + username;
    const respo = await fetch(url);
    const datos = await respo.json();
    console.log(datos);
    console.log('ya terminé!!')
    return datos
}

getUserFromGitHub('lautaroRocha')