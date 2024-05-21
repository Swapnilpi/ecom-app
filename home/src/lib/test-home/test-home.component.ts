import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-test-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.scss'],
})
export class TestHomeComponent {}
