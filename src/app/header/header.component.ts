import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  closeLink() {
    this.navbar.nativeElement.classList.add("collapse navbar-collapse");
  }

  goToLink() {
    window.open("https://web.aerologix.com", "_blank");
  }
}
