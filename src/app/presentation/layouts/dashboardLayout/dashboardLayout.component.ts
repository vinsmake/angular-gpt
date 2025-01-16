import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-layout',
  imports: [
    // CommonModule,
    RouterModule
  ],
  templateUrl: './dashboardLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class dashboardLayoutComponent { }
