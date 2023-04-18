function advisor() {

    const apiurl = "http://localhost:1337";

    fetch('http://localhost:1337/api/authors/?populate=*'
    )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.data[0].attributes.author)
            console.log(data.data.length)


 function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }

               
                var i = getRandomInt(data.data.length);

                console.log(data.data[i].attributes.image.data[0].attributes.url)
                const imgurl = data.data[i].attributes.image.data[0].attributes.url
                const photo = document.getElementById('photo');
                const profil = document.getElementById('textprofile');
                const quote = document.getElementById('quote');

                photo.innerHTML = `<img src="${apiurl}${imgurl}" alt="profiles" id="photo"></img>`;
                profil.innerHTML = data.data[i].attributes.author;
                quote.innerHTML = data.data[i].attributes.quote.data.attributes.quote;

            })

            .catch(error => console.error(error));
}
setInterval(advisor, 10000);

advisor()