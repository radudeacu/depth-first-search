function detectCycle(graph) {
    const visited = new Set();
    const recStack = new Set();

    function dfs(node) {
        if (!visited.has(node)) {
            visited.add(node);
            recStack.add(node);

            const neighbors = graph[node];
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor) && dfs(neighbor)) {
                    return true;
                } else if (recStack.has(neighbor)) {
                    return true;
                }
            }
        }
        recStack.delete(node);
        return false;
    }

    for (let node in graph) {
        if (dfs(node)) {
            return true;
        }
    }
    return false;
}

// Example graph with a cycle
const graphWithCycle = {
    'A': ['B'],
    'B': ['C'],
    'C': ['D'],
    'D': ['B'] // Cycle here
};

console.log(detectCycle(graphWithCycle)); // Output: true
