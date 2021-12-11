async function generateFTE(robdd, fte) {
  const resp = await fetch(
    "https://raw.githubusercontent.com/erikbrinkman/d3-dag/main/examples/grafo.json"
  );
  const data = await resp.json();

  digraph = 'digraph { node [style="filled"]  pq [fillcolor="#4B9CD3"]; '

  for (i in fte) {
    for (j in fte[i]){
      digraph = digraph.concat(i, '->', fte[i][j], ';')
    }
  }

  digraph = digraph.concat('}')
  d3.select("#svg2").selectAll("*").remove()
  d3.select("#svg2").append('svg').graphviz().renderDot(digraph)
}