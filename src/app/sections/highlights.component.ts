import { Component } from '@angular/core';

@Component({
  selector: 'app-highlights',
  standalone: true,
  template: `
  <section class="section" id="highlights" aria-labelledby="highlights-title">
    <div class="container">
      <h2 id="highlights-title" style="font-size: clamp(1.6rem, 3.5vw, 2.2rem);">Program Highlights</h2>
      <p>Key features designed to accelerate your cybersecurity career.</p>
      <div class="grid cols-3" style="margin-top:1rem;">
        <article class="card">
          <img src="assets/icon-shield.svg" alt="" width="36" height="36">
          <h3>Offensive & Defensive Skills</h3>
          <p>Master reconnaissance, scanning, exploitation, and defensive hardening across systems, networks, and web apps.</p>
        </article>
        <article class="card">
          <img src="assets/icon-labs.svg" alt="" width="36" height="36">
          <h3>Hands‑on Labs</h3>
          <p>Practice in a safe, isolated lab with real tools—Burp Suite, Metasploit, Wireshark, Nmap, and more.</p>
        </article>
        <article class="card">
          <img src="assets/icon-mentor.svg" alt="" width="36" height="36">
          <h3>Mentor Support</h3>
          <p>Weekly doubt‑clearing sessions and career guidance from experienced security practitioners.</p>
        </article>
        <article class="card">
          <img src="assets/icon-certificate.svg" alt="" width="36" height="36">
          <h3>EC‑Council Certified</h3>
          <p>Earn an industry‑recognized credential demonstrating applied ethical hacking competence.</p>
        </article>
        <article class="card">
          <img src="assets/icon-briefcase.svg" alt="" width="36" height="36">
          <h3>Career‑Ready Projects</h3>
          <p>Build a portfolio: vulnerability assessment report, exploit write‑ups, and remediation playbooks.</p>
        </article>
        <article class="card">
          <img src="assets/icon-clock.svg" alt="" width="36" height="36">
          <h3>Flexible Schedules</h3>
          <p>Weekend or evening cohorts available; fully online with recorded sessions.</p>
        </article>
      </div>
    </div>
  </section>
  `
})
export class HighlightsComponent {}
