const projects = [
  { title: "Jumpi's Questions Trivia", desc: "Lorem ipsum.", url: "https://apps.apple.com/tr/app/jumpis-questions-kids-trivia/id6463607047" },
  { title: "Kidz Jungle", desc: "Lorem ipsum.", url: "https://apps.apple.com/tr/app/kidzjungle-educational-videos/id1541521199" },
  { title: "3D Slider", desc: "WebGL ile yapıldı", url: "#" },
  { title: "SVG Motion", desc: "Animasyonlu çizgiler", url: "#" }
];

function renderProjects() {
  const projectContainer = document.getElementById('project-list');
  projectContainer.innerHTML = '';
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-links">
        <a href="${p.url}" target="_blank">İncele</a>
      </div>
    `;
    projectContainer.appendChild(card);
  });
}

// Initialize projects
renderProjects();

// Contact form handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('form-response').innerHTML = `<p>Teşekkürler, ${name}! Mesajınız alındı.</p>`;
  this.reset();
});

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  darkToggle.textContent = '☀️';
}

darkToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  darkToggle.textContent = isDark ? '☀️' : '🌙';
});
