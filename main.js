document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".tabs div a");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("tabs");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit", e);
    const nome = document.getElementById("name").value;
    const cognome = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const oggetto = document.getElementById("object").value;
    const messaggio = document.getElementById("message").value;

    const body =
      `Nome: ${nome}%0A` +
      `Cognome: ${cognome}%0A` +
      `Email: ${email}%0A` +
      `Messaggio:%0A${encodeURIComponent(messaggio)}`;

    const mailtoLink = `mailto:giorgiaperone2000@gmail.com?subject=${encodeURIComponent(
      oggetto
    )}&body=${body}`;
    window.location.href = mailtoLink;
  });
});
