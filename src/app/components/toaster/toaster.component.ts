import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toaster',
  standalone: false,
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css',
})
export class ToasterComponent {
  @Input() errorMessage: string = '';
}
