const fetch = require("node-fetch")
const baseUrl = "http://localhost:3000"

setTimeout(async () => {
    const results = []
    results.push(await load(`${baseUrl}/reset`, "DELETE"))
    results.push(await load())
    results.push(await load(`${baseUrl}/1`))
    results.push(await load(baseUrl, "POST", body = JSON.stringify({
        name: "The Greatest Showman",
        year: 2017,
        genre: "biography, drama, musical",
        poster: "https://m.media-amazon.com/images/M/MV5BMjI1NDYzNzY2Ml5BMl5BanBnXkFtZTgwODQwODczNTM@._V1_.jpg",
        description: "Celebrates the birth of show business and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation."
    })))
    results.push(await load(`${baseUrl}/1`, "PUT", JSON.stringify({
        name: "Arcane",
        year: 2021,
        genre: "animation, action, adventure, tv-show",
        poster: "https://www.nerdpool.it/wp-content/uploads/2021/11/poster-arcane.jpg",
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League Of Legends champions and the power that will tear them apart."
    })))
    results.push(await load(`${baseUrl}/3`, "DELETE"))

    if (results.every(Boolean)) {
        console.log("Test finished succesfully.\n")
    } else {
        console.log("Test finished with errors. View the logs above.\n")
    }
}, 1000)

async function load(url = baseUrl, method = "GET", body = "") {
    try {
        let response
        if (!body) {
            response = await fetch(url, { method: method })
        } else {
            response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: body
            })
        }
        
        if (response.ok) {
            if (url == `${baseUrl}/reset`) {
                console.log(`\n${method} ${url}\n${response.status} ${response.statusText}\n`)
            } else {
                console.log(`${method} ${url}\n${response.status} ${response.statusText}\n`)
            }
            return true
        } else {
            const result = await response.json()
            console.log(`${method} ${url}\n${response.status} ${response.statusText}\n${JSON.stringify(result, null, 4)}\n`)
            return false
        }
    } catch (error) {
        console.log(`${method} ${url}\n${error}\n`)
        return false
    }
}