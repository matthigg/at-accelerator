import { Component, Input, OnInit } from '@angular/core';
import { TvShowDetails } from '../shared/interfaces/tv-show-details';

@Component({
  selector: 'app-favorites-card',
  standalone: true,
  imports: [],
  templateUrl: './favorites-card.component.html',
  styleUrl: './favorites-card.component.css'
})
export class FavoritesCardComponent implements OnInit {
  @Input() data?: TvShowDetails


  ngOnInit(): void {
    console.log('--- this.data:', this.data)
  }
}
