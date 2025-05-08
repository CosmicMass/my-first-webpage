// Contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    const output = document.getElementById('form-response');
    output.innerHTML = `<p>Teşekkürler, ${name}! Mesajınız alındı.</p>`;
  
    this.reset();
});

// Dark mode toggle functionality
const darkToggle = document.getElementById('dark-toggle');

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    // Karanlık moda geçildi → Güneş ikonu ve metin "Işığı aç"
    darkToggle.textContent = '☀️';
  } else {
    // Aydınlık moda geçildi → Ay ikonu ve metin "Işığı kapat"
    darkToggle.textContent = '🌙';
  }
});
