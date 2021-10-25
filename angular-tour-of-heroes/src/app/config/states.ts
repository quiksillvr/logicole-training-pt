import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Transition} from "@uirouter/angular";
import { HeroService } from '../hero.service';

export const heroState = { name: "heroes", url: "/heroes", component: HeroesComponent }
export const dashBoardState = { name: "dashboard", url: "/dashboard", component: DashboardComponent }
export const detailState = {
  name: "detail",
  url: "/detail/:id", 
  component: HeroDetailComponent,
  resolve: [
    {
      token: "detail",
      deps: [Transition, HeroService],
      resolveFn: (trans: Transition, heroService: HeroService) =>
        { 
            heroService.passHeroId(trans.params().id)
        }
    }
  ]
}