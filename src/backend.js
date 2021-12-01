
async function doPost(e) {
    e.preventDefault()

    const backend = "http://localhost:8000/formula"
    

    let formulaStr = "(p & q) -> p'"

    let inputStr = document.getElementById("formulainput").value
    formulaStr = inputStr

    axios({
        method: "post",
        url: backend,
        data: formulaStr,
        headers: { "Content-Type": "text/plain" },
      })
    .then(resp => {
        console.log(resp)        
        generateROBDD(resp.data.ROBDD)
        generateFTE(resp.data.Transitions,resp.data.ROBDD)
    })
}