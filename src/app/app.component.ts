import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { getData, updateSidebarState } from '@actionanand/utility';

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
export class AppComponent implements OnInit {
  isSidebarCollapsed = false;
  arrow_forward = arrow_forward;
  arrow_back = arrow_back;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    updateSidebarState(this.isSidebarCollapsed); // passing the sidebar state to the utility function
  }

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getData('/test-url').then((data: any) => {
      console.log('angular-sidebar: ', data);
    });
  }
}
