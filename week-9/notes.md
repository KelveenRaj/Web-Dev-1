# Week 9: JavaScript Events

## Topics Covered

1. What are JavaScript Events?
   - Examples: `click`, `mouseover`, `keyup`.
2. Adding Event Listeners:
   - `addEventListener` method.
3. Practical use of events in web interactivity.

## Examples

- **Adding an Event Listener**:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button was clicked!");
});
```
