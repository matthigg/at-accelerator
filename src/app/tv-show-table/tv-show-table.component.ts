import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsService } from '../services/tv-shows/tv-shows.service';
import { Observable } from 'rxjs';
import { TvShows } from '../shared/interfaces/tv-shows';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {

  protected tvShowsService = inject(TvShowsService);
  protected tvShowsData$?: Observable<TvShows>;

  ngOnInit(): void {
    this.tvShowsData$ = this.tvShowsService.getTvShowsData();
  }

}
