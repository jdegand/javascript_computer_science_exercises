/*
class Graph{
    constructor(){
        this.vertices = [];
        this.adjacencyList = {};
        this.edges = 0;
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjacencyList[v] = [];
    }

    addEdge(v, w) {
        this.adjacencyList[v].push(w);
        this.adjacencyList[w].push(v);
        this.edges++;
    }

    removeEdge(v,w) {
        var index1 = this.adjacencyList[v] ? this.adjacencyList[v].indexOf(w) : -1;
        var index2 = this.adjacencyList[w] ? this.adjacencyList[w].indexOf(v) : -1;
        if(index1 > - 1) this.adjacencyList[v].splice(index1, 1);
        if(index2 > - 1) this.adjacencyList[w].splice(index2, 1);
        //delete this.adjacencyList[w].v;
        //this.adjacencyList[w].delete(v);
        this.edges--;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
          return;
        }
        for (let adjacentVertex in this.adjacencyList[vertex]) {
          console.log('adj', this.adjacencyList[vertex][adjacentVertex]);
          this.removeEdge(vertex, this.adjacencyList[vertex][adjacentVertex]);
          this.removeEdge(this.adjacencyList[vertex][adjacentVertex], vertex);
        }
        delete this.adjacencyList[vertex];
        this.vertices = this.vertices.filter(el => el !== vertex)
    }

    size(){
        return this.vertices.length;
    }

    numberOfEdges(){
        return this.edges;
    }

    breadthFirstSearch(node = this.vertices[0]) {
   // use an optimized queue
   let q = [];
   let explored = new Set();
   q.push(node);

   let result = []

   explored.add(node);

   while (q.length) {
      let t = q.shift();

      result.push(t);

      this.adjacencyList[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
         explored.add(n);
         q.push(n);
      });
   }
   return result;
}

depthFirstSearch(node) {
    let result = []
    // use a stack
    let s = [];
    let explored = new Set();
    s.push(node);
 
    explored.add(node);
 
    while (s.length > 0) {
       let t = s.pop();
 
    result.push(t);
 
    this.adjacencyList[t]
    .filter(n => !explored.has(n))
    .forEach(n => {
       explored.add(n);
       s.push(n);
       });
    }
    return result;
 }

    display() {
        for (let vertex in graph) {
          console.log(vertex + " -> " + [...graph[vertex]]);
        }
    }
}

class WeightedGraph extends Graph {

    addEdge(v, w, weight) {
        this.adjacencyList[v].push({node:w, weight});
        this.adjacencyList[w].push({node:v, weight});
        this.edges++;
    }

    
    Dijkstra(startNode, endNode){

    // pretty much the rithmschool solution 

    let dist = {};
    let unvisited = {}; 
    let min; 
    let tempDist;
    let current;
    let previous = {};

    for (let node in this.adjacencyList) {
        unvisited[node] = true;
        previous[node] = undefined;
        node === startNode? dist[node] = 0 : dist[node] = Infinity;
    }

    while(unvisited[endNode]) {
        min = Infinity;
        current = Object.keys(unvisited).reduce(function(acc, node) {
        if (dist[node] < min) {
            acc = node;
            min = dist[node];
        }
        return acc;
        }, undefined);  

        delete unvisited[current];

        for (let val of this.adjacencyList[current]) {
        if (unvisited[val.node]) {
            tempDist = dist[current] + this.adjacencyList[current][this.adjacencyList[current].indexOf(val)].weight
            if (tempDist < dist[val.node]) {
            previous[val.node] = current
            dist[val.node] = tempDist;
            }
        }
        }
          
    }

    function tracePath(map, start, end) {
        let path = [];
        let next = end;
        while (true) {
          path.unshift(next);
          if (next === start) {
            break;
          }
          next = map[next];
        }
      
        return path;
    };

    return [dist[endNode], tracePath(previous, startNode, endNode)];
    }
    
}
*/

class Graph{
    constructor(){
        this.vertices = [];
        this.adjacencyList = {};
        this.edges = 0;
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjacencyList[v] = [];
    }

    addEdge(v, w) {
        this.adjacencyList[v].push(w);
        this.adjacencyList[w].push(v);
        this.edges++;
    }

