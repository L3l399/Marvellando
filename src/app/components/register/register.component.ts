import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent {

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    repeatPassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.requiredTrue),
    check: new FormControl('', Validators.requiredTrue)
  });

  onSubmit(){
    console.log(this.form.value);
  }

  constructor(private messageService: MessageService) {}

  showToast1() {
      this.messageService.clear();
      this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Registrazione effettuata', detail: 'benvenuto in marvellando' });
  }

  //messagio conferma iscrizione
  messages1: Message[];
  messages: Message[];
  ngOnInit() {
      this.messages1 = [
          { severity: 'success', summary: 'Success', detail: 'Message Content' },
          { severity: 'info', summary: 'Info', detail: 'Message Content' },
        ];
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
  }
}
