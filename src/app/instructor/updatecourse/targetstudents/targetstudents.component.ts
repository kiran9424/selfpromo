import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-targetstudents',
  templateUrl: './targetstudents.component.html',
  styleUrls: ['./targetstudents.component.scss']
})
export class TargetstudentsComponent implements OnInit {

  @Input() targetStudent;
  @Output() WSLValue = new EventEmitter();
  @Output() requirementValue = new EventEmitter();
  studentAnswer: any = [];
  requirementAnswer: any = [];
  wsl: any = [];
  requirements: any = [];
  disable:boolean  =true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.wsl = this.targetStudent.wsl;
    this.requirements = this.targetStudent.requirements;
    if (this.targetStudent.wsl) {
      this.studentAnswer = this.wsl;

    }
    if (this.targetStudent.requirements) {
      this.requirementAnswer = this.requirements;

    }

    if (this.studentAnswer.length === 0) {
      this.studentAnswer.push({ value: '' });
    }
    if (this.requirementAnswer.length === 0) {
      this.requirementAnswer.push({ value: '' });
    }

  }

  addAnswer() {
    this.studentAnswer.push({ value: '' });
  }

  addAnswerRequirement() {
    this.requirementAnswer.push({ value: '' })
  }
  deleteWSL(index) {
    this.studentAnswer.splice(index, 1);
  }
  deleteRequirement(index) {
    this.requirementAnswer.splice(index, 1);
  }

  emitEventWSL(event) {
    this.WSLValue.emit(event);

  }
  emitRequirement(event) {
    this.requirementValue.emit(event)
  }

  dirty() {
    const value = this.studentAnswer[this.studentAnswer.length-1];
    if(value===""||value===null){
      this.disable = false;
    }
  }
}

