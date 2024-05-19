import { Inject, Injectable, inject } from '@angular/core';
import { Storage, ref, getDownloadURL } from "@angular/fire/storage";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly storage: Storage = inject(Storage);

  public getProfilePic = async (): Promise<Observable<string>> => {
    const containerRef = ref(this.storage, 'profilepic/me.webp');
    const url = await getDownloadURL(containerRef);
    return new Observable<string>(observe => {
      observe.next(url);
    });
  };
}
