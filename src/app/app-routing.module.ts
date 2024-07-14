import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { SearchViewComponent } from './search-view/search-view.component';
import { FavoritesViewComponent } from "./favorites-view/favorites-view.component";
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { TvShowsService } from './services/tv-shows/tv-shows.service';
import { TvShowDetails } from './shared/interfaces/tv-show-details';
import { Observable } from 'rxjs';

function tvShowDetailsResolver(route: ActivatedRouteSnapshot): Observable<TvShowDetails> {
  const showId = +route.params['showId'];
  return inject(TvShowsService).getTvShowDetailsData(showId);
}

const routes: Routes = [
  { path: "", component: SearchViewComponent },
  { path: "favorites", component: FavoritesViewComponent },
  { 
    path: "details/:showId", component: TvShowDetailsComponent, 
    resolve: { tvShowDetailsData: tvShowDetailsResolver } 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
