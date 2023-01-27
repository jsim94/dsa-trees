/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(stack = [this.root], sum = 0) {
    if (stack.length === 0 || stack[0] === null) return sum;

    const node = stack.pop();
    node.children.forEach((node) => stack.push(node));

    sum += node.val;

    return this.sumValues(stack, sum);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(stack = [this.root], evens = 0) {
    if (stack.length === 0 || stack[0] === null) return evens;

    const node = stack.pop();
    node.children.forEach((node) => stack.push(node));

    if (node.val % 2 === 0) evens++;

    return this.countEvens(stack, evens);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, stack = [this.root], total = 0) {
    if (stack.length === 0 || stack[0] === null) return total;

    const node = stack.pop();
    node.children.forEach((node) => stack.push(node));

    if (node.val > lowerBound) total++;

    return this.numGreater(lowerBound, stack, total);
  }
}

module.exports = { Tree, TreeNode };
