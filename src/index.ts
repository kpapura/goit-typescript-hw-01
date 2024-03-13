const button = document.querySelector('button')
const input = document.querySelector('input')

if (button && input) {
    button.addEventListener("click", () => {
        greting(input.value, "Welcome")
        input.value=''

    })
}

function greting(name:string, greet:string) {
    console.log(`${greet}, ${name}`);
}