import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cidservice {

  private readonly STORAGE_KEY = 'companyId';

  constructor() {}

  /**
   * Set Company ID
   */
  setCompanyId(companyId: string): void {
    if (companyId) {
      localStorage.setItem(this.STORAGE_KEY, companyId);
    }
  }

  /**
   * Get Company ID
   */
  getCompanyId(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }

  /**
   * Remove Company ID
   */
  removeCompanyId(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Clear all storage (optional)
   */
  clearStorage(): void {
    localStorage.clear();
  }
}
