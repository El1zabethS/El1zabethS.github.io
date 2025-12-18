
// ======================================
// DYNAMIC HEADER RENDERER
// ======================================
// This Function injects the header HTML into any page that calls it.
// It automatically detects the current directory level to fix links (../ vs ./)
// and highlights the correct active navigation item.

function renderHeader() {
  // Check if we are on the root index page
  const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');

  // Set the base path for links. 
  // If we are in a subfolder (like ProjectsPage), we need to go up one level (../).
  // If we are on root, we stay here.
  const basePath = isRoot ? '' : '../';

  // Determine current page for styling the "active" link
  const path = window.location.pathname;
  const isExperience = path.includes('experience.html');
  const isProjects = path.includes('projects.html');
  const isHome = path.includes('index.html') || path.endsWith('/');

  // Template literal for the Header HTML
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
      <!-- Links use basePath variable to ensure they work from any folder -->
      <li><a href="${basePath}index.html" class="${isHome ? 'active' : ''}">Home</a></li>
      <li><a href="${basePath}ExperiencePage/experience.html" class="${isExperience ? 'active' : ''}">Experience</a></li>
      <li><a href="${basePath}ProjectsPage/projects.html" class="${isProjects ? 'active' : ''}">Projects</a></li>
    </ul>
  </nav>
  `;

  // Inject the HTML into the placeholder div
  const placeholder = document.getElementById('header-placeholder');
  if (placeholder) {
    placeholder.innerHTML = headerHTML;
  }
}

// Ensure DOM is loaded before running
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
});
