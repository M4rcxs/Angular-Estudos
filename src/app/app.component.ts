import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name  = 'marcos vinicius';
  userData = {
    email: 'marcos@email.com',
    idade: 22,
    role: 'admin',
  }
  title = 'projeto';
}
