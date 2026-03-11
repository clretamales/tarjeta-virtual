const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <header class="top-bar">
    <div class="brand">
      <p class="brand-name">José Andrés Retamales Ponce</p>
      <p class="brand-role">Arquitecto de Software / Arquitecto TI Empresarial</p>
    </div>
    <nav class="main-nav" aria-label="Navegación principal">
      <a href="#services">Servicios</a>
      <a href="#value">Valor</a>
      <a href="#profile">Perfil</a>
      <a href="#map">Mapa</a>
      <a href="#contact">Contacto</a>
    </nav>
    <div class="top-actions">
      <a
        class="btn btn-outline whatsapp-link"
        href="https://wa.me/569XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span aria-hidden="true">💬</span>
        Contactar por WhatsApp
      </a>
      <button class="menu-toggle" aria-label="Abrir menú">
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
`;

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    if (!this.hasChildNodes()) {
      this.appendChild(headerTemplate.content.cloneNode(true));
    }

    this.setupMenu();
  }

  setupMenu() {
    const menuToggle = this.querySelector(".menu-toggle");
    const nav = this.querySelector(".main-nav");

    if (!menuToggle || !nav) {
      return;
    }

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.classList.remove("open");
      });
    });
  }
}

customElements.define("header-component", HeaderComponent);
