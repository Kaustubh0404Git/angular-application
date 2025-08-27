import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
  <footer class="section" aria-labelledby="footer-title">
    <div class="container">
      <div class="grid cols-2">
        <div>
          <h3 id="footer-title">Get in Touch</h3>
          <p>
            Email: <a href="mailto:training&#64;example.com">training&#64;example.com</a><br>
            Phone: <a href="tel:+91 00000 00000">+91  0123456789</a><br>
            Address: 123 Cyber Park, Tech City, 560001
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>
            <a href="#" aria-label="LinkedIn">LinkedIn</a> ·
            <a href="#" aria-label="Twitter/X">Twitter</a> ·
            <a href="#" aria-label="YouTube">YouTube</a> ·
            <a href="#" aria-label="Instagram">Instagram</a>
          </p>
        </div>
      </div>
      <p style="margin-top:1rem; font-size:.85rem; opacity:.8;">
        © {{year}} CEH Program. EC‑Council certification trademarks are owned by their respective holders.
      </p>
    </div>
  </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
