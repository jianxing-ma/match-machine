const randomUserAPIUrl = "https://randomuser.me/api";

document.getElementById("selection-btn-container").addEventListener("click", (e) => {
    document.getElementById("profile-container").innerHTML = ""

    fetch(`${randomUserAPIUrl}/?gender=${e.target.innerText.toLowerCase()}&results=3`)
    .then(response => response.json())
    .then(endResult => {
        for ({name: {first}, location: {state, country}, dob: {age}, picture: {large}} of endResult["results"]) {
            const profileCard = document.createElement("div");
            profileCard.classList.add("card");
            profileCard.style = "width: 18rem;";

            profileCard.innerHTML = `
            <img src=${large} class="card-img-top" alt=${first}'s profile photo>
            <div class="card-body">
                <h5 class="card-title">${first}, ${age}</h5>
                <p class="card-text">${state}, ${country}</p>
                <a href="#" class="btn btn-primary">Message</a>
            </div>
            `;
            
            document.getElementById("profile-container").append(profileCard);
        }
    })
})