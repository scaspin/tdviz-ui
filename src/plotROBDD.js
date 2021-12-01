(async () => {

  // fetch data and render
  const resp = await fetch(
    "https://raw.githubusercontent.com/erikbrinkman/d3-dag/main/examples/grafo.json"
  );
  const data = await resp.json();
  // console.log(resp)
  // console.log(data)

  // const robdd = 
  //   {
  //     "Root":4,
  //     "Order":{"p":0,"p'":1,"q":2,"q'":3},
  //     "ReverseOrder":{"-2": "false", "-1": "true", "0":"p","1":"pp","2":"q","3":"qp"},
  //     "Cache":{"-1-10":1,"-2-20":0,"001":2,"003":4,"201":3},
  //     "AllNodes":[
  //       {"Prop":-2,"Lo":-2,"Hi":0},
  //       {"Prop":-1,"Lo":-1,"Hi":0},
  //       {"Prop":0,"Lo":0,"Hi":1},
  //       {"Prop":2,"Lo":0,"Hi":1},
  //       {"Prop":0,"Lo":0,"Hi":3}
  //     ]
  //   };
  
  //  const robdd = {"Root":51,"Order":{"p":0,"p'":1,"q":2,"q'":3,"r":4,"r'":5},"ReverseOrder":{"0":"p","1":"p'","2":"q","3":"q'","4":"r","5":"r'"},"Cache":{"-1-10":1,"-2-20":0,"001":3,"0112":12,"0132":14,"01819":20,"02527":28,"03941":42,"041":5,"0431":44,"0461":47,"05041":51,"071":8,"090":10,"101":2,"1016":19,"1026":27,"1040":41,"110":6,"114":7,"11724":25,"11738":39,"1174":18,"14938":50,"191":11,"194":13,"201":4,"2015":21,"2022":24,"2029":30,"2032":33,"2037":38,"210":9,"2122":23,"2135":36,"2150":17,"2151":16,"21522":26,"21537":40,"2291":43,"2451":46,"2480":49,"301":15,"3045":48,"310":22,"3350":37,"401":29,"4031":32,"4134":35,"4341":45,"501":31,"510":34},
  //  "AllNodes":
  //  [{"Prop":-2,"Lo":-2,"Hi":0},{"Prop":-1,"Lo":-1,"Hi":0},{"Prop":1,"Lo":0,"Hi":1},{"Prop":0,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":1},{"Prop":0,"Lo":4,"Hi":1},{"Prop":1,"Lo":1,"Hi":0},{"Prop":1,"Lo":1,"Hi":4},{"Prop":0,"Lo":7,"Hi":1},{"Prop":2,"Lo":1,"Hi":0},{"Prop":0,"Lo":9,"Hi":0},{"Prop":1,"Lo":9,"Hi":1},{"Prop":0,"Lo":11,"Hi":2},{"Prop":1,"Lo":9,"Hi":4},{"Prop":0,"Lo":13,"Hi":2},{"Prop":3,"Lo":0,"Hi":1},{"Prop":2,"Lo":15,"Hi":1},{"Prop":2,"Lo":15,"Hi":0},{"Prop":1,"Lo":17,"Hi":4},{"Prop":1,"Lo":0,"Hi":16},{"Prop":0,"Lo":18,"Hi":19},{"Prop":2,"Lo":0,"Hi":15},{"Prop":3,"Lo":1,"Hi":0},{"Prop":2,"Lo":1,"Hi":22},{"Prop":2,"Lo":0,"Hi":22},{"Prop":1,"Lo":17,"Hi":24},{"Prop":2,"Lo":15,"Hi":22},{"Prop":1,"Lo":0,"Hi":26},{"Prop":0,"Lo":25,"Hi":27},{"Prop":4,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":29},{"Prop":5,"Lo":0,"Hi":1},{"Prop":4,"Lo":0,"Hi":31},{"Prop":2,"Lo":0,"Hi":32},{"Prop":5,"Lo":1,"Hi":0},{"Prop":4,"Lo":1,"Hi":34},{"Prop":2,"Lo":1,"Hi":35},{"Prop":3,"Lo":35,"Hi":0},{"Prop":2,"Lo":0,"Hi":37},{"Prop":1,"Lo":17,"Hi":38},{"Prop":2,"Lo":15,"Hi":37},{"Prop":1,"Lo":0,"Hi":40},{"Prop":0,"Lo":39,"Hi":41},{"Prop":2,"Lo":29,"Hi":1},{"Prop":0,"Lo":43,"Hi":1},{"Prop":4,"Lo":34,"Hi":1},{"Prop":2,"Lo":45,"Hi":1},{"Prop":0,"Lo":46,"Hi":1},{"Prop":3,"Lo":0,"Hi":45},{"Prop":2,"Lo":48,"Hi":0},{"Prop":1,"Lo":49,"Hi":38},{"Prop":0,"Lo":50,"Hi":41}]}
 
  const robdd = {"Root":9,"Order":{"p":0,"p'":1,"q":2,"q'":3},
    "ReverseOrder":{"0":"p","1":"p'","2":"q","3":"q'"},
    "Cache":{"-1-10":1,"-2-20":0,"001":2,"003":4,"016":7,"018":9,"101":5,"161":8,"201":3,"210":6},
    "AllNodes":[{"Prop":-2,"Lo":-2,"Hi":0},{"Prop":-1,"Lo":-1,"Hi":0},{"Prop":0,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":1},{"Prop":0,"Lo":0,"Hi":3},{"Prop":1,"Lo":0,"Hi":1},{"Prop":2,"Lo":1,"Hi":0},{"Prop":0,"Lo":1,"Hi":6},{"Prop":1,"Lo":6,"Hi":1},{"Prop":0,"Lo":1,"Hi":8}],
    "Transitions":{"00":["00","01","10","11"],"01":["00","01","10","11"],"10":["10","11","00","01"],"11":["10","11"]} }

  // digraph = "digraph {"
  // for (i in robdd.AllNodes) {
  //   // if (i < 0){
  //   //   continue
  //   // }
  //   if (robdd.AllNodes[i].Lo != {}){
  //     console.log(robdd.AllNodes[i].Lo)
  //     digraph = digraph.concat(robdd.ReverseOrder[robdd.AllNodes[i].Prop], "->", robdd.ReverseOrder[robdd.AllNodes[i].Lo], ";")
  //   }

  //   if (robdd.AllNodes[i].Hi != {}){
  //     console.log(robdd.AllNodes[i].Hi)
  //     digraph = digraph.concat(robdd.ReverseOrder[robdd.AllNodes[i].Prop], "->", robdd.ReverseOrder[robdd.AllNodes[i].Hi], ";")
  //   }

  // }

  // digraph = digraph.concat("}")
  // d3.select("#svg1").graphviz().renderDot(digraph);

  toadd = [robdd.Root]
  added = [0,1]

  nodelist = [{"id": "0", "name": "True", "parentIds": []}, {"id": "1", "name": "False", "parentIds": []}];
  while (toadd.length > 0) {
    i = toadd.pop()
    nodelist.push({"id": i.toString(), "name": robdd.ReverseOrder[robdd.AllNodes[i].Prop], "parentIds": [robdd.AllNodes[i].Lo.toString(), robdd.AllNodes[i].Hi.toString()]})
    added.push(i)
    if (!added.includes(robdd.AllNodes[i].Lo)){
      toadd.push(robdd.AllNodes[i].Lo)
    }
    if (!added.includes(robdd.AllNodes[i].Hi)){
      toadd.push(robdd.AllNodes[i].Hi)
    }
  }
  const dag = d3.dagStratify()(nodelist);
  const nodeRadius = 4;
  const layout = d3
    .sugiyama() // base layout
    .decross(d3.decrossOpt()) // minimize number of crossings
    .nodeSize((node) => [(node ? 3.6 : 0.25) * nodeRadius, 3 * nodeRadius]); // set node size instead of constraining to fit
  const { width, height } = layout(dag);

  // --------------------------------
  // This code only handles rendering
  // --------------------------------
  const svgSelection = d3.select("#svg1");
  svgSelection.attr("viewBox", [0,0, width/2, height].join(" "));
  const defs = svgSelection.append("defs"); // For gradients

  const steps = dag.size();

  // How to draw edges
  const line = d3
    .line()
    .curve(d3.curveCatmullRom)
    .x((d) => d.x)
    .y((d) => d.y);

  // Plot edges
  svgSelection
    .append("g")
    .selectAll("path")
    .data(dag.links())
    .enter()
    .append("path")
    .attr("d", ({ points }) => line(points))
    .attr('id', 'arrow')
    .attr("fill", "none")
    .attr('marker-start', 'url(#arrow)')
    .attr("stroke-width", 0.2)
    .attr("stroke", "#A5CDE9");

  // Select nodes
  const nodes = svgSelection
    .append("g")
    .selectAll("g")
    .data(dag.descendants())
    .enter()
    .append("g")
    .attr("transform", ({ x, y }) => `translate(${x}, ${y})`);

  // Plot node circles
  nodes
    .append("circle")
    .attr("r", nodeRadius)
    .attr("fill", "#A5CDE9");

  // Add text to nodes
  nodes
    .append("text")
    .text((d) => d.data.name)
    .attr("font-size", "6")
    .attr("font-weight", "regular")
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", "black");
})();

