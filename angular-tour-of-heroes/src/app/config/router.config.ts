import { UIRouter } from "@uirouter/core";
import { Injector, Injectable } from "@angular/core";
import { HeroService } from '../hero.service';


/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const heroService = injector.get(HeroService);

  // If the browser URL doesn't matches any state when the router starts,
  // go to the `dashboard` state by default
  router.urlService.rules.initial('/dashboard');


}