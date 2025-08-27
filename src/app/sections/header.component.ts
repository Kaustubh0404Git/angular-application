import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
  <header class="header">
    <div class="container">
      <a href="#" class="logo" aria-label="Home">
        <img src="assets/icon-shield.svg" alt="" width="32" height="32" />
        <span>CEH Program</span>
      </a>
      <nav aria-label="Primary">
        <ul class="nav-list">
          <li><a href="#highlights">Highlights</a></li>
          <li><a href="#curriculum">Curriculum</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#register" class="btn" aria-label="Register for the program">Register</a></li>
        </ul>
      </nav>
    </div>
  </header>
  `,
  styles: [`
    /* Header container */
    .header {
      background: linear-gradient(90deg, #1e3c72, #2a5298);
      color: #fff;
      padding: 1rem 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Logo */
    .logo {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 1.2rem;
      text-decoration: none;
      color: #fff;
    }

    .logo img {
      margin-right: 0.5rem;
      transition: transform 0.3s ease;
    }

    .logo:hover img {
      transform: rotate(15deg);
    }

    /* Navigation */
    nav ul {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    nav ul li a {
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      padding: 0.5rem 0.8rem;
      border-radius: 6px;
      transition: background 0.3s, color 0.3s;
    }

    nav ul li a:hover {
      background: rgba(255, 255, 255, 0.2);
      color: #000000ff;
    }

    /* Register button */
    .btn {
      background: #bb2929ff;
      color: #1e3c72;
      font-weight: bold;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      color: #1e3c72;
    }

    /* Responsive */
    @media(max-width: 768px){
      .container {
        flex-direction: column;
        gap: 1rem;
      }

      nav ul {
        flex-direction: column;
        gap: 0.8rem;
      }

      .btn {
        width: 100%;
        text-align: center;
      }
    }
  `]
})
export class HeaderComponent { }

