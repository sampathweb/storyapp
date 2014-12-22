// Services

function Node(title, content, parent) {
  this.title = title;
  this.content = content;
  this.parent = parent;
  this.next = {} // List of Objects
}

Node.prototype.get_parent = function() {
    // check for valid index
    if (this.parent !== null) {
        return this.parent;
    }
    return this;
};

Node.prototype.get_next = function(key) {
    // check for valid index
    console.log(this.next);
    var next = this.next[key];
    if (typeof next !== 'undefined' && next !== null) {
        return next['node'];
    }
    return this;
};

Node.prototype.get_options = function() {
    // Return a list of options
    return this.next;
}

Node.prototype.add_next = function(description, node) {
    // check for valid index
    key = '0'; // next value in the index
    this.next[key] = {'choice': description, 'node': node};
    return this.next[key];
};

storyApp.service('storyService', function() {
    var self = this;

    self.root = new Node('Start', 'Start of App', null);
    self.nodes = [self.root];

    self.add_node = function(title, content, parentNode) {
        parentNode = typeof parentNode !== 'undefined' && parentNode !== null ? parentNode : self.root;
        var node = new Node(title, content, parentNode);
        parentNode.add_next(title, node); // Add Passage
        self.nodes.push(node);
        return node;
    }

    self.get_nodes = function() {
        return self.nodes;
    }

    self.get_root = function() {
        return self.root;
    }

    self.get_content = function(node) {
        if (node) {
            return node.passage;
        }
        return null;
    }

    self.get_next = function(node, nextkey) {
        if (node) {
            key = typeof nextkey !== 'undefined' ? nextkey : '0';
            return node.get_next(key);
        }
        return null;
    }

    self.get_parent = function(node) {
        return node.get_parent();
    }
});