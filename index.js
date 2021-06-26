// global variables
const addLast = document.getElementById("add_last");
const lists = document.getElementById("linkedList");
const clickLast = document.getElementById("add_last_onclick");
const clickDelete = document.getElementById("delete_onlick");
const clickStart = document.getElementById('add_beg_onclick');
const addStart = document.getElementById('add_beg');
const clickDeleteStart = document.getElementById('delete_start_onclick');
const removeItem = document.getElementById('remove_item');
const clickRemove = document.getElementById('remove_onclick');


//add nodes to the list
function insertNode() {
    let element = addLast.value;
    lists.appendChild(displayNode(element))
    addLast.value = ""
}

// delete node from the list
function deleteNode() {
    lists.lastChild.remove()
}

//add nodes at the beginning
function insertAtBeginning() {
    let element = addStart.value
    lists.prepend(displayNode(element))
    addStart.value = ""
}

//delete node from beginning
function deleteStart() {
    lists.firstChild.remove()
}

//delete specific element
function deleteSpecific() {
    element = removeItem.value
    let count = document.getElementsByTagName('i').length
    if (count == 0) {
        alert("OOPS!!!! Empty list") 
    } else {
        for (var i = 0; i < count; i++) {
            if (document.getElementById("node" + element).textContent == element) {
                document.getElementById("node" + element).remove()
            }
        }
        removeItem.value = ""
    }
}

// Nodes
function displayNode(element) {
    let node_id = "node" + element
    let arrow_node = document.createElement("div");
    arrow_node.id = node_id;
    arrow_node.classList.add("arrow-nodes")

    let nodeSequence = document.createElement("div");
    nodeSequence.classList.add("nodeseq");

    let elementEle = document.createElement("p");
    elementEle.classList.add("element");
    elementEle.textContent = element; 
    nodeSequence.appendChild(elementEle);

    arrow_node.appendChild(nodeSequence)

    let imgCon = document.createElement("i") 
    imgCon.classList.add("fas", "fa-arrow-right", "arrow")
    arrow_node.appendChild(imgCon)

    return arrow_node
}


//Event listeners events
clickLast.addEventListener('click', insertNode)
clickDelete.addEventListener('click', deleteNode)
clickStart.addEventListener('click', insertAtBeginning)
clickDeleteStart.addEventListener('click', deleteStart)
clickRemove.addEventListener('click', deleteSpecific)