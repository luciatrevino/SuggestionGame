// Declare your arrays here
const season = {
    summer: [
        { activity: "go to the pool", img: "https://swimply.imgix.net/thumbnails/35388-cover20027981471690480170.heic?auto=compress%2Cformat&fit=min&fill=blur&w=2304&q=30&ixlib=react-9.8.1" },
        { activity: "eat icecream", img: "https://handletheheat.com/wp-content/uploads/2021/06/homemade-vanilla-ice-cream.jpg" },
        { activity: "Go Camping", img: "https://banfflakelouise.bynder.com/m/5a14573ceaa22538/1000x540_jpg-2021_Camping_ParksCanada.jpg" },
        { activity: "Go on picnics", img: "https://media.timeout.com/images/103266872/image.jpg"},
    ],
    Winter: [
        { activity: "make snowmane", img: "https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/162249/322372/heroimage0.721115001631308114.jpg"},
        { activity: "have a snowball fight with the bros", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyJuI1v_eC97OUsJMiuSwFN4Ts1asBzjnsQ&s"},
        { activity: "drink hot chocolate", img:"https://www.anediblemosaic.com/wp-content/uploads//2021/02/french-hot-chocolate-featurd-image.jpg"},
        
    ]
};

// Make sure to declare your HTML elements as variables! 
let inputElement = document.querySelector("input");
let submitButton = document.querySelector("button");
let contentDiv = document.querySelector("div.content");

// Submit Button Event Listener
submitButton.addEventListener("click", function() { 
    let userPick = inputElement.value.toLowerCase();

    if (season[userPick]) {
        let randomActivity = season[userPick][Math.floor(Math.random() * season[userPick].length)];
        contentDiv.innerHTML = `
            <p>How about doing <strong>${randomActivity.activity}</strong>?</p>
            <img src="${randomActivity.img}" alt="${randomActivity.activity}" style="width: 300px; height: auto;">
        `;
    } else {
        contentDiv.innerHTML = `<p>Sorry, we don't have suggestions for that season. Try another one!</p>`;
    }
});
