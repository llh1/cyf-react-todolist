# CYF React Todo List

### Step 6: Update a todo item

- When doing a double click on an item value, we show an input field to let the user edit the value of the todo item.
- One function `updateTodoItem` is added in the `App` component and passed to the `TodoItem` component to update an item value in the `todoItems` state.
- Most of the remaining logic happens in the `TodoItem` component.
- In the `TodoItem` we need to track 2 new things.
- The first thing is the `editMode` state, which tells us if we are currently in edit mode or not. When `editMode` is true, we replace the text of the todo item with a form and an input field. When `editMode` is false, we simply display the text of the todo item.
- The second thing is the `itemNewValue` state, which records the new value of the todo item when the user updates it.
- After the user edits the value of the todo item and press enter, we call the `updateTodoItem` function to update the `todoItems` state in the `App` component. And we also set the `editMode` back to false.

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
