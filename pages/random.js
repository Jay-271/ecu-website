fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => document.getElementById('cat-fact').innerHTML = data.fact)
    .catch(error => console.error('Error:', error));