import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reusable-modal',
  templateUrl: './reusable-modal.component.html',
  styleUrls: ['./reusable-modal.component.css']
})
export class ReusableModalComponent implements OnInit {

  constructor(private activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  @Input() title!:String;
  @Input() description!:String;
  @Input() OkButtonText!:String;
  @Input() CancelButtonText!:String;

  onOk(){
    this.activeModal.close(true);
  }

  onCancel(){
    this.activeModal.close(false);
  }

}
