async function requestItem(item){
    const request = await fetch('https://api.tarkov.dev/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query: `{
        items(name: "`+item+`") {
            id
            name
            shortName
            basePrice
            avg24hPrice
            low24hPrice
            high24hPrice
            iconLink
        }
    }`})
    })
    .then(r => r.json())
    .then(data = function(data){
        return data.data.items;
    });

    return request;
}

async function getItem(item){
    let result = null;

    result = await requestItem(item);
    
    return result;
}