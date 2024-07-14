import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShows } from '../shared/interfaces/tv-shows';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  @Input() tvShowsData$?: Observable<TvShows> | null;

}
