import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';
import { CustomValidator }  from '../customValidator';
import { UserService } from 'src/app/services/user.service';
import  { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent {
  messages1: Message[];
  messages: Message[];


  constructor(
    private config: PrimeNGConfig,
    private messageService: MessageService,
    private userService: UserService,
    private router: Router
    ) {}

  ngOnInit() {
    this.config.setTranslation({
      weak: 'Debole',
      medium: 'Media',
      strong: 'Forte',
      passwordPrompt: 'Livello di sicurezza',
      // PasswordModule: 'ciao',
    });

    this.messages1 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
    ];
    this.messages = [{ severity: 'success', summary: "Grazie per aver visitato il nostro sito! La nostra missione è di condividere la passione per il mondo Marvel e offrire informazioni dettagliate sui film e sui personaggi. Esplora il nostro sito per scoprire tutto ciò che c'è da sapere sull'universo Marvel!"  }];
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    repeatPassword: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.requiredTrue),
    check: new FormControl('', Validators.requiredTrue)
  },
  [CustomValidator.MatchValidator('password', 'repeatPassword')]
  );

  onSubmit(){
    // console.log(this.form.value);
    const user = {
      name: this.form.value.name,
      email: this.form.value.email,
    }

    this.userService.datiUtente.next(user);
    this.router.navigate(['home'])
  }

  showToast1() {
    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Registrazione effettuata', detail: 'benvenuto in marvellando' });
  }

}
