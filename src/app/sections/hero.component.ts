import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
  <section class="section hero-bg" id="hero">
    <div class="container" style="position:relative; padding: 3.5rem 0;">
      <span class="kicker">EC-Council Certified</span>
      <h1 style="font-size: clamp(2rem, 4.5vw, 3.2rem); max-width: 900px;">
        Cyber Security – <span style="color: var(--accent)">Certified Ethical Hacking (CEH) Program</span>
      </h1>
      <p style="max-width: 720px;">
        Become a job‑ready ethical hacker with hands‑on labs, real‑world attack simulations,
        and expert mentorship. Learn to think like an attacker—defend like a pro.
      </p>
      <div style="display:flex; gap: .8rem; flex-wrap: wrap; margin-top: .6rem;">
        <a class="btn" href="#register">Register Now</a>
        <a class="btn" href="#curriculum" style="background: none; border: 1px solid rgba(255,255,255,.18); box-shadow:none;">Explore Curriculum</a>
      </div>

      <ul style="display:flex; gap: 1.2rem; padding:0; margin-top:1.4rem; list-style:none; flex-wrap:wrap;">
        <li class="card" style="display:flex; align-items:center; gap:.6rem;">
          <img src="assets/icon-labs.svg" alt="" width="22" height="22"> 20+ Guided Labs
        </li>
        <li class="card" style="display:flex; align-items:center; gap:.6rem;">
          <img src="assets/icon-certificate.svg" alt="" width="22" height="22"> EC‑Council Certificate
        </li>
        <li class="card" style="display:flex; align-items:center; gap:.6rem;">
          <img src="assets/icon-clock.svg" alt="" width="22" height="22"> 80–100 Hours
        </li>
      </ul>
    </div>
  </section>
  `
})
export class HeroComponent {}
