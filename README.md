# CYF React Todo List

### Step 1: Add a new todo item and display all the todo items in a list

- Different parts of the app have first been split in different components. The Header component contains the title and the form to add a new todo item. The TodoList component will show the list of todo items.
- The `todoItems` state needs to be in the `App` component, as it is used by both `Header` and `TodoList` components. At the moment, the `todoItems` state simply records the value of each todo item in an array of string.

### How to use this repo?
The implementation of this todo list project is spread across several branches to show the progression of the code. 
The main branch contains a mostly empty project, acting as a starting point to build a Todo List application in React.
This initial empty project has been created with `create-react-app` and the package `todomvc-app-css` has been included to get CSS styles ready to use.

The following features have been implemented:

- Step 0 (`main` branch): empty project, static todo list structure with some CSS styles applied.
- Step 1 (`step-1` branch): Add a new todo item and display all the todo items in a list
- Step 2 (`step-2` branch): Delete a todo item
- Step 3 (`step-3` branch): Mark a todo item as completed
- Step 4 (`step-4` branch): Display the number of items to complete
- Step 5 (`step-5` branch): Filter todo items: All, Active, Completed
- Step 6 (`step-6` branch): Update a todo item
- Step 7 (`step-7` branch): Sort todo items alphabetically
- Step 8 (`step-8` branch): Search todo items

Try to complete each step progressively from the main branch. 
To check the solution for a given step, check the corresponding branch. For example, if you want to see the solution for Step 5, check the branch `step-5`. In each branch, this file `README.md` will be updated to give some tips and explanation on how to implement the step.
Don't worry if your solution is different with the one in this repo! There may be different options to solve this exercise.

Enjoy!
