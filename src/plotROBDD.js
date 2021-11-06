(async () => {
  
  // const mockdata = 
  //   {
  //     "Root":4,
  //     "Order":{"p":0,"p'":1,"q":2,"q'":3},
  //     "ReverseOrder":{"0":"p","1":"p'","2":"q","3":"q'"},
  //     "Cache":{"-1-10":1,"-2-20":0,"001":2,"003":4,"201":3},
  //     "AllNodes":[
  //       {"Prop":-2,"Lo":-2,"Hi":0},
  //       {"Prop":-1,"Lo":-1,"Hi":0},
  //       {"Prop":0,"Lo":0,"Hi":1},
  //       {"Prop":2,"Lo":0,"Hi":1},
  //       {"Prop":0,"Lo":0,"Hi":3}
  //     ]
  //   };
  
  const mockdata = {"Root":51,"Order":{"p":0,"p'":1,"q":2,"q'":3,"r":4,"r'":5},"ReverseOrder":{"0":"p","1":"p'","2":"q","3":"q'","4":"r","5":"r'"},"Cache":{"-1-10":1,"-2-20":0,"001":3,"0112":12,"0132":14,"01819":20,"02527":28,"03941":42,"041":5,"0431":44,"0461":47,"05041":51,"071":8,"090":10,"101":2,"1016":19,"1026":27,"1040":41,"110":6,"114":7,"11724":25,"11738":39,"1174":18,"14938":50,"191":11,"194":13,"201":4,"2015":21,"2022":24,"2029":30,"2032":33,"2037":38,"210":9,"2122":23,"2135":36,"2150":17,"2151":16,"21522":26,"21537":40,"2291":43,"2451":46,"2480":49,"301":15,"3045":48,"310":22,"3350":37,"401":29,"4031":32,"4134":35,"4341":45,"501":31,"510":34},"AllNodes":[{"Prop":-2,"Lo":-2,"Hi":0},{"Prop":-1,"Lo":-1,"Hi":0},{"Prop":1,"Lo":0,"Hi":1},{"Prop":0,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":1},{"Prop":0,"Lo":4,"Hi":1},{"Prop":1,"Lo":1,"Hi":0},{"Prop":1,"Lo":1,"Hi":4},{"Prop":0,"Lo":7,"Hi":1},{"Prop":2,"Lo":1,"Hi":0},{"Prop":0,"Lo":9,"Hi":0},{"Prop":1,"Lo":9,"Hi":1},{"Prop":0,"Lo":11,"Hi":2},{"Prop":1,"Lo":9,"Hi":4},{"Prop":0,"Lo":13,"Hi":2},{"Prop":3,"Lo":0,"Hi":1},{"Prop":2,"Lo":15,"Hi":1},{"Prop":2,"Lo":15,"Hi":0},{"Prop":1,"Lo":17,"Hi":4},{"Prop":1,"Lo":0,"Hi":16},{"Prop":0,"Lo":18,"Hi":19},{"Prop":2,"Lo":0,"Hi":15},{"Prop":3,"Lo":1,"Hi":0},{"Prop":2,"Lo":1,"Hi":22},{"Prop":2,"Lo":0,"Hi":22},{"Prop":1,"Lo":17,"Hi":24},{"Prop":2,"Lo":15,"Hi":22},{"Prop":1,"Lo":0,"Hi":26},{"Prop":0,"Lo":25,"Hi":27},{"Prop":4,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":29},{"Prop":5,"Lo":0,"Hi":1},{"Prop":4,"Lo":0,"Hi":31},{"Prop":2,"Lo":0,"Hi":32},{"Prop":5,"Lo":1,"Hi":0},{"Prop":4,"Lo":1,"Hi":34},{"Prop":2,"Lo":1,"Hi":35},{"Prop":3,"Lo":35,"Hi":0},{"Prop":2,"Lo":0,"Hi":37},{"Prop":1,"Lo":17,"Hi":38},{"Prop":2,"Lo":15,"Hi":37},{"Prop":1,"Lo":0,"Hi":40},{"Prop":0,"Lo":39,"Hi":41},{"Prop":2,"Lo":29,"Hi":1},{"Prop":0,"Lo":43,"Hi":1},{"Prop":4,"Lo":34,"Hi":1},{"Prop":2,"Lo":45,"Hi":1},{"Prop":0,"Lo":46,"Hi":1},{"Prop":3,"Lo":0,"Hi":45},{"Prop":2,"Lo":48,"Hi":0},{"Prop":1,"Lo":49,"Hi":38},{"Prop":0,"Lo":50,"Hi":41}]}
  // const mockdata = {"Root":12,"Order":{"p":0,"p'":1,"q":2,"q'":3,"r":4,"r'":5},"ReverseOrder":{"0":"p","1":"p'","2":"q","3":"q'","4":"r","5":"r'"},"Cache":{"-1-10":1,"-2-20":0,"001":2,"010":6,"01011":12,"015":7,"201":3,"204":8,"219":10,"241":5,"249":11,"401":4,"410":9},"AllNodes":[{"Prop":-2,"Lo":-2,"Hi":0},{"Prop":-1,"Lo":-1,"Hi":0},{"Prop":0,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":1},{"Prop":4,"Lo":0,"Hi":1},{"Prop":2,"Lo":4,"Hi":1},{"Prop":0,"Lo":1,"Hi":0},{"Prop":0,"Lo":1,"Hi":5},{"Prop":2,"Lo":0,"Hi":4},{"Prop":4,"Lo":1,"Hi":0},{"Prop":2,"Lo":1,"Hi":9},{"Prop":2,"Lo":4,"Hi":9},{"Prop":0,"Lo":10,"Hi":11}]}
  
  // nodelist = [{"id": "0", "name": "True", "Lo": {}, "Hi": {}}, {"id": "1", "name": "False", "Lo": {}, "Hi": {}}];
  // for (i in mockdata.AllNodes) {
  //   if (i > 1) {  
  //     nodelist.push({"id": i, "name": mockdata.ReverseOrder[mockdata.AllNodes[i].Prop], "Lo": mockdata.AllNodes[mockdata.Root].Lo, "Hi": mockdata.AllNodes[i].Hi})
  //   }
  // }

  toadd = [mockdata.Root]
  added = [0,1]

  nodelist = [{"id": "0", "name": "True", "parentIds": []}, {"id": "1", "name": "False", "parentIds": []}];
  while (toadd.length > 0) {
    i = toadd.pop()
    nodelist.push({"id": i.toString(), "name": mockdata.ReverseOrder[mockdata.AllNodes[i].Prop], "parentIds": [mockdata.AllNodes[i].Lo.toString(), mockdata.AllNodes[i].Hi.toString()]})
    added.push(i)
    if (!added.includes(mockdata.AllNodes[i].Lo)){
      toadd.push(mockdata.AllNodes[i].Lo)
    }
    if (!added.includes(mockdata.AllNodes[i].Hi)){
      toadd.push(mockdata.AllNodes[i].Hi)
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
  const svgSelection = d3.select("svg");
  svgSelection.attr("viewBox", [0, 0, width, height].join(" "));
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
    .attr("fill", "none")
    .attr("stroke-width", 1)
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

