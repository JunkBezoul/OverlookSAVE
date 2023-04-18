function test() {


    fetch('http://localhost:1337/api/formules/?populate=*')
        .then(response => response.json())
        .then(data => {
            let PtitDej = document.querySelector("#PtitDej");
            let PrixDej = document.querySelector("#PrixDej");
            let Entree = document.querySelector("#Entree");
            let PrixEntree = document.querySelector("#PrixEntree");
            let Plats = document.querySelector("#Plats");
            let PrixPlats = document.querySelector("#PrixPlats");
            let Desserts = document.querySelector("#Desserts");
            let PrixDesserts = document.querySelector("#PrixDesserts");
            let PlatsKID = document.querySelector("#PlatsKID");
            let PrixPlatsKID = document.querySelector("#PrixPlatsKID");
            let DessertsKID = document.querySelector("#DessertsKID");
            let PrixDessertsKID = document.querySelector("#PrixDessertsKID");
            let AvecA = document.querySelector("#AvecA");
            let PrixAvecA = document.querySelector("#PrixAvecA");
            let SansA = document.querySelector("#SansA");
            let PrixSansA = document.querySelector("#PrixSansA");
            console.log(data)
            console.log(data.data[3].attributes.Formule)
            console.log(data.data.length)

            PtitDej.innerHTML = data.data[3].attributes.Formule;
            PrixDej.innerHTML = data.data[3].attributes.prix.data.attributes.Prix;

            Entree.innerHTML = data.data[0].attributes.Formule;
            PrixEntree.innerHTML = data.data[0].attributes.prix.data.attributes.Prix;
            Plats.innerHTML = data.data[1].attributes.Formule;
            PrixPlats.innerHTML = data.data[1].attributes.prix.data.attributes.Prix;
            Desserts.innerHTML = data.data[2].attributes.Formule;
            PrixDesserts.innerHTML = data.data[2].attributes.prix.data.attributes.Prix;

            PlatsKID.innerHTML = data.data[4].attributes.Formule;
            PrixPlatsKID.innerHTML = data.data[4].attributes.prix.data.attributes.Prix;
            DessertsKID.innerHTML = data.data[5].attributes.Formule;
            PrixDessertsKID.innerHTML = data.data[5].attributes.prix.data.attributes.Prix;

            AvecA.innerHTML = data.data[6].attributes.Formule;
            PrixAvecA.innerHTML = data.data[6].attributes.prix.data.attributes.Prix;
            SansA.innerHTML = data.data[7].attributes.Formule;
            PrixSansA.innerHTML = data.data[7].attributes.prix.data.attributes.Prix;

        data.forEach((data) => {
        console.log(data)
            

        });
        })


}

test();