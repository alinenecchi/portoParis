let menu = [
    {
        title: "hamburguer 1",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/3.png",
        description: "Lorem ipsum dolor srit amet",
    },
    {
        title: "hamburguer 2",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/4.png",
        description: "Lorem ipsum dolor sdit amet",
    },
    {
        title: "hamburguer 3",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/5.png",
        description: "Lorem ipsum dolor sitt amet",
    },
    {
        title: "hamburguer 44",
        image: "../portoParis/resources/img/Cardapios/Hamburguers/6.png",
        description: "Lorem ipsum dolor siht amet",
    },
];

function listFood(list) {
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
        let list = document.getElementById("dm-hamburger");
        list.appendChild(container);
    });
}

listFood(menu);