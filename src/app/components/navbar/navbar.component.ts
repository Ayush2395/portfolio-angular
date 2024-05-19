import { Component, OnInit, inject } from '@angular/core';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private storageService = inject(StorageService);

  public profilePic: string = '';

  ngOnInit(): void {
    this.setProfilePic();
  }

  private async setProfilePic() {
    const url = await this.storageService.getProfilePic();
    url.subscribe(image => this.profilePic = image);
  }

}
