import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  subscribe(arg0: (data: Hero[]) => Hero[]) {
    throw new Error('Method not implemented.');
  }

  constructor(private messageService: MessageService) { }

  createHero(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Fetched Successfully")
    return heroes;
  }


}
