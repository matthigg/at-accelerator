import { Component, Input } from '@angular/core';
import { TvShowDetails } from '../shared/interfaces/tv-show-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-show-details',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export class TvShowDetailsComponent {
  @Input() showId!: number;
  @Input() tvShowDetailsData?: TvShowDetails;

  ngOnInit(): void {
    let x = this.tvShowDetailsData
    console.log('--- x:', x)

  }

  handleBack(): void {
    history.back();
  }

}
