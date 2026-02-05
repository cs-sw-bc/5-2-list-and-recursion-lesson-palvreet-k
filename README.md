# Section 1: Linked Lists

### Learning Goal

By the end of this section, learners should be able to:

* Traverse a linked list
* Append a new value to the end of a linked list
* Explain what happens in memory during these operations

> **Note:** We already introduced what a linked list is in the previous class. This section focuses on *using* linked lists rather than redefining them.

---

## 1. Quick Recap (Pencils Up)

From the previous class, recall that:

* A linked list is made up of **nodes**
* Each node contains:

  * A value
  * A reference to the next node
* The first node is called the **head**
* If the head is lost, the entire list becomes inaccessible

Today, we will work with linked lists using **plain JavaScript objects and functions** (no classes).

---

## 2. Representing a Node in JavaScript

In JavaScript, a node can be represented as a simple object:

* It stores a value
* It stores a reference to the next node (or `null` if it is the last node)

Conceptually, a node looks like:

```
{
  value: 10,
  next: null
}
```

To make node creation easier, we will use a helper function.

---

## 3. Creating Nodes Using a Function (Pencils Down)

```js
function createNode(value) {
  return {
    value: value,
    next: null
  };
}
```

This function:

* Returns a new object
* Initializes `next` to `null`
* Allows us to create nodes consistently

---

## 4. Displaying a Linked List (Traversal)

To display a linked list, we must **start at the head** and move through each node until we reach `null`.

```js
function displayList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
```

Key ideas:

* `current` is used to walk through the list
* We stop when `current` becomes `null`
* The list is not modified during traversal

---

## 5. Appending a Value to the End of the List

Appending means adding a new node **at the end** of the linked list.

```js
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
```

What’s happening here:

* If the list is empty, the new node becomes the head
* Otherwise, we traverse to the last node
* We update the last node’s `next` reference
* The head remains unchanged

---

## 6. Using the Functions Together

```js
let head = null;

head = append(head, 10);
head = append(head, 20);
head = append(head, 30);

displayList(head);
```

Expected output:

```
10
20
30
```

---

## 7. Key Takeaways

* Linked lists are built using objects and references
* Traversal always starts from the head
* Appending requires walking through the list
* Appending is an **O(n)** operation because traversal is required
* Classes are not required to understand or implement linked lists

---

## 8. Reflection Questions (Discussion)

* Why can’t we access the last element directly?
* What would happen if we lost the `head` reference?
* Why is append slower than inserting at the beginning?

---

# Section 2: Recursion

### Learning Goal

By the end of this section, learners should be able to:

* Explain what recursion is using correct terminology
* Identify the base case and recursive case
* Understand how a recursive solution is derived from logic
* Implement a simple recursive function

---

## 1. What Is Recursion? (Pencils Up)

Recursion is a technique where a **function calls itself** to solve a problem.

A recursive solution works because:

* The problem can be broken into a **smaller version of the same problem**
* There is a clear point where the problem **stops getting smaller**

Every recursive function must have **two things**:

1. **Base case**
   The condition where the function stops calling itself.

2. **Recursive case**
   The part where the function calls itself with a *smaller input*.

If either is missing:

* No base case → infinite recursion
* No smaller input → recursion never reaches the base case

We will now use **one example only** to understand recursion completely.

---

## 2. Using Power of 2 to Understand Recursion (Still Pencils Up)

### Step 1: Understand the problem

Ask:

> What does (2^4) actually mean?

Write:

```
2^4 = 2 × 2 × 2 × 2
```

This shows that exponentiation is **repeated multiplication**.

---

### Step 2: Break the problem into a smaller version

Ask:

> Can we rewrite this using a smaller power?

Guide learners to:

```
2^4 = 2 × 2^3
```

Then continue:

```
2^3 = 2 × 2^2
2^2 = 2 × 2^1
2^1 = 2 × 2^0
```

Key observation:

* Same problem
* Smaller input each time

---

### Step 3: Identify the base case

Ask:

> When does this stop?

Answer:

```
2^0 = 1
```

This is the **base case** — the stopping condition.

---

### Step 4: Derive the recursive rule

From the steps above, derive the general rule:

```
2^n = 2 × 2^(n - 1)
```

Now connect this back to recursion terminology:

* **Base case**: when `n === 0`
* **Recursive case**: multiply by 2 and solve `2^(n - 1)`

At this point, the recursion logic is fully defined **without code**.

---

## 3. Translating the Logic into Code (Pencils Down)

```js
function powerOfTwo(n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive case
  return 2 * powerOfTwo(n - 1);
}
```

Example:

```js
powerOfTwo(4); // 16
```

---

## 4. Tracing the Recursive Calls

```
powerOfTwo(4)
→ 2 × powerOfTwo(3)
→ 2 × (2 × powerOfTwo(2))
→ 2 × (2 × (2 × powerOfTwo(1)))
→ 2 × (2 × (2 × (2 × powerOfTwo(0))))
→ 2 × 2 × 2 × 2 × 1
```

---

## 5. Practice Scenarios

#### Printing till n
A very simple scenario, where you have to print numbers from 1 to n without a for loop !

#### Factorial

Factorial of 5 = 5*4*3*2*1

#### Sum of numbers from 1 to n
Sum (5) = 5+4+3+2+1
Sum(5) = 5+Sum(4)

#### Fibonacci Series
Watch this video to understand fibonacci series. And try to write the code on your own !
[Recursion](https://www.youtube.com/watch?v=dDokMfPpfu4)

#### Linked List Display with recursion
Earlier we printed linked list items using a while loop. Try the same with recursion instead!



## 6. Key Takeaways

* Recursion means a function calls itself
* Every recursive solution needs a base case
* The problem must get smaller on each call
* Code is a direct translation of the derived logic
