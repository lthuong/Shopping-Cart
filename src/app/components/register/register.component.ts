import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

function symbolValidator(control: FormControl) {
  if (control.hasError("required")) return null;
  if (control.hasError("minLength")) return null;

  if (control.value.indexOf("@") > -1) return null;
  else return { symbol: true };
}

function passWordsMatchValidator(form: FormGroup) {
  const password = form.get("password");
  const confirmPassword = form.get("confirmPassword");

  if (password.value !== confirmPassword.value)
    confirmPassword.setErrors({ passWordsMatch: true });
  else confirmPassword.setErrors(null);

  return null;
}

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   name: new FormControl(),
    //   email: new FormControl(),
    //   username: new FormControl(),
    //   password: new FormControl(),
    //   confirmPassword: new FormControl(),
    // });
    this.registerForm = this.builder.group(
      {
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        username: ["", Validators.required],
        password: [
          "",
          [Validators.required, symbolValidator, Validators.minLength(4)],
        ],
        confirmPassword: "",
      },
      { validators: passWordsMatchValidator }
    );
  }

  register() {
    console.log(this.registerForm.value);
  }
}
