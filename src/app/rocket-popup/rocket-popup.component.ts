import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RocketDetailsGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-rocket-popup',
  templateUrl: './rocket-popup.component.html',
  styleUrls: ['./rocket-popup.component.scss']
})
export class RocketPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RocketPopupComponent>,
    private readonly rocketDetialsService: RocketDetailsGQL,
    @Inject(MAT_DIALOG_DATA) public rocketId: string
  ) { }

  rocketDetails$ = this.rocketDetialsService.fetch({ id: this.rocketId }).pipe(
    map(resp => resp.data.rocket)
  )

  ngOnInit() {

  }

}
