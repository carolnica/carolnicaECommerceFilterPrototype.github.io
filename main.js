const apply = document.getElementById("apply");
const items = document.getElementById("items");
const select = document.getElementById("filter");

let itemsArray = [
    {
        id: 1,
        product: "Book",
        price: 10,
        rating: 4.5
    },
    {
        id: 2,
        product: "Laptop",
        price: 500,
        rating: 4.0
    },
    {
        id: 3,
        product: "Watch",
        price: 100,
        rating: 3.7
    },
    {
        id: 4,
        product: "Suit",
        price: 750,
        rating: 4.9
    },
    {
        id: 5,
        product: "Shoes",
        price: 150,
        rating: 4.2
    }
]
let icArray = [];
let priceArray = [];
let ratingArray = [];
let altRatingArray = [];
for (a = 0; a < itemsArray.length; a++) {

    let itemCase = document.createElement("div");
    itemCase.classList.add("item-style");
    items.appendChild(itemCase);
    icArray.push(itemCase);
    icArray[a].innerHTML = `Product: ${itemsArray[a].product} <br>`
    icArray[a].innerHTML += `Price: ${itemsArray[a].price} <br>`;
    priceArray.push(itemsArray[a].price);
    icArray[a].innerHTML += `Rating: ${itemsArray[a].rating} <br>`;
    ratingArray.push(itemsArray[a].rating);
    altRatingArray.push(itemsArray[a].rating);

    let mapping = {};
    let mappingTwo = {};
    let mappingThree = {};
    let mappingFour = {};
    for (let b = 0; b < itemsArray.length; b++) {
        mapping[itemsArray[b].product] = priceArray[b];
        mapping[priceArray[b]] = itemsArray[b].product;
        mappingTwo[itemsArray[b].rating] = priceArray[b];
        mappingTwo[priceArray[b]] = itemsArray[b].rating;
        mappingThree[itemsArray[b].product] = ratingArray[b];
        mappingThree[ratingArray[b]] = itemsArray[b].product;
        mappingFour[altRatingArray[b]] = itemsArray[b].price;
    } 
        apply.addEventListener("click", () => {

            option = select.value;
            switch (option) {

                // Cheap Select Option

                case "cheap":
                priceArray.sort(function(a, b) {
                    return a - b
                })

                for (b = 0; b < priceArray.length; b++) {
                    icArray[b].innerHTML = `Product: ${mapping[priceArray[b]]} <br>`
                    icArray[b].innerHTML += `Price: ${priceArray[b]} <br>`;
                    icArray[b].innerHTML += `Rating: ${mappingTwo[priceArray[b]]} <br>`
                }
                break;

                // Expensive Select Option

                case "expensive": 
                priceArray.sort(function(a, b) {
                    return b - a
                })
                for (b = 0; b < priceArray.length; b++) {
                    icArray[b].innerHTML = `Product: ${mapping[priceArray[b]]} <br>`
                    icArray[b].innerHTML += `Price: ${priceArray[b]} <br>`;
                    icArray[b].innerHTML += `Rating: ${mappingTwo[priceArray[b]]} <br>`
                    }
                    break;

                // Rating Select Option

                case "rating":
                ratingArray.sort(function(a, b) {
                    return b - a
                })
                altRatingArray.sort(function(a, b) {
                    return b - a
                })
                for (b = 0; b < priceArray.length; b++) {
                    icArray[b].innerHTML = `Product: ${mappingThree[ratingArray[b]]} <br>`
                    icArray[b].innerHTML += `Price: ${mappingFour[altRatingArray[b]]} <br>`;
                    icArray[b].innerHTML += `Rating: ${ratingArray[b]} <br>`
                    }
                

    }
})
}

