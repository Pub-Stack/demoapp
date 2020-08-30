import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
