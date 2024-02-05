import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent {
  @Input() videoKey: string | null = null;
  videoUrl: SafeResourceUrl| null = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.videoKey) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoKey}?autoplay=1`);
    }
  }

  closeModal() {
    // You can emit an event to inform the parent component to close the modal
  }
}
