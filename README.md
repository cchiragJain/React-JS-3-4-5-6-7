# Topics Covered

- Added `Radium` to use pseudo selectors and media queries in inline styles
  - Wrap the component in Radium() when exporting
  - Need to use StyleRoot component (wrapping the whole div from the App component) from Radium as well in order to use media queries

Use `git checkout 0ac5df` to see the radium part.

- Added `styled-components` to add styling as components
  - Use vscode extension styled components for code completions and highlighting
  - Conditional rendering is done by passing in the condition value as props and then using it inside the styled component by ternary conditioning

Use `git checkout 51ada2` to see the styled-components part.

- CSS modules can use natively in React (react-scripts version > 2)
  - Scopes CSS locally to the components
