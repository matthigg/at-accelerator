import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { Observable, of } from 'rxjs';
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
  protected tvShowsData$?: Observable<TvShows> | null;

  ngOnInit(): void {
    this.tvShowsData$ = this.tvShowsService.getTvShowsData();
  }

  handleSearch(searchInput: string, event: Event): void {
    event?.preventDefault();
    this.tvShowsData$ = null;

    setTimeout(() => {
      this.tvShowsData$ = this.tvShowsService.getTvShowsSearchData(searchInput);
    }, 2000)
  }

}
