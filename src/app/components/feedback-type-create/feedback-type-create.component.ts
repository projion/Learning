import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { FeedbackTypeService } from '../../service/feedback-type.service';
import { APIResponseModel } from '../../model/interface/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-feedback-type-create',
  standalone: true,
  imports: [
    InputTextModule,
    InputSwitchModule,
    ToolbarModule,
    ButtonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './feedback-type-create.component.html',
  styleUrl: './feedback-type-create.component.css'
})
export class FeedbackTypeCreateComponent {

  constructor(private feedbackTypeService: FeedbackTypeService, private router: Router) { }




  feedbackForm: FormGroup = new FormGroup({
    feedbackTypeNo: new FormControl(0),
    feedbackName: new FormControl("create", [Validators.required, Validators.minLength(4)]),
    feedbackCode: new FormControl("0"),
    feedbackDesc: new FormControl("no details"),
    isActive: new FormControl(true),
  })

  saveData() {
    const formvalue = this.feedbackForm.value;
    formvalue.isActive = formvalue.isActive === true ? 1 : 0;
    debugger;
    /*this.router.navigate(['/feedbacktypecreate']);*/
    this.feedbackTypeService.createFeedbackType(formvalue).subscribe((res: APIResponseModel) => {
      if (res.data) {
        alert("Created Successfully")
        this.router.navigate(['/feedbacktype']);
      } else {
        alert(res.message);
      }
    })
  }
}
