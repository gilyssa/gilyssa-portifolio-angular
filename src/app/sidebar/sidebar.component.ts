import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  icon_sidebar: string = 'assets/images/icon-sidebar.png';
  ellipse_photo: string = 'assets/images/ellipse-profile.png';

  isContainerNavVisible: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 1030) {
      this.isContainerNavVisible = false;
    } else {
      this.isContainerNavVisible = true;
    }
  }

  toggleContainerNav() {
    if (window.innerWidth <= 1030) {
      this.isContainerNavVisible = !this.isContainerNavVisible;
    }
  }
}
