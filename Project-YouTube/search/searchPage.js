const searchQuery = window.location.search;
const queryArray = searchQuery.split("=");
const encodedSearchText = queryArray[queryArray.length - 1];
console.log("search text--->", decodeURI(encodedSearchText));
const rootElem = document.getElementById("search-cards-container");
const getSearchResults = () => {
    // const req = fetch(
    //     `https://youtube138.p.rapidapi.com/search/?q=${encodedSearchText}&hl=en&gl=US`,
    //     {
    //     method: "GET",
    //     headers: {
    //         "x-rapidapi-host": "youtube138.p.rapidapi.com",
    //         "x-rapidapi-key": "dac8b1a67emsh58a6f7b0f1a4393p1923b8jsne9f35fb775aa",
    //     },
    //     },
    // );
    // req
    //     .then((res) => {
    //     const pr2 = res.json();
    //     pr2.then((data) => {
    //         renderSearchResults(data);
    //     });
    //     })
    //     .catch((err) => {
    //     alert("Failed to get Search Results::", err.message);
    //     });
};
const renderSearchResults = (data) => {
    const { contents } = data;
    contents.forEach((obj) => {
        const { video } = obj;
        if (!video) return;
        const {
            thumbnails,
            title,
            descriptionSnippet,
            publishedTimeText,
            stats,
            videoId,
        } = video;
        const newDiv = document.createElement("div");
        newDiv.className = "video-card";
        newDiv.innerHTML = `
            <div class="thumbnail-container">
                <img src="${thumbnails[thumbnails.length - 1].url}" width="100%">
            </div>
            <div class="video-data-container">
                <p>${title}</p>
                <p>${stats?.views || ""}</p>
                <p>${publishedTimeText || ""}</p>
                <p>${descriptionSnippet || ""}</p>
            </div>
        `;
        newDiv.addEventListener("click", () => {
            window.location.href = `../view.html?videoId=${videoId}`;
        });
        rootElem.appendChild(newDiv);
    });
};

getSearchResults();
const options = {
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 1.0,
};

const handleInfiniteSearch = (entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.1 && !isLoading) {
            // console.log("FOUND!", entry.intersectionRatio);
            getSearchResults();
        }
    });
};

const observer = new IntersectionObserver(handleInfiniteSearch, options);

const targetElement = document.getElementById("search-end-element");

observer.observe(targetElement);