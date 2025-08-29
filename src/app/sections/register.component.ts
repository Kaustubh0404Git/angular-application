
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <section class="section" id="register" aria-labelledby="register-title">
    <div class="container">

      <!-- Offer Banner -->
      <div style="background: var(--accent, #b02867ff); color:#11040aff; padding:1rem; border-radius:8px; margin-bottom:1rem; text-align:center; font-weight:600;">
        🎉 Limited seats — Book your seat today and get <span style="text-decoration:underline;">10% OFF </span>on first enroll !
      </div>

      <!-- Registration Section -->
      <h2 id="register-title" style="font-size: clamp(1.6rem, 3.5vw, 2.2rem);">Register Your Interest</h2>
      <p *ngIf="!showPayment()">Seats are limited. Fill out the form and our team will contact you with schedules and next steps.</p>

      <form *ngIf="!showPayment()" [formGroup]="form" (ngSubmit)="submit()" class="card" style="margin-top:1rem;">
        <div class="form-row two">
          <div>
            <label for="name">Full Name</label>
            <input id="name" type="text" formControlName="name" placeholder="Kaustubh Tilekar"/>
            <div class="error" *ngIf="form.get('name')?.touched && form.get('name')?.invalid">
              Name is required (min 3 characters).
            </div>
          </div>

          <div>
            <label for="email">Email</label>
            <input id="email" type="email" formControlName="email" placeholder="kaustubh@example.com" />
            <div class="error" *ngIf="form.get('email')?.touched && form.get('email')?.invalid">
              Enter a valid email address.
            </div>
          </div>
        </div>

        <div class="form-row two">
          <div>
            <label for="phone">Phone</label>
            <input id="phone" type="tel" formControlName="phone" placeholder="+91 98xxxxxxx" />
            <div class="error" *ngIf="form.get('phone')?.touched && form.get('phone')?.invalid">
              Phone is required.
            </div>
          </div>

          <div>
            <label for="cohort">Preferred Cohort</label>
            <select id="cohort" formControlName="cohort">
              <option value="" disabled>Select a cohort</option>
              <option>Weekend</option>
              <option>Weekday Evenings</option>
              <option>Self-paced + Mentorship</option>
            </select>
            <div class="error" *ngIf="form.get('cohort')?.touched && form.get('cohort')?.invalid">
              Please select a cohort.
            </div>
          </div>
        </div>

        <div>
          <label for="message">Message (optional)</label>
          <textarea id="message" rows="4" formControlName="message" placeholder="Share your background or goals"></textarea>
        </div>

        <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-top: .6rem;">
          <button type="submit" [disabled]="form.invalid || submitted()">Submit</button>
        </div>
      </form>

      <!-- Payment Section -->
      <div *ngIf="showPayment()" class="card" style="margin-top:2rem; max-width:500px; margin:auto; padding:2rem; border-radius:12px; background:#rgba(68, 62, 62, 1); box-shadow:0 4px 12px rgba(0,0,0,.1);">
        <h2 style="margin-bottom:1rem; font-size:1.6rem;">Payment </h2>

        <!-- Discount Notice -->
        <p style="background:#f0fff4; color:#2e7d32; padding:.6rem 1rem; border-radius:6px; margin-bottom:1rem; font-weight:500;">
          ✅ You unlocked a <strong>5% discount</strong> on your seat!
        </p>

        <form [formGroup]="paymentForm" (ngSubmit)="processPayment()">
          <label style="display:block; margin-bottom:.6rem;">
            Cardholder Name
            <input type="text" formControlName="name" required style="width:100%; padding:.6rem; margin-top:.3rem; border:1px solid #7d7c7cff; border-radius:6px;">
          </label>

          <label style="display:block; margin-bottom:.6rem;">
            Card Number
            <input type="text" formControlName="card" maxlength="16" required style="width:100%; padding:.6rem; margin-top:.3rem; border:1px solid #7d7c7cff; border-radius:6px;">
          </label>

          <div style="display:flex; gap:1rem; margin-bottom:.6rem;">
            <label style="flex:1;">
              Expiry
              <input type="text" formControlName="expiry" placeholder="MM/YY" required style="width:100%; padding:.6rem; margin-top:.3rem; border:1px solid #7d7c7cff; border-radius:6px;">
            </label>
            <label style="flex:1;">
              CVV
              <input type="password" formControlName="cvv" maxlength="4" required style="width:100%; padding:.6rem; margin-top:.3rem; border:1px solid #7d7c7cff; border-radius:6px;">
            </label>
          </div>

          <button class="btn" type="submit" style="width:100%; margin-top:.8rem;" [disabled]="paymentForm.invalid">Pay Now & Save 5%</button>
        </form>
      </div>

    </div>
  </section>
  `
})
export class RegisterComponent {
  submitted = signal(false);
  showPayment = signal(false);

  form: FormGroup;
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      cohort: ['', [Validators.required]],
      message: ['']
    });

    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      card: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      expiry: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Registration:', this.form.value);
    Swal.fire({
      icon: 'success',
      title: 'Registration Complete!',
      text: 'Proceed to payment to confirm your seat with 5% OFF.',
      confirmButtonText: 'OK'
    }).then(() => {
      this.submitted.set(true);
      this.form.disable();
      this.showPayment.set(true);
    });
  }

  processPayment() {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }

    console.log('Payment:', this.paymentForm.value);
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful!',
      text: 'Your registration is confirmed and 5% discount applied!',
      confirmButtonText: 'Done'
    });
    this.paymentForm.disable();
  }
}
