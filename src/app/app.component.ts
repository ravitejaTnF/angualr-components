import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReusableModalComponent } from './components/reusable-modal/reusable-modal.component';
import { LoadingService } from './spinner/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService:NgbModal,public loadingService:LoadingService,private http:HttpClient){}
}
