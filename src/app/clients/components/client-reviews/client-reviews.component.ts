import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service';
import { ClientReview } from '../../interfaces/clients.interfaces';

@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styles: [],
})
export class ClientReviewsComponent implements OnInit {
  clientReviews: ClientReview[] = [];

  constructor(private clientService: ClientsService) {
    this.clientService
      .getClientReviews()
      .subscribe((clientReviews) => (this.clientReviews = clientReviews));
  }

  ngOnInit(): void {}

  setImagePath(photo: string): string {
    return `assets/image/others/${photo}`;
  }
}
