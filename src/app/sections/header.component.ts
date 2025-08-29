import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
  <header class="header">
    <div class="container">
      <a href="#" class="logo" aria-label="Home">
        <img src="assets/icon-shield.svg" alt="" width="32" height="32" />
        <span>CEH Program</span>
      </a>

      <!-- Hamburger -->
      <button
        class="menu-toggle"
        (click)="toggleMenu()"
        [attr.aria-expanded]="menuOpen"
        aria-controls="primary-nav"
        aria-label="Toggle navigation"
        type="button"
      >
        <span [class.open]="menuOpen"></span>
        <span [class.open]="menuOpen"></span>
        <span [class.open]="menuOpen"></span>
      </button>

      <!-- nav wrapper toggles visibility on mobile -->
      <div id="primary-nav" class="nav-wrapper" [class.open]="menuOpen" role="navigation" aria-label="Primary">
        <nav>
          <ul class="nav-list">
            <li><a href="#highlights" (click)="closeMenu()">Highlights</a></li>
            <li><a href="#curriculum" (click)="closeMenu()">Curriculum</a></li>
            <li><a href="#about" (click)="closeMenu()">About</a></li>
            <li><a href="#register" class="btn" (click)="closeMenu()">Register</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  `,
  styles: [`
    /* BASIC LAYOUT */
    .header {
      background: linear-gradient(90deg, #1e3c72, #2a5298);
      color: #fff;
      padding: 1rem 1rem;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .logo { display:flex; align-items:center; text-decoration:none; color:#fff; font-weight:600; gap:0.5rem; }
    .logo img { display:block; }

    /* NAV (desktop styling) */
    .nav-wrapper { /* default visible on desktop via media query below */ }
    nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      padding: 0.5rem 0.75rem;
      border-radius: 6px;
      font-weight: 500;
    }
    nav a:hover { background: rgba(255,255,255,0.12); color:#fff; }

    .btn {
      background: #bb2929;
      color: #fff;
      padding: 0.45rem 0.9rem;
      border-radius: 6px;
      font-weight:700;
      display:inline-block;
    }

    /* HAMBURGER (hidden on desktop) */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      width: 36px;
      height: 32px;
      padding: 0;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
      align-items: center;
      z-index: 1200;
    }
    .menu-toggle span {
      display: block;
      width: 22px;
      height: 2.6px;
      background: #fff;
      border-radius: 2px;
      transform-origin: center;
      transition: transform .25s ease, opacity .18s ease;
    }
    .menu-toggle span.open:nth-child(1) { transform: rotate(45deg) translate(3px, 3px); }
    .menu-toggle span.open:nth-child(2) { opacity: 0; transform: translateX(-6px); }
    .menu-toggle span.open:nth-child(3) { transform: rotate(-45deg) translate(3px, -3px); }

    /* MOBILE: hide nav by collapsing wrapper with max-height + opacity */
    .nav-wrapper {
      position: absolute;
      right: 0;
      left: 0;
      top: 64px; /* adjust to header height */
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      visibility: hidden;
      background: linear-gradient(180deg,#1e3c72,#2a5298);
      transition: max-height .36s ease, opacity .25s ease, visibility .25s ease;
    }
    .nav-wrapper nav { padding: 0.5rem 1rem 1rem; }
    .nav-wrapper nav ul { flex-direction: column; gap: 0.6rem; }
    .nav-wrapper.open {
      max-height: 420px;     /* large enough for menu items */
      opacity: 1;
      visibility: visible;
    }

    /* RESPONSIVE BREAKPOINTS */
    @media (max-width: 992px) {
      /* show hamburger on mobile */
      .menu-toggle { display: flex; }

      /* desktop inline nav is disabled on small screens -- wrapper controls visibility */
      nav ul { display: flex; }

      .container { padding-right: 0.5rem; padding-left: 0.5rem; }
      .logo { font-size: 1rem; }
      .btn { width: 100%; box-sizing: border-box; display: inline-block; text-align:center; }
    }

    /* On large screens make nav-wrapper visible & static (no collapse) */
    @media (min-width: 993px) {
      .menu-toggle { display: none; }
      .nav-wrapper {
        position: static;
        max-height: none;
        opacity: 1;
        visibility: visible;
        background: transparent;
      }
      .nav-wrapper nav { padding: 0; }
      .nav-wrapper nav ul { flex-direction: row; }
    }
  `]
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
