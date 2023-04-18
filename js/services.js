function test() {

    const apiurl = "http://localhost:1337"

    

const content =document.querySelector('.container')
    fetch('http://localhost:1337/api/services/?populate=*'
    )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.data[0].attributes.Services)
            console.log(data.data.length)

        data.data.forEach(post => {
        const services = document.createElement('div')
        console.log(post);

        const imgurl = post.attributes.image.data["0"].attributes.url

        services.innerHTML = `
        <div class="divservices">
            <a href="${apiurl}${imgurl}" target="_blank" class="hoverservices"><img src="${apiurl}${imgurl}" class="imgservices" alt="Silent Services"></a>
            <div class="textservices"><h5>${post.attributes.Services}</h5></div>
        </div>`;
            content.appendChild(services)

        });
        })
        .catch(error => console.log(error));

}

test();