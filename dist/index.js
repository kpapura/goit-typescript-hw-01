const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener("click", () => {
        greting(input.value, "Welcome");
        input.value = '';
    });
}
function greting(name, greet) {
    console.log(`${greet}, ${name}`);
}
//# sourceMappingURL=index.js.map