    removeEdge(v,w) {
        var index1 = this.adjacencyList[v] ? this.adjacencyList[v].indexOf(w) : -1;
        var index2 = this.adjacencyList[w] ? this.adjacencyList[w].indexOf(v) : -1;
        if(index1 > - 1) this.adjacencyList[v].splice(index1, 1);
        if(index2 > - 1) this.adjacencyList[w].splice(index2, 1);
        //delete this.adjacencyList[w].v;
        //this.adjacencyList[w].delete(v);
        this.edges--;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
          return;
        }
        for (let adjacentVertex in this.adjacencyList[vertex]) {
          console.log('adj', this.adjacencyList[vertex][adjacentVertex]);
          this.removeEdge(vertex, this.adjacencyList[vertex][adjacentVertex]);
          this.removeEdge(this.adjacencyList[vertex][adjacentVertex], vertex);
        }
        delete this.adjacencyList[vertex];
        this.vertices = this.vertices.filter(el => el !== vertex)
    }

    size(){
        return this.vertices.length;
    }

    numberOfEdges(){
        return this.edges;
    }

    breadthFirstSearch(node = this.vertices[0]) {
   // use an optimized queue
   let q = [];
   let explored = new Set();
   q.push(node);

   let result = []

   explored.add(node);

   while (q.length) {
      let t = q.shift();

      result.push(t);

      this.adjacencyList[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
         explored.add(n);
         q.push(n);
      });
   }
   return result;
}

depthFirstSearch(node) {
    let result = []
    // use a stack
    let s = [];
    let explored = new Set();
    s.push(node);
 
    explored.add(node);
 
    while (s.length > 0) {
       let t = s.pop();
 
    result.push(t);
 
    this.adjacencyList[t]
    .filter(n => !explored.has(n))
    .forEach(n => {
       explored.add(n);
       s.push(n);
       });
    }
    return result;
 }

    display() {
        for (let vertex in graph) {
          console.log(vertex + " -> " + [...graph[vertex]]);
        }
    }
}

class WeightedGraph extends Graph {

    addEdge(v, w, weight) {
        this.adjacencyList[v].push({node:w, weight});
        this.adjacencyList[w].push({node:v, weight});
        this.edges++;
    }

    /*
    Dijkstra(startNode, endNode){

    // pretty much the rithmschool solution 

    let dist = {};
    let unvisited = {}; 
    let min; 
    let tempDist;
    let current;
    let previous = {};

    for (let node in this.adjacencyList) {
        unvisited[node] = true;
        previous[node] = undefined;
        node === startNode? dist[node] = 0 : dist[node] = Infinity;
    }

    while(unvisited[endNode]) {
        min = Infinity;
        current = Object.keys(unvisited).reduce(function(acc, node) {
        if (dist[node] < min) {
            acc = node;
            min = dist[node];
        }
        return acc;
        }, undefined);  

        delete unvisited[current];

        for (let val of this.adjacencyList[current]) {
        if (unvisited[val.node]) {
            tempDist = dist[current] + this.adjacencyList[current][this.adjacencyList[current].indexOf(val)].weight
            if (tempDist < dist[val.node]) {
            previous[val.node] = current
            dist[val.node] = tempDist;
            }
        }
        }
          
    }

    function tracePath(map, start, end) {
        let path = [];
        let next = end;
        while (true) {
          path.unshift(next);
          if (next === start) {
            break;
          }
          next = map[next];
        }
      
        return path;
    };

    return [dist[endNode], tracePath(previous, startNode, endNode)];
    }
  */
  	Dijkstra(start, finish){
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [] // could use a set but have to convert back to array anyway
		let smallest;

		// build up initial state
		for(let vertex in this.adjacencyList){
			if(vertex === start){
				nodes.enqueue(vertex, 0);
				distances[vertex] = 0;
			}else{
				distances[vertex] = Infinity;
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		// as long as there is something to visit
		while(nodes.values.length){
			smallest = nodes.dequeue().val;
			if (smallest === finish){
				// WE ARE DONE
				// BUILD UP PATH TO RETURN AT END
				while(previous[smallest]){
                //console.log('prev', previous[smallest])
                //console.log('smallest', smallest)
                if(!path.includes(smallest)){
                path.push(smallest); 
                }
				smallest = previous[smallest];
			}
			}
			if(smallest || distances[smallest] != Infinity){
			  	for(let neighbor in this.adjacencyList[smallest]){
					// find neighboring node
					let nextNode = this.adjacencyList[smallest][neighbor];
					//console.log(nextNode);
					// calculate new distance to neighboring node
					let candidate =distances[smallest] + nextNode.weight;
					let nextNeighbor = nextNode.node;
					
					if(candidate < distances[nextNeighbor]){
					// updating new smallest distance to neighbor
					distances[nextNeighbor] = candidate;
					// updating previous – How we got to neighbor
					previous[nextNeighbor] = smallest;
					// enqueue in priority queue with new priority
					nodes.enqueue(nextNeighbor, candidate);
					}
				}
			}
		
		}
      
      path.push(start)

      return [distances[finish], path.reverse()]
	}
    
}

class PriorityQueue{

constructor(){
this.values =[];
}

enqueue(val, priority){
this.values.push({val, priority});
this.sort()
};

dequeue(){
return this.values.shift();
};

sort(){
this.values.sort((a,b) => a.priority -b.priority);

};
}