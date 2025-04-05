window.onload = function () {
    Swal.fire({
        title: 'Welcome!',
        text: 'Welcome to our FullStack Project',
        icon: 'success',
        confirmButtonText: 'Cool'
    });
};


const btn = document.createElement("button");
btn.innerText = "Change Background";
btn.className = "btn btn-primary";
document.body.appendChild(btn);

btn.onclick = () => {
  document.body.style.backgroundColor = "lightblue";
};


