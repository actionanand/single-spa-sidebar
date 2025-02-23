import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SafePipe } from '../shared/pipes/safe.pipe';
import { chevron_up } from '../shared/img-data/chevron-up';
import { chevron_down } from '../shared/img-data/chevron-down';
import { radio_button } from '../shared/img-data/radio_button';
import { star } from '../shared/img-data/star';

interface MenuItem {
  icon: string;
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, SafePipe],
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

  menuItems: MenuItem[] = [
    {
      icon: this.radio_button,
      label: 'Vanilla'
    },
    {
      icon: this.radio_button,
      label: 'Angular',
      isOpen: false,
      children: [
        { icon: this.star_icon, label: 'Analytics' },
        { icon: this.star_icon, label: 'Projects' },
      ]
    },
    {
      icon: this.radio_button,
      label: 'React'
    },
    {
      icon: this.radio_button,
      label: 'Vue'
    },
    {
      icon: this.radio_button,
      label: 'Svelte'
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
