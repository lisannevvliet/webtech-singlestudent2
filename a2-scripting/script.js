const url = "https://webtech.labs.vu.nl/api24/f81597a7"

load()

async function load(year = null) {
    const response = await fetch(url)
    const result = await response.json()
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""
    const years = []

    result.forEach(element => {
        if (!year || year == element["year"]) {
            const tr = document.createElement("tr")
            tr.innerHTML = `
                <td><img src="${element["poster"]}" alt="Poster ${element["name"]}" class="id-${element["id"]}"></td>
                <td class="id-${element["id"]}">${element["name"]}</td>
                <td class="id-${element["id"]}">${element["year"]}</td>
                <td class="id-${element["id"]}">${element["genre"]}</td>
                <td class="id-${element["id"]}">${element["description"]}</td>
                <td><button id="id-${element["id"]}">✎</button></td>
            `
            tbody.appendChild(tr)

            document.querySelector(`#id-${element["id"]}`).addEventListener("click", () => {
                const input = document.querySelectorAll(".input")
                const result = document.querySelectorAll(`.id-${element["id"]}`)

                for (let i = 0; i < 5; i++) {
                    input[i].value = i == 0 ? result[i].src : result[i].textContent
                }

                document.querySelector("input[type=submit]").value = "Update"
                document.querySelector("input[type=submit]").id = `id-${element["id"]}`
                open()
            })

            if (!years.includes(element["year"])) {
                years.push(element["year"])
            }
        }
    })

    if (!year) {
        years.sort()
        const div = document.querySelector("fieldset div")
        div.innerHTML = ``

        for (const element of years) {
            const input = document.createElement("div")
            input.innerHTML = `
                <input type="radio" id="${element}" name="year" value="${element}">
                <label for="${element}">${element}</label>
            `
            div.appendChild(input)

            input.addEventListener("change", () => {
                load(element)
            })
        }
    }
}

const overlay = document.querySelector(".overlay")
const modal = document.querySelector(".modal")

document.querySelector("div button").addEventListener("click", open)
document.querySelector(".modal button").addEventListener("click", close)
overlay.addEventListener("click", close)

function open() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function close() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

const form = document.querySelector("form")

form.addEventListener("submit", async event => {
    event.preventDefault()
    close()
    const body = new URLSearchParams(new FormData(form))

    if (document.querySelector("input[type=submit]").value == "Add") {
        await fetch(url, {
            method: "POST",
            body: body
        })
    } else {
        await fetch(`${url}/item/${document.querySelector("input[type=submit]").id.substring(3)}`, {
            method: "PUT",
            body: body
        })

        form.reset()
        document.querySelector("input[type=submit]").value = "Add"
    }
    
    load()
})

document.querySelector("input[type=reset]").addEventListener("click", async () => {
    await fetch(`${url}/reset`)
    load()
})

document.querySelector("fieldset button").addEventListener("click", () => {
    const input = document.querySelector("input[name=year]:checked")

    if (input) {
        input.checked = false
        load()
    }
})