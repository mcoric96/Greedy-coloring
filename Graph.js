class Graph
{
    constructor() 
    {
        this.edges = {};
        this.colors = {};
        this.nodes = [];
    }
    addNode(node) // add node to graph
    {
        this.nodes.push(node);
        this.edges[node] = []; // no edges at the beggining
        this.colors[node] = -1; //no color
    }
    addEdge(node1, node2) //add weighted edge
    {
        if(node1 !== node2)
        {
            this.edges[node1].push(node2);
            this.edges[node2].push(node1);
        }
    }
    displayGraph() // for each node, display it and it's neighbors
    {
        console.log("Graph:")
        console.log(this.nodes.reduce((text,node) => 
            text += (node + " -> " + this.edges[node].map(n => n).join(", ") + "\n") , ""))
    }
    displayColors()
    {
        let colors = ["blue","red","yellow","green","orange","black","white","grey","purple"]
        let graph = "";
        console.log("Colored graph:")
        this.nodes.forEach(node => 
        {
           Object.values(this.colors).reduce((a,b) => a > b ? a : b , 0) <= 7 ? // <= 8 colors
           graph += node + " -> " + colors[this.colors[node]] + "\n" :
           graph += node + " -> " + this.colors[node] + "\n";
        });
        console.log(graph);
    }
}
// ----------------------Algorithm ----------------------------------------
// 1. Color first vertex with first color.
// 2. Do following for remaining V-1 vertices.
//    Consider the currently picked vertex and color it with the
//    lowest numbered color that has not been used on any previously
//    colored vertices adjacent to it. If all previously used colors
//    appear on vertices adjacent to v, assign a new color to it.
//--------------------------------------------------------------------
function color(graph) //function for graph coloring - greedy algorithm
{
    graph.nodes.forEach(
        node => graph.colors[node] = 
        graph.edges[node].map(x => graph.colors[x]). // get neighbors
        filter(color => color >= 0). // filter those neighbors with colors
        sort((a,b) => a-b). // sort - because algorithm always pick lowest possible color
        reduce((current,next) => current === next ? current+=1 : current , 0) //pick the lowest color
    )
    return graph;
}
// simple example
var g = new Graph();
g.addNode(1);g.addNode(2);g.addNode(3);g.addNode(4);g.addNode(5);
g.addEdge(1,2);g.addEdge(2,3);g.addEdge(2,4);g.addEdge(2,5);
g.addEdge(3,4);
//g.addEdge(5,1);
//g.addEdge(2,5);g.addEdge(3,4); //g.addEdge(1,5);//g.addEdge(2,5);g.addEdge(3,5);
//g.addEdge(4,5);
g = color(g);
g.displayGraph()
g.displayColors();