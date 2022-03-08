const { body } = document;

function changeBackground(bgNum) {
    body.className === `background-${bgNum}` ? body.classList.replace(body.className, `background-0`) : body.classList.replace(body.className, `background-${bgNum}`);
}
