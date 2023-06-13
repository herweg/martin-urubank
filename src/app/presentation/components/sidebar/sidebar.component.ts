import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { sidebarData } from './sidebar-data';
import { AuthService } from '@auth0/auth0-angular';

interface SideBarToggle {
    screenWidth: number
    collapsed: boolean
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Output() onToggleSideBar: EventEmitter<SideBarToggle> = new EventEmitter()
    collapsed = false
    screenWidth = 0
    navData = sidebarData

    constructor(private readonly auth0: AuthService) {

    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth
        if (this.screenWidth <= 768) {
            this.collapsed = false
            this.onToggleSideBar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
        }
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth
    }

    toggleCollapse(): void {
        this.collapsed = !this.collapsed
        this.onToggleSideBar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }

    closeSidebar(): void {
        this.collapsed = false
        this.onToggleSideBar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }

    logOut(): void {
        this.auth0.logout()
    }
}
