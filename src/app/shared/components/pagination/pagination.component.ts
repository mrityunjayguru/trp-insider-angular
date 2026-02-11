import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
    computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
    // Inputs
    currentPage = input.required<number>();
    totalPages = input.required<number>();
    maxVisiblePages = input<number>(5); // Maximum number of page buttons to show

    // Outputs
    pageChange = output<number>();

    // Computed properties
    pageNumbers = computed(() => {
        const current = this.currentPage();
        const total = this.totalPages();
        const maxVisible = this.maxVisiblePages();
        const pages: number[] = [];

        if (total <= maxVisible) {
            // Show all pages if total is less than max visible
            for (let i = 1; i <= total; i++) {
                pages.push(i);
            }
        } else {
            // Calculate start and end pages
            let startPage = Math.max(1, current - Math.floor(maxVisible / 2));
            let endPage = Math.min(total, startPage + maxVisible - 1);

            // Adjust if we're near the end
            if (endPage - startPage < maxVisible - 1) {
                startPage = Math.max(1, endPage - maxVisible + 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }

        return pages;
    });

    canGoPrevious = computed(() => this.currentPage() > 1);
    canGoNext = computed(() => this.currentPage() < this.totalPages());

    // Methods
    goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages()) {
            this.pageChange.emit(page);
        }
    }

    previousPage(): void {
        if (this.canGoPrevious()) {
            this.goToPage(this.currentPage() - 1);
        }
    }

    nextPage(): void {
        if (this.canGoNext()) {
            this.goToPage(this.currentPage() + 1);
        }
    }
}
