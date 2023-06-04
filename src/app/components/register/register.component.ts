import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  genderOptions: string[] = ['Male', 'Female', 'Other'];
  maxDate = new Date();

  constructor(private formBuilder: FormBuilder) {
    this.maxDate.setDate(this.maxDate.getDate() - 1);
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      dob: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      const externalUrl = 'https://github.com/aceayushofficial/FE-VideoPlayer'; // Replace with the desired external URL
      window.open(externalUrl, '_blank')

      // Add your registration logic here
    }
  }

  public dateFilter = (date: Date | null): boolean => {
    if (!date) {
      return false; // Return false for null dates
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to 00:00:00

    return date <= today; // Return true for dates that are less than or equal to today
  }

  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    // Disable manual date input
    event.value = null;
  }
}

