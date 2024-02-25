
console.log("Let's get this party started!");

const searchForm = document.getElementById("search-form");
const gifContainer = document.getElementById("gif-container");
const removeGifs = document.getElementById("remove");

searchForm.addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form submission

    const searchWord = document.getElementById("search").value;
    const response = await getGifs(searchWord); // Wait for GIFs to be fetched
    displayGifs(response.data); // Display fetched GIFs
});

removeGifs.addEventListener("click", function(){
    gifContainer.innerHTML = ""; // Clear GIF container
});

async function getGifs(searchWord) {
    return axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
}

function displayGifs(data) {
    const randomIndex = Math.floor(Math.random() * data.data.length);
    const gifUrl = data.data[randomIndex].images.fixed_height.url;

    // Create image element
    const imgElement = document.createElement("img");
    imgElement.src = gifUrl;

    gifContainer.appendChild(imgElement); // Append image to container
}
