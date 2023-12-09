const fetchBtn = document.getElementById("fetchBtn")

fetchBtn.addEventListener("click", () => {
  testFetch()
})

async function testFetch() {
  const res = await fetch("http://localhost:5000", {
    method: "GET",
    headers: {}
  })
  const body = await res.json()
  console.log("response body: ", body)
  console.log("current cookies: ", document.cookie)
}

