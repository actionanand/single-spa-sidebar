import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SafePipe } from '../shared/pipes/safe.pipe';
import { chevron_up } from '../shared/img-data/chevron-up';
import { chevron_down } from '../shared/img-data/chevron-down';
import { radio_button } from '../shared/img-data/radio_button';
import { star } from '../shared/img-data/star';
import { AngularIcon } from '../shared/img-data/angular-icon';
import { ReactIcon } from '../shared/img-data/react-icon';
import { JsIcon } from '../shared/img-data/js-icon';
import { VueIcon } from '../shared/img-data/vue-icon';
import { SvelteIcon } from '../shared/img-data/svelte-icon';
import { MenuItem } from '../shared/models/nav.model';



@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, SafePipe, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  chevron_up = chevron_up;
  chevron_down = chevron_down;
  radio_button = radio_button;
  star_icon = star;
  angular_icon = AngularIcon;
  react_icon = ReactIcon;
  js_icon = JsIcon;
  vue_icon = VueIcon;
  svelte_icon = SvelteIcon;

  menuItems: MenuItem[] = [
    {
      icon: this.js_icon,
      label: 'Vanilla',
      isUrl: true,
      url: '/',
    },
    {
      icon: this.angular_icon,
      label: 'Angular',
      isOpen: false,
      isUrl: false,
      children: [
        { icon: this.star_icon, label: 'All', isUrl: true, url: '/angular' },
        { icon: this.star_icon, label: 'Active', isUrl: true, url: '/angular/active' },
        { icon: this.star_icon, label: 'Completed', isUrl: true, url: '/angular/completed' }
      ]
    },
    {
      icon: this.react_icon,
      label: 'React',
      isUrl: true,
      url: '/react'
    },
    {
      icon: this.vue_icon,
      label: 'Vue',
      isUrl: true,
      url: '/vue'
    },
    {
      icon: this.svelte_icon,
      label: 'Svelte',
      isUrl: true,
      url: '/svelte'
    }
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}
