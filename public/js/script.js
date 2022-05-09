const closeAlert = () => {
    const close = document.querySelector("#close-message");
    const message = document.querySelector(".message");

    close.addEventListener("click", () => {
        message.style.display = "none";
    });

    setTimeout(() => {
        message.style.display = "none";
    }, 5000);
};

closeAlert();