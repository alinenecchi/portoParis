let hamburgers = [
    {
        title: "Bom Fim",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/3.png",
        description: "Pão - australiano, brioche ou levain - burger de carne nobre 180g, cheddar com cebolinha na manteiga, peperoni, aneis de cebola empanada, rúcula e maionese verde especialidade da casa + mini porção de batata rústica.",
    },
    {
        title: "Cidade Baixa",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/4.png",
        description: "Pão Brioche, maionese verde especialidade da casa, carne de costela desossada ou blend (bovino, suíno e bacon), queijo cheddar e tiras de bacon.",
    },
    {
        title: "Orla do Guaíba",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/5.png",
        description: "Pão, burger de 150g de costela desossada ou blend (bovino, suíno e bacon), maionese verde especialidade da casa, tiras de bacon, queijo provolone, cebola roxa, alface e tomate + mini porção de batata rústica.",
    },
    {
        title: "Redenção",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/5.png",
        description: "Pão, hambúrguer vegetariano a sua escolha, maionese verde especialidade da casa, queijo cheddar, alface, tomate.",
    },
    {
        title: "Praia de Belas",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/6.png",
        description: "Pão artesanal, maionese verde especialidade da casa, burger de carne nobre 180g (blend secreto), queijo colonial, tiras de bacon defumado, geleia de pimenta e aneis de cebola empanadas crocantes + mini porção de batata rústica.",
    },
    {
        title: "Laçador",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/3.png",
        description: "Pão, burger de 150g de costela desossada ou blend (bovino, suíno e bacon), maionese verde especialidade da casa, queijo cheddar, alface e tomate.",
    },
    {
        title: "Gasômetro",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/6.png",
        description: "Pão, burger de 150g de costela desossada ou blend (bovino, suíno e bacon), maionese verde especialidade da casa, creme de queijo gorgonzola, cebola caramelizada, alface e tomate + mini porção de batata rústica.",
    },
    {
        title: "Belleville",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/3.png",
        description: "Tomate, mussarela e orégano.- australiano, brioche ou levain - burger de carne nobre 180g, cheddar com cebolinha na manteiga, peperoni, aneis de cebola empanada, rúcula e maionese verde especialidade da casa + mini porção de batata rústica.",
    },
    {
        title: "Sanduíche de Salmão Defumado",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/4.png",
        description: "Pão levain, australiano ou brioche, geleia de pimenta, salmão defumado, tiras de queijo brie e rúcula.",
    },
    {
        title: "hamburguer",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/6.png",
        description: "Lorem ipsum dolor siht amet",
    },
];

let crepes = [
    {
        title: "Palácio de Luxemburgo",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Iscas de filé e queijo gorgonzola.",
    },
    {
        title: "Torre Eiffel",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Frango desfiado e mussarela.",
    },
    {
        title: "Arco do Triunfo",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Brócolis e mussarela.",
    },
    {
        title: "Ópera Garnier",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Mussarela, cheddar, gorgonzola e provolone.",
    },
    {
        title: "Notre Dame",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Carne de panela desfiada e mussarela.",
    },
    {
        title: "Rio Senna",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Queijo Mussarela, presunto e orégano.",
    },
    {
        title: "Moulin Rouge",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Nutella. Você pode adicionar morango ou banana.",
    },
    {
        title: "Champs Elyssées",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Chocolate branco",
    },
    {
        title: "Trocadero",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Goiabada com mussarela.",
    },    {
        title: "Museu do Louvre",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Chocolate preto. Você pode adicionar morango ou banana.",
    },
    {
        title: "Pont des Arts",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Chocolate branco e preto.",
    },
    {
        title: "Paris Saint Germain",
        image: "../portoParis/resources/img/Cardapios/Crepes/2.png",
        description: "Doce de leite com coco.",
    }, 
];

function listFood(list, typeId) {
    list.forEach(element => {
        // Create img div
        let imageDiv = document.createElement("div");
        imageDiv.className = "dmc-picture";
        let image = document.createElement("img");
        image.src=(element.image)
        imageDiv.appendChild(image);

        // Create title div
        let titleDiv = document.createElement("div");
        titleDiv.className = "dmc-title";
        let title = document.createTextNode(element.title);
        titleDiv.appendChild(title);

        // Create description div
        let descriptionDiv = document.createElement("div");
        descriptionDiv.className = "dmc-description";
        let description = document.createTextNode(element.description);
        descriptionDiv.appendChild(description);

        // Adding all divs to the container
        let container = document.createElement("div");
        container.appendChild(imageDiv);
        container.appendChild(titleDiv);
        container.appendChild(descriptionDiv);

        //Adding the container to the DOM
        let list = document.getElementById(typeId);
        list.appendChild(container);
    });
}

listFood(hamburgers, "dm-hamburger");
listFood(crepes, "dm-crepes");