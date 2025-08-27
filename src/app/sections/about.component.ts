import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
  <section class="section" id="about" aria-labelledby="about-title">
    <div class="container">
      <h2 id="about-title" style="font-size: clamp(1.6rem, 3.5vw, 2.2rem);">About the Program</h2>
      <div class="card">
        <p>
          The <strong>Certified Ethical Hacking (CEH)</strong> program is a comprehensive,
          lab‑driven training that prepares you to identify, exploit, and remediate
          security weaknesses—ethically and legally. Guided by experienced practitioners,
          you will master reconnaissance, scanning, exploitation, and post‑exploitation
          techniques across networks, operating systems, and web applications. The
          curriculum blends theory with practical labs to ensure you can think like an
          attacker while acting as a defender. By the end of the program, you will be
          able to assess risks, execute controlled tests, document findings, and provide
          actionable remediation steps. This program aligns with EC‑Council’s standards
          and culminates in an industry‑recognized certificate that validates your
          applied skills. Whether you are upskilling or pivoting into cybersecurity,
          CEH provides a clear, hands‑on path to becoming job‑ready.
        </p>
      </div>
    </div>
  </section>
  `
})
export class AboutComponent {}
