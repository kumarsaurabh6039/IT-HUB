import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;
  isHeaderScrolled = false;

  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Body par scrolling ko rokne ke liye jab menu khula ho
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Yeh function ab sirf scroll hone par header ko style karega
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isHeaderScrolled = window.scrollY > 10;
  }
}

