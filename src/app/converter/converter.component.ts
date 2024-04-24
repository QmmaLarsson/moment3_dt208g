import { Component } from '@angular/core';
import { LengthComponent } from '../length/length.component';
import { TemperatureComponent } from '../temperature/temperature.component';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [LengthComponent, TemperatureComponent],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {

}
