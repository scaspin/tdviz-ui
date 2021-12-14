(async () => {
  // fetch data and render
  const resp = await fetch(
    "https://raw.githubusercontent.com/erikbrinkman/d3-dag/main/examples/grafo.json"
  );
  const data = await resp.json();
  const robdd = {"Root":9,"Order":{"p":0,"p'":1,"q":2,"q'":3},
    "ReverseOrder":{"0":"p","1":"p'","2":"q","3":"q'"},
    "Cache":{"-1-10":1,"-2-20":0,"001":2,"003":4,"016":7,"018":9,"101":5,"161":8,"201":3,"210":6},
    "AllNodes":[{"Prop":-2,"Lo":-2,"Hi":0},{"Prop":-1,"Lo":-1,"Hi":0},{"Prop":0,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":1},{"Prop":0,"Lo":0,"Hi":3},{"Prop":1,"Lo":0,"Hi":1},{"Prop":2,"Lo":1,"Hi":0},{"Prop":0,"Lo":1,"Hi":6},{"Prop":1,"Lo":6,"Hi":1},{"Prop":0,"Lo":1,"Hi":8}],
    "Transitions":{
      "00": [
        "00",
        "01",
        "10",
        "11"
      ],
      "01": [
        "00",
        "01",
        "10",
        "11"
      ],
      "10": [
        "00",
        "01",
        "10",
        "11"
      ],
      "11": [
        "00",
        "01"
      ]
    }
  }    

  fte = robdd.Transitions

  digraph = 'digraph { node [style="filled"]  pq [fillcolor="#4B9CD3"]; '

  for (i in fte) {
    for (j in fte[i]){
      digraph = digraph.concat(i, '->', fte[i][j], ';')
    }
  }

  digraph = digraph.concat('}')
  d3.select("#svg2").graphviz().renderDot(digraph);xw

})();

