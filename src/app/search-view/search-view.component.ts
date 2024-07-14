import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { Observable } from 'rxjs';
import { TvShows } from '../shared/interfaces/tv-shows';
import { TvShowsService } from '../services/tv-shows/tv-shows.service';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {

  protected tvShowsService = inject(TvShowsService);
  protected tvShowsData$?: Observable<TvShows>;
  
  ngOnInit(): void {
    this.tvShowsData$ = this.tvShowsService.getTvShowsData();
  }

}
