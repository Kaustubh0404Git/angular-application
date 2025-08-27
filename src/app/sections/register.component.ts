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
      <h2 id="register-title" style="font-size: clamp(1.6rem, 3.5vw, 2.2rem);">Register Your Interest</h2>
      <p>Seats are limited. Fill out the form and our team will contact you with schedules and next steps.</p>

      <form [formGroup]="form" (ngSubmit)="submit()" class="card" style="margin-top:1rem;">
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
          <button type="submit" [disabled]="form.invalid || submitted()" aria-label="Submit registration">Submit</button>
          <span *ngIf="submitted()" style="color: var(--ok); font-weight:700;">
            Thanks! We’ll be in touch shortly.
          </span>
        </div>
      </form>

      <!-- <div class="contact-info">
        <span class="contact-item">
        📧 <a href="mailto:training&#64;example.com">training&#64;example.com</a> .
        </span>
        <span class="divider">|</span>
        <span class="contact-item">
        📞 <a href="tel:+15550123">+1 (555) 0123</a>
        </span>
      </div> -->

    </div>
  </section>
  `
})
export class RegisterComponent {
    submitted = signal(false);
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            cohort: ['', [Validators.required]],
            message: ['']
        });
    }

    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        // demo behavior: log and disable form
        console.log('Registration:', this.form.value);
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully!',
            text: 'Please click on ok.',
            confirmButtonText: 'OK'
        });
        this.submitted.set(true);
        this.form.disable(); // or .reset() if you prefer to clear the form
    }
}
