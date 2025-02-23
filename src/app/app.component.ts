import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { arrow_forward } from './shared/img-data/arrow_forward';
import { arrow_back } from './shared/img-data/arrow_back';
import { SafePipe } from './shared/pipes/safe.pipe';

@Component({
  selector: 'app-sidebar-standalone',
  standalone: true,
  imports: [RouterLink, ToolbarComponent, NgClass, SafePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isSidebarCollapsed = false;
  arrow_forward = arrow_forward;
  arrow_back = arrow_back;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
