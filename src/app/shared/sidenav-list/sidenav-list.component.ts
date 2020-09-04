import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeSidenav.emit();
  }

  logouti($event) {
    event.preventDefault()
    
    this.onClose()
    this.auth.logout()
    // this.router.navigate(['/admin','login'])

  }
 out($event){
    event.preventDefault()
    this.onClose()
    console.log(45)
    this.auth.logout()
    this.router.navigate(['/admin','login'])
  }

}
