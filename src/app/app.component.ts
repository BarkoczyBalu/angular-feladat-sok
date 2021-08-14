import { Component, VERSION } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formModel: any;
  constructor(private formBuilder: FormBuilder) {
    this.formModel = this.formBuilder.group({
      username: ['', [Validators.required, Validators.min(5)]],
      password: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(20)]
      ]
    });
  }
}
