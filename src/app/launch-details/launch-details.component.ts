import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchDetailsGQL } from '../services/spacexGraphql.service';
import { map, switchMap } from 'rxjs/operators';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private router: Router,
    private readonly launchDetailsService: LaunchDetailsGQL,
    public dialog: MatDialog
  ) {}

  launchDetails$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.launchDetailsService.fetch({ id })),
    map((res) => res.data.launch)
  );

  ngOnInit() {
    // this.launchDetails$.subscribe(val=>console.log(val))
  }

  onBack() {
    this.router.navigate(["/"])
  }

  onClick(imageLink: string) {
    this.dialog.open(ImagePopupComponent, {
      width: '85vw',
      data: imageLink
    });
  }
}
