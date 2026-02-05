import { ZardTabComponent, ZardTabGroupComponent } from '@/shared/components/tabs';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-know-your-business',
  imports: [NgClass, NgIf, FormsModule],
  templateUrl: './know-your-business.html',
  styleUrl: './know-your-business.css',
})
export class KnowYourBusiness {

  previewUrl: string | ArrayBuffer | null = null;
  isSelected = true;
  businessType = 'proprietor';

   onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      // Preview Image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onBusinessTypeChange() {
    this.isSelected = this.businessType !== '';
  }

  // Helper methods to determine which fields to show
  isProprietor(): boolean {
    return this.businessType === 'proprietor';
  }

  isPrivatePublicLimited(): boolean {
    return this.businessType === 'private-public';
  }

  isPartnership(): boolean {
    return this.businessType === 'partnership';
  }

  isTrustSociety(): boolean {
    return this.businessType === 'trust-society';
  }
}
