import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnChanges,
} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from "@angular/forms";
import { Observable } from "rxjs";
import { Http, RequestOptions, Headers } from "@angular/http";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  public myTag;
  public myTag1;
  @ViewChild("zero") zeroEl: ElementRef;
  @ViewChild("one") oneEl: ElementRef;
  registerForm: FormGroup;
  validatingForm: FormGroup;
  submitted: boolean = false;

  timeInput = new FormControl();
  public myform: FormGroup;
  public name: FormControl;
  public interest: FormControl;
  public email: FormControl;
  public description: FormControl;
  public successFlag: boolean = false;
  public queryType: string = "Pilot";

  constructor(
    private el: ElementRef,
    private fb: FormBuilder,
    private http: Http
  ) {}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^[\\w]+(?:\\.[\\w])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"
      ),
    ]);
    this.interest = new FormControl("", Validators.required);
    this.description = new FormControl("", Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: this.name,
      email: this.email,
      interest: this.interest,
      description: this.description,
    });
  }

  submitHandler = () => {
    this.successFlag = false;
    const url =
      "https://8gfc3de1le.execute-api.ap-southeast-2.amazonaws.com/test/contactus";
    let data = {
      type: this.queryType,
      name: this.myform.value.name,
      email: this.myform.value.email,
      reason:
        this.myform.value.interest == 1
          ? "Register your interest"
          : "Waitlist for our beta",
      desc: this.myform.value.description,
    };
    console.log(JSON.stringify(data));
    let headers = new Headers({ "Content-Type": "aplication/json" });
    let options = new RequestOptions({ headers: headers });
    // const headers = {
    //   "Content-Type": "application/json"
    // };
    const body = JSON.stringify(data);

    this.http.post(url, body, options).subscribe((data) => {
      if (data.status === 200) {
        this.successFlag = true;
        console.log(data);
      }
    });
  };

  public changeCustomerType(e) {
    if (e === 0) {
      this.zeroEl.nativeElement.classList.remove("btn-light");
      this.zeroEl.nativeElement.classList.add("btn-primary");
      this.oneEl.nativeElement.classList.remove("btn-primary");
      this.oneEl.nativeElement.classList.add("btn-light");
      this.queryType = "Customer";
      console.log(this.myTag);
    } else {
      this.zeroEl.nativeElement.classList.remove("btn-remove");
      this.zeroEl.nativeElement.classList.add("btn-light");
      this.oneEl.nativeElement.classList.remove("btn-light");
      this.oneEl.nativeElement.classList.add("btn-primary");
      this.queryType = "Pilot";
    }
    // 0 : Customer
    // 1 : Pilot
    console.log(e);
    // const customerType = evt.target.innerText;
    // if (this.state.customerType === customerType) {
    //   return;
    // }
    // if (customerType === "Customer") {
    //   this.setState({
    //     customerType: "Customer"
    //   });
    // } else {
    //   this.setState({
    //     customerType: "Pilot"
    //   });
    // }
  }
}
