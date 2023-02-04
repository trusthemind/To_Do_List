let input = document.getElementById("create-txt");
let btn = document.getElementById("create-btn");
let list  = document.getElementById("list");


// Set Local Storage
btn.addEventListener("click" , (e) =>
{
    localStorage.setItem(localStorage.length.toString(), input.value)
    location.reload();
})
// Get|Load from Local Storage on page
window.addEventListener("load",
    (e) => {
        for (let t = 0; t <= localStorage.length - 1; t++) {
            const temp = localStorage.getItem(localStorage.key(t))
            if (temp) {
                let tempemenent = document.createElement("p")
                tempemenent.innerText = temp.toString();
                tempemenent.style.fontSize = "20px";
                tempemenent.style.width = "100vh";
                tempemenent.style.border = "1px solid black";
                tempemenent.style.padding = "10px";
                tempemenent.style.display = "flex";
                tempemenent.style.flexDirection = "row";
                tempemenent.style.justifyContent = "space-between";
                // Btn which remove plan
                let remove = document.createElement("button")
                remove.innerText = "remove".toUpperCase();
                remove.addEventListener("click", (e) =>
                {

                })

                tempemenent.appendChild(remove)
                list.appendChild(tempemenent);
            }
        }
    })

