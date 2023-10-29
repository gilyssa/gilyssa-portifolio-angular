import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  icon_sidebar: string = 'assets/images/icon-sidebar.png';
  ellipse_photo: string = 'assets/images/ellipse-profile.png';

  // Adicione uma variável para controlar a visibilidade do .containerNav
  isContainerNavVisible: boolean = false;
  toggleContainerNav() {
    if (window.innerWidth <= 768) {
      this.isContainerNavVisible = !this.isContainerNavVisible;
    }
  }
}
