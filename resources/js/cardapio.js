let menu = [
    {
        title: "hamburguer 1",
        image: "img/logotipo.png",
        description: "Lorem ipsum dolor srit amet",
    },
    {
        title: "hamburguer 2",
        image: "img/logotipo.png",
        description: "Lorem ipsum dolor sdit amet",
    },
    {
        title: "hamburguer 3",
        image: "img/logotipo.png",
        description: "Lorem ipsum dolor sitt amet",
    },
    {
        title: "hamburguer 44",
        image: "img/logotipo.png",
        description: "Lorem ipsum dolor siht amet",
    },
];

function listFood(list) {
    list.forEach(element => {
        // Create title div
        let titleDiv = document.createElement("div");
        let title = document.createTextNode(element.title);
        titleDiv.appendChild(title);

        // Create description div
        let descriptionDiv = document.createElement("div");
        let description = document.createTextNode(element.description);
        descriptionDiv.appendChild(description);

        // Adding all divs to the container
        let container = document.createElement("div");
        container.appendChild(titleDiv);
        container.appendChild(descriptionDiv);

        //Adding the container to the DOM
        let list = document.getElementById("dish-menu");
        list.appendChild(container);
    });
}

listFood(menu);