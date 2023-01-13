const input = document.getElementById("input");
const submit = document.getElementById("submit");
const pretext = document.getElementById("pretext");
const text = document.getElementById("text");

//На введеня з input замінює предперегляд тексту
input.addEventListener("input", () => {

    //Змінює текст для предперегляду innerHTML
    pretext.innerHTML = input.value;
});

submit.addEventListener("click", () => {
    text.innerHTML = input.value;
});

