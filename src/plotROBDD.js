(async () => {

  // fetch data and render
  const resp = await fetch(
    "https://raw.githubusercontent.com/erikbrinkman/d3-dag/main/examples/grafo.json"
  );
  const data = await resp.json();

  robdd = {"Root":10,"Order":{"p":0,"p'":1,"q":2,"q'":3},"ReverseOrder":{"0":"p","1":"p'","2":"q","3":"q'"},"Cache":{"-1-10":1,"-2-20":0,"001":2,"003":4,"017":8,"019":10,"101":5,"110":6,"117":9,"201":3,"210":7},"AllNodes":[{"Prop":-2,"Lo":-2,"Hi":0},{"Prop":-1,"Lo":-1,"Hi":0},{"Prop":0,"Lo":0,"Hi":1},{"Prop":2,"Lo":0,"Hi":1},{"Prop":0,"Lo":0,"Hi":3},{"Prop":1,"Lo":0,"Hi":1},{"Prop":1,"Lo":1,"Hi":0},{"Prop":2,"Lo":1,"Hi":0},{"Prop":0,"Lo":1,"Hi":7},{"Prop":1,"Lo":1,"Hi":7},{"Prop":0,"Lo":1,"Hi":9}]};

  toadd = [robdd.Root]
  added = [0,1]

  nodelist = [{"id": "-2", "name": "True","Lo": undefined, "Hi": undefined}, {"id": "-1", "name": "False", "Lo": undefined, "Hi": undefined}];
  
  while (toadd.length > 0) {
    i = toadd.pop()
    nodelist.push({"id": i.toString(), "name": robdd.ReverseOrder[robdd.AllNodes[i].Prop].toString(), "Lo": robdd.AllNodes[i].Lo.toString(), "Hi": robdd.AllNodes[i].Hi.toString()})
    added.push(i)
    if (!added.includes(robdd.AllNodes[i].Lo)){
      toadd.push(robdd.AllNodes[i].Lo)
    }
    if (!added.includes(robdd.AllNodes[i].Hi)){
      toadd.push(robdd.AllNodes[i].Hi)
    }
  }

  digraph = "digraph {"
  for (i in nodelist) {
    node = nodelist[i]
    id = node.id
    fromnode = node.name.replace("'", 'prime')
    tonodel = node.Lo
    tonodeh = node.Hi

    console.log(id, fromnode, tonodel, tonodeh)

    if (id >= 0){
      digraph = digraph.concat(id, '[label=', fromnode,'];')
      digraph = digraph.concat(id, ' -> ', tonodel, ' [color=red];')
      digraph = digraph.concat(id, ' -> ', tonodeh, '[color=green];')
    }
  }

  digraph = digraph.concat("}")
  d3.select("#svg1").graphviz().renderDot(digraph);

})();

