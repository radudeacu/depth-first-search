// Depth First Search

// DFS = a serach algorithm for traversing a tree or graph data structure

// 1. pick a route

// 2. Keep going until yo ureach a dead end, or a previously visited node

// 3. Backtrack to last node taht has unvisited adjacent neighbors

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function visualizeDFS(graph, startNode) {
    // stack for storing nodes to explore
    let stack = [startNode];
    // set to mark visited ndoes
    let visited = new Set();

    while (stack.length > 0) {
        console.log('Stack:', stack);
        let currentNode = stack.pop();

        if (!visited.has(currentNode)) {
            console.log(currentNode);
            visited.add(currentNode);

            // Highlight the current node
            document.getElementById(currentNode).classList.add('visited');

            // Pause to visualize the process
            await sleep(1000);

            let neighbors = graph[currentNode];
//for (let i = neighbors.length - 1; i >= 0; i--) // for reversed impl
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example graph
const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', 'G'],
    'D': ['H'],
    'E': [],
    'F': [],
    'G': [],
    'H': []
};



// Start visualization from node 'A'
visualizeDFS(graph, 'A');
