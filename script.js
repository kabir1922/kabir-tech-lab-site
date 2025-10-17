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


// Navbar active‑link highlight (add this part)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links a.active')?.classList.remove('active');
    link.classList.add('active');
  });
});
document.getElementById("year").textContent = new Date().getFullYear();
