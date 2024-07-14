import { Component, inject, Input, OnInit } from '@angular/core';
import { TvShowDetails } from '../shared/interfaces/tv-show-details';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesService } from '../services/favorites/favorites.service';

@Component({
  selector: 'app-favorites-card',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './favorites-card.component.html',
  styleUrl: './favorites-card.component.css'
})
export class FavoritesCardComponent implements OnInit {
  @Input() favoriteData?: TvShowDetails

  protected favoritesService = inject(FavoritesService);

  ngOnInit(): void {
    console.log('--- this.favoriteData:', this.favoriteData)
  }
}
