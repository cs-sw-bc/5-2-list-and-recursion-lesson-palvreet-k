// Create Single Node
function createNode(value) {
    return {
        value: value,
        next: null
    };
}

// Display List

function displayList(head) {
    let current = head;

    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

// Creating a Linked list

function append(head, value) {
    let newNode = createNode(value);

    // Case 1: Empty list
    if (head === null) {
        return newNode;
    }

    let current = head;

    // Move to the last node
    while (current.next !== null) {
        current = current.next;
    }

    // Link last node to new node
    current.next = newNode;

    return head;
}

// Delete a node

function remove(head, value){

    //  Make a copy
    let current = head;

    //  Go through list until we find the value to delete
    while (current.next.value !== value){
        current = current.next;
    }
    // Reassign the next and skip over the node to be deleted
    current.next= current.next.next;
}

function displayRecursive(current){
    if(current == null){
        return;
    }
    console.log(current.value);
    displayRecursive(current.next);
}

// Using the functions together
let head = null;

head = append(head, 10);
head = append(head, 20);
head = append(head, 30);
head = append(head, 80);
head = append(head, 50);
head = append(head, 100);

// displayList(head);

// head = remove(head, 80);
// console.log("After deletion:")
// displayList(head);
displayRecursive(head);
