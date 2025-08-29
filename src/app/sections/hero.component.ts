import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="section hero-bg" id="hero">
    <div class="hero-slider">
      <div 
        class="slide" 
        *ngFor="let img of images; let i = index" 
        [class.active]="i === currentIndex"
        [style.backgroundImage]="'url(' + img + ')'">
      </div>
      <div class="overlay"></div>

      <div class="container">
        <span class="kicker">EC-Council Certified</span>
        <h1>
          Cyber Security – <span style="color: var(--accent)">Certified Ethical Hacking (CEH) Program</span>
        </h1>
        <p>
          Become a job-ready ethical hacker with hands-on labs, real-world attack simulations,
          and expert mentorship. Learn to think like an attacker—defend like a pro.
        </p>
        <div class="cta-buttons">
          <a class="btn" href="#register">Register Now</a>
          <a class="btn outline" href="#curriculum">Explore Curriculum</a>
        </div>

        <ul class="features">
          <li class="card">
            <img src="assets/icon-labs.svg" alt="Labs" width="22" height="22"> 20+ Guided Labs
          </li>
          <li class="card">
            <img src="assets/icon-certificate.svg" alt="Certificate" width="22" height="22"> EC-Council Certificate
          </li>
          <li class="card">
            <img src="assets/icon-clock.svg" alt="Hours" width="22" height="22"> 80–100 Hours
          </li>
        </ul>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .hero-slider {
      position: relative;
      min-height: 100vh;
      overflow: hidden;
    }
    .slide {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
    .slide.active {
      opacity: 1;
      z-index: 0;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.55);
      z-index: 1;
    }
    .container {
      position: relative;
      z-index: 2;
      padding: 2rem;
      color: #fff;
      text-align: left;
      max-width: 1000px;
    }
    h1 {
      font-size: clamp(2rem, 4.5vw, 3.2rem);
      max-width: 900px;
      margin: 1rem 0;
    }
    p {
      max-width: 720px;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
    .cta-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 1rem 0;
    }
    .btn {
      background: var(--accent, #ff5722);
      padding: .8rem 1.6rem;
      border-radius: 6px;
      color: #fff;
      font-weight: 600;
      text-decoration: none;
      transition: 0.3s;
    }
    .btn:hover {
      background: #e64a19;
    }
    .btn.outline {
      background: none;
      border: 1px solid rgba(255,255,255,.7);
      box-shadow: none;
    }
    .features {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0;
      margin-top: 1.5rem;
      list-style: none;
    }
    .card {
      display: flex;
      align-items: center;
      gap: .6rem;
      padding: .6rem 1rem;
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
      font-size: 0.95rem;
      backdrop-filter: blur(4px);
    }

    /* 📱 Responsive */
    @media (max-width: 768px) {
      .container { text-align: center; }
      h1 { font-size: clamp(1.6rem, 6vw, 2.5rem); }
      .features { justify-content: center; }
      .cta-buttons { justify-content: center; }
    }
    @media (max-width: 480px) {
      p { font-size: 0.95rem; }
      .btn { width: 100%; text-align: center; }
      .features { flex-direction: column; align-items: center; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  images: string[] = [
    '../../assets/hero1.jpg.jpg',
    '../../assets/hero2.jpg.jpg',
    '../../assets/hero1.jpg.jpg'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 10000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
