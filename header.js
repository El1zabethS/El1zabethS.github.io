
// Function to render the header and navigation
function renderHeader() {
  const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
  const weirdPath = window.location.pathname.split('/').pop() === 'El1zabethS.github.io'; // Handle repo root edge case if needed, though 'endsWith' usually suffices.

  // Determine relative path for links
  const basePath = isRoot ? '' : '../';

  // Determine current page for active state
  const path = window.location.pathname;
  const isExperience = path.includes('experience.html');
  const isProjects = path.includes('projects.html');
  const isHome = path.includes('index.html') || path.endsWith('/');

  const headerHTML = `
  <header>
    <div class="header-left">
      <h1 class="new-bold">ELIZABETH<br><span class="seaton">SEATON</span></h1>
    </div>
    <div class="header-right">
      <p><a href="tel:6023771293" class="contact-link">602 - 377 - 1293</a></p>
      <p><a href="mailto:elizabeth.seaton35@gmail.com" class="contact-link">elizabeth.seaton35@gmail.com</a></p>
      <p>Chandler AZ 85224</p>
    </div>
  </header>

  <nav>
    <ul>
      <li><a href="${basePath}index.html" class="${isHome ? 'active' : ''}">Home</a></li>
      <li><a href="${basePath}ExperiencePage/experience.html" class="${isExperience ? 'active' : ''}">Experience</a></li>
      <li><a href="${basePath}ProjectsPage/projects.html" class="${isProjects ? 'active' : ''}">Projects</a></li>
    </ul>
  </nav>
  `;

  const placeholder = document.getElementById('header-placeholder');
  if (placeholder) {
    placeholder.innerHTML = headerHTML;
  }
}

// Run functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
});

