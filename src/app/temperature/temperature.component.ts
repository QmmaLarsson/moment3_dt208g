import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.scss'
})
export class TemperatureComponent {
  //Properties
  temperature: number = 0;
  result: number = 0;

  //Methods
  //Convert Celsius to Farenheit
  cToF(): void {
    this.result = (this.temperature * 9 / 5) + 32;

    //Avrunda till en decimal
    this.result = parseFloat(this.result.toFixed(1));
  }

  //Convert Farenheit to Celsius
  fToC(): void {
    this.result = (this.temperature - 32) * 5 / 9;

    //Avrunda till en decimal
    this.result = parseFloat(this.result.toFixed(1));
  }
}
