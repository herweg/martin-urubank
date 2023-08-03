import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SideBarToggle } from 'src/app/domain/interfaces/sidebar-toggle.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  
  showSidebar = true

  isSideBarCollapsed = false

  onToggleSideBar(data: SideBarToggle): void {
      this.screenWidth = data.screenWidth
      this.isSideBarCollapsed = data.collapsed
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setSidebarVisibility();
      }
    });
  }

  setSidebarVisibility() {
    const routeSnapshot = this.activatedRoute.snapshot;
    const currentRouteData = routeSnapshot.firstChild?.data;
    this.showSidebar = !(currentRouteData && currentRouteData['hideSidebar']);
  }
  
  @Input() collapsed = false
  @Input() screenWidth = 0

  getBodyClass(): string {
    let styleClass = ''
    if (this.collapsed && this.screenWidth > 1280) {
      styleClass = 'body-trimmed'
    } else if (this.collapsed && this.screenWidth <= 1280 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass
  }
}
