async function generateFTE(fte, robdd) {
  const resp = await fetch(
    "https://raw.githubusercontent.com/erikbrinkman/d3-dag/main/examples/grafo.json"
  );
  const data = await resp.json();

  console.log(robdd.ReverseOrder)
  
  d3.select("#svg2").selectAll("*").remove();

  let orderStr = ""
  for(let i = 0; i < Object.keys(robdd.ReverseOrder).length; i += 2) {
    console.log(robdd.ReverseOrder[i])
    orderStr += robdd.ReverseOrder[i]
  }

  console.log(orderStr)  

  digraph = `digraph { node [style="filled"]  ${orderStr} [fillcolor="#4B9CD3"]; `

  for (i in fte) {
    for (j in fte[i]){
      digraph = digraph.concat(i, '->', fte[i][j], ';')
    }
  }

  digraph = digraph.concat('}')
  d3.select("#svg2").graphviz().renderDot(digraph);
}
