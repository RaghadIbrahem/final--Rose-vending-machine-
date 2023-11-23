import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  feedback: string = '';

  submitFeedback(): void {
 
 
    alert('Your feedback was submitted successfully!');
  
    this.name = '';
    this.email = '';
    this.phone = '';
    this.feedback = '';
  }
}
