import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[appPreventScreenshot]'
})
export class PreventScreenshotDirective {
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    // Prevent the user from taking a screenshot when navigating away
    $event.returnValue = false;
  }
  @HostListener('window:keyup', ['$event'])
  handleKeyUp($event: KeyboardEvent) {
    // Check if the user presses the Print Screen (PrtScn) key
    if ($event.key === 'PrintScreen') {
      // Prevent the default action of taking a screenshot
      $event.preventDefault();
    }
  }
}





