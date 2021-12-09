import fetch from 'node-fetch'

let params = {
    'action':'query',
    'format': 'json',
    'list': 'categorymembers',
    'cmtitle': 'Flokkur%3AOr%C3%B0ab%C3%B3k%20A-%C3%96',
    'cmcontinue': '',
    'cmlimit': '5', //1-1000 eða max
};
let url = 'https://is.signwiki.org/api.php?'

Object.keys(params).forEach(key=>{
    url += key + '=' + params[key] + '&';
})
url = url.slice(0,url.length-1)
console.log(url);

// let url = 'https://is.signwiki.org/api.php?action=query&format=json&list=categorymembers&cmtitle=Flokkur%3AOr%C3%B0ab%C3%B3k%20A-%C3%96&cmcontinue=&cmlimit=max'

let data;
await fetch(url).then(res=>res.json()).then(json=>data = json)

console.log(data.query.categorymembers);

let signs = [];

data.query.categorymembers.forEach(sign => {
    let title = sign.title;
    let signurl = 'https://is.signwiki.org/index.php?curid=' + sign.pageid;
    signs.push({title,signurl})
})

console.log(signs);