import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salone',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './salone.component.html',
  styleUrls: ['./salone.component.css']
})
export class SaloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
