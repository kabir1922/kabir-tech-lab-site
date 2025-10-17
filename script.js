// Example: typing effect for your job title
document.addEventListener("DOMContentLoaded", () => {
  const text = "Automation • Web Development • Creative Tech";
  const el = document.createElement("p");
  el.className = "typing";
  document.querySelector(".hero-content").appendChild(el);

  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
});
