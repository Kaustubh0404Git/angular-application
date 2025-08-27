import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  template: `
  <section class="section" id="curriculum" aria-labelledby="curriculum-title">
    <div class="container">
      <h2 id="curriculum-title" style="font-size: clamp(1.6rem, 3.5vw, 2.2rem);">Curriculum Overview</h2>
      <p>Six outcome‑oriented modules aligned to the CEH framework.</p>
      <div class="grid cols-2" style="margin-top:1rem;">
        <article class="card">
          <h3>01 • Information Security & Recon</h3>
          <p>Threat landscape, kill chain, OSINT, footprinting, and scanning strategies. Lab: mapping an attack surface.</p>
        </article>
        <article class="card">
          <h3>02 • Network Hacking & Sniffing</h3>
          <p>ARP spoofing, MITM, Wi‑Fi attacks, packet analysis with Wireshark, and traffic manipulation.</p>
        </article>
        <article class="card">
          <h3>03 • System Hacking & Privilege Escalation</h3>
          <p>Password attacks, malware basics, persistence, Linux/Windows privilege escalation techniques.</p>
        </article>
        <article class="card">
          <h3>04 • Web App Hacking</h3>
          <p>OWASP Top 10, SQLi, XSS, auth flaws, SSRF. Lab: intercepting and exploiting requests with Burp Suite.</p>
        </article>
        <article class="card">
          <h3>05 • Vulnerability Assessment & Exploitation</h3>
          <p>Nmap, Nessus, Metasploit workflows, exploit selection, and post‑exploitation.</p>
        </article>
        <article class="card">
          <h3>06 • Reporting & Defense</h3>
          <p>Evidence collection, professional reporting, remediation guidance, and defensive hardening checklists.</p>
        </article>
      </div>
    </div>
  </section>
  `
})
export class CurriculumComponent { }
