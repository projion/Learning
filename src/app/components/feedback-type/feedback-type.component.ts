import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FeedbackTypeService } from '../../service/feedback-type.service';
import { APIResponseModel } from '../../model/interface/common';
import { Customer, Representative } from '../../utility/api/customer';
import { CustomerService } from '../../utility/service/customer.service';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-feedback-type',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    ButtonModule,
    SliderModule,
    ProgressBarModule
  ],
  templateUrl: './feedback-type.component.html',
  styleUrl: './feedback-type.component.css'
})
export class FeedbackTypeComponent implements OnInit {

  constructor(private feedbackTypeService: FeedbackTypeService, private customerService: CustomerService) { }

  feedbackType: any[] = [];
  customers1: Customer[] = [];
  representatives: Representative[] = [];
  statuses: any[] = [];
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  @ViewChild('filter') filter!: ElementRef;

  ngOnInit(): void {
    this.loadAllfeedbackType();




    this.customerService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;

      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    });
    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ];
    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];

  }
  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }
  loadAllfeedbackType() {
    this.feedbackTypeService.getAllFeedbackType().subscribe((res: APIResponseModel) => {
      if (res.success) {
        debugger;
        this.feedbackType = res.data.data;
      }
      else
        alert(res.message);
    })

  //  this.feedbackType = [
  //  { feedbackTypeNo: 1, feedbackCode: 'F01', feedbackName: 'Feedback 1', feedbackDesc: 'Description 1', isActive: true },
  //  { feedbackTypeNo: 2, feedbackCode: 'F02', feedbackName: 'Feedback 2', feedbackDesc: 'Description 2', isActive: false },
  //  { feedbackTypeNo: 3, feedbackCode: 'F03', feedbackName: 'Feedback 3', feedbackDesc: 'Description 3', isActive: true }
  //];
  }

}
