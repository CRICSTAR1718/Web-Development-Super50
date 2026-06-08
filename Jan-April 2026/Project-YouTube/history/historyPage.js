const val = window.localStorage.getItem("video_history");
console.log("🟡 : val:", val);
console.log(typeof val);
// const arr = JSON.stringify() // to convert JS Object into JSON
const arr = JSON.parse(val); // to convert JSON into JS Object
console.log("🟡 : arr:", arr);
console.log(typeof arr);

const rootElem = document.getElementById("root");

arr.reverse().forEach((videoId) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <iframe width="560" height="315" src="https://youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
    rootElem.append(newDiv);
});
