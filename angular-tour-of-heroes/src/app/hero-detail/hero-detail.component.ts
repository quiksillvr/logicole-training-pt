import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(private heroService: HeroService) { }

    ngOnInit(): void {
      this.getHero(this.heroService.heroId);
    }
    
    getHero(id: number): void {    
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    save(): void {
      if (this.hero) {
        this.heroService.updateHero(this.hero)
          .subscribe(); 
      }
    }

}
