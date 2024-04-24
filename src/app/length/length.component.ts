import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-length',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './length.component.html',
  styleUrl: './length.component.scss'
})
export class LengthComponent {
  //Properties
  length: number = 0;
  result: number = 0;

  //Methods
  //Convert Celsius to Farenheit
  mToF(): void {
    this.result = this.length * 3.28084;

    //Avrunda till en decimal
    this.result = parseFloat(this.result.toFixed(1));
  }

  //Convert Farenheit to Celsius
  fToM(): void {
    this.result = this.length / 3.28084;

        //Avrunda till en decimal
        this.result = parseFloat(this.result.toFixed(1));
  }
}
