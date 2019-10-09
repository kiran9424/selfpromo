import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  @Input() coursePrice;
  priceData: any = {}
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.priceData.price = this.coursePrice.price;
    this.priceData.discountedPrice = this.coursePrice.discountedPrice;
  }
  // ngAfterViewInit(){
  //   this.coursePrice.price = this.priceForm.value.price;
  // }

  // createForm(){
  //   this.priceForm = this.fb.group({
  //     if(priceForm){

  //     }
  //     price:['',Validators.required],
  //     discountedPrice:['',Validators.required]
  //   })
  // }

}
