let searchResults = document.getElementById("searchResults");
let searchInput = document.getElementById("searchInput");
let message = document.getElementById("message");
let headingE1 = document.createElement('h1');
let spinner = document.getElementById("spinner");

function appendSearchResult(search_results) {
    if (search_results.length < 1) {
        message.textContent = "No results found";
        searchResults.textContent = "";
        headingE1.textContent = "";
    } else {
        searchResults.textContent = "";
        message.textContent = "";
        headingE1.textContent = "Popular Books";
        searchResults.appendChild(headingE1);
        for (let eachItem of search_results) {
            let title = eachItem.title;
            let imageLink = eachItem.imageLink;
            let author = eachItem.author;
            let imageEl = document.createElement("img");
            let textEl = document.createElement("p");
            imageEl.setAttribute("src", imageLink);
            textEl.textContent = author;
            searchResults.appendChild(imageEl);
            searchResults.appendChild(textEl);
            console.log(eachItem);

        }
    }
}
searchInput.addEventListener('keydown', function(Event) {
    if (event.key === "Enter") {


        let url = "https://apis.ccbp.in/book-store?title=" + searchInput.value;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {

                appendSearchResult(jsonData.search_results);
                spinner.classList.toggle("d-none");
            });

    }
});
