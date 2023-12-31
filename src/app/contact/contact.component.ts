import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public submitForm() {
    window.location.href = 'http://localhost:4200/#header';
    alert('Response submitted successfully');
    location.replace('http://localhost:4200');
  }
}
