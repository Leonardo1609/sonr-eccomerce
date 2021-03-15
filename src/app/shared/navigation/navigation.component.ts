import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteToNavigationComponent } from '../shared.interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styles: [],
})

export class NavigationComponent implements OnInit {
  routesToShow: RouteToNavigationComponent[] = [];

  constructor(private router: Router) {
    this.getRoutesToShow();
  }

  getRoutesToShow(route: string = '') {
    this.routesToShow = [];

    const splitRoutes = route
      ? route.split('/').slice(1)
      : this.router.url.split('/').slice(1);

    for (let i: number = 0; i < splitRoutes.length; i++) {
      this.routesToShow.push({
        name: splitRoutes[i],
        url: '/' + splitRoutes.slice(0, i + 1).join('/'),
      });
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        this.getRoutesToShow(val.urlAfterRedirects);
      });
  }

}
