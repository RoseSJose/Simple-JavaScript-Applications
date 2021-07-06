document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#new-task").onsubmit = () => {
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        document.querySelector('#tasks').append(li);

        document.querySelector('#task').value = '';
        return false;
    };
});