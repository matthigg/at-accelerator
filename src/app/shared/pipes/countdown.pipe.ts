import { Pipe, PipeTransform } from '@angular/core';
import { TvShowDetails } from '../interfaces/tv-show-details';

@Pipe({
  name: 'countdown',
  standalone: true
})
export class CountdownPipe implements PipeTransform {

  transform(value: TvShowDetails, ...args: unknown[]): string {
    if (value.nextEpisode) {
      const dayInMs = 1000 * 60 * 60 * 24; 
      const timeRemaining = (new Date(value.nextEpisode).getTime() - new Date().getTime());
      const daysRemaining = Math.floor(timeRemaining / dayInMs);
      let returnValue: string;
      daysRemaining === 1
        ? returnValue = `in ${daysRemaining} day`
        : returnValue = `in ${daysRemaining} days`;
      return returnValue;
    }

    if (value.tvShow.status.toLowerCase() === 'ended') {
      return 'Show has ended';
    }

    if (value.tvShow.status.toLowerCase() === 'running') {
      return 'No next episode date'
    }

    return 'Error: cannot determine next episode status';
  }

}
