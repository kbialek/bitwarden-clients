import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-org-info",
  templateUrl: "organization-information.component.html",
})
export class OrganizationInformationComponent {
  @Input() nameOnly = false;
  @Input() formGroup: FormGroup;
  @Output() changedBusinessOwned = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder) {}
}
