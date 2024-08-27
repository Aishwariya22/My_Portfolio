import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public submitForm() {
    const baseUrl = environment.baseUrl;
    window.location.href = `${baseUrl}/#header`;
    alert('Response submitted successfully');
    location.replace(baseUrl);
    window.location.reload();
  }
}
