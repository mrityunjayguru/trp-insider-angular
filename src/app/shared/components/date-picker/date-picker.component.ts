import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  inject,
  input,
  model,
  output,
  viewChild,
  ViewEncapsulation,
  type TemplateRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, type ControlValueAccessor } from '@angular/forms';

import type { ClassValue } from 'clsx';

import { ZardButtonComponent } from '@/shared/components/button/button.component';
import type { ZardButtonSizeVariants, ZardButtonTypeVariants } from '@/shared/components/button/button.variants';
import { ZardCalendarComponent } from '@/shared/components/calendar/calendar.component';
import { ZardIconComponent } from '@/shared/components/icon/icon.component';
import { ZardPopoverComponent, ZardPopoverDirective } from '@/shared/components/popover/popover.component';

import { mergeClasses } from '@/shared/utils/merge-classes';

@Component({
  selector: 'z-date-picker, [z-date-picker]',
  imports: [ZardButtonComponent, ZardCalendarComponent, ZardPopoverComponent, ZardPopoverDirective, ZardIconComponent],
  standalone: true,
  template: `
    <button
      z-button
      type="button"
      [zType]="zType()"
      [zSize]="zSize()"
      [disabled]="disabled()"
      [class]="buttonClasses()"
      zPopover
      #popoverDirective="zPopover"
      [zContent]="calendarTemplate"
      zTrigger="click"
      (zVisibleChange)="onPopoverVisibilityChange($event)"
      [attr.aria-expanded]="false"
      [attr.aria-haspopup]="true"
      aria-label="Choose date"
    >
      <span [class]="textClasses()">
        {{ displayText() }}
      </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke="#00B38D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V5" stroke="#00B38D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9.08984H20.5" stroke="#00B38D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#00B38D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6947 13.7002H15.7037" stroke="#00B38D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.6947 16.7002H15.7037" stroke="#00B38D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 13.7002H12.0045" stroke="#00B38D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9955 16.7002H12.0045" stroke="#00B38D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 13.7002H8.30329" stroke="#00B38D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29431 16.7002H8.30329" stroke="#00B38D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>

    <ng-template #calendarTemplate>
      <z-popover [class]="popoverClasses()">
        <z-calendar
          #calendar
          class="border-0 bg-white"
          [value]="value()"
          [minDate]="minDate()"
          [maxDate]="maxDate()"
          [disabled]="disabled()"
          (dateChange)="onDateChange($event)"
        />
      </z-popover>
    </ng-template>
  `,
  providers: [
    DatePipe,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ZardDatePickerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'class()',
  },
  exportAs: 'zDatePicker',
})
export class ZardDatePickerComponent implements ControlValueAccessor {
  private readonly datePipe = inject(DatePipe);

  readonly calendarTemplate = viewChild.required<TemplateRef<unknown>>('calendarTemplate');
  readonly popoverDirective = viewChild.required<ZardPopoverDirective>('popoverDirective');
  readonly calendar = viewChild.required<ZardCalendarComponent>('calendar');

  readonly class = input<ClassValue>('');
  readonly zType = input<ZardButtonTypeVariants>('outline');
  readonly zSize = input<ZardButtonSizeVariants>('default');
  readonly value = model<Date | null>(null);
  readonly placeholder = input<string>('Pick a date');
  readonly zFormat = input<string>('MMMM d, yyyy');
  readonly minDate = input<Date | null>(null);
  readonly maxDate = input<Date | null>(null);
  readonly disabled = model<boolean>(false);

  readonly dateChange = output<Date | null>();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange: (value: Date | null) => void = () => { };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched: () => void = () => { };

  protected readonly buttonClasses = computed(() => {
    const hasValue = !!this.value();
    return mergeClasses(
  // layout
  'w-full flex items-center justify-between text-left font-normal',

  // input-like visuals
  'border border-[#D2D2D2] rounded-sm px-3 py-3 text-sm',

  // focus ring (same as input)
  'focus:ring-2 focus:ring-teal-500 focus:outline-none',

  // placeholder color
  !hasValue && 'text-[#BCBCBC]',

  // allow consumer to override/add classes
  this.class(),
);

  });

protected readonly textClasses = computed(() => {
  const hasValue = !!this.value();
  return mergeClasses(
    'truncate',
    !hasValue && 'text-[#BCBCBC]'
  );
});


  protected readonly popoverClasses = computed(() => mergeClasses('w-auto p-0'));

  protected readonly displayText = computed(() => {
    const date = this.value();
    if (!date) {
      return this.placeholder();
    }
    return this.formatDate(date, this.zFormat());
  });

  protected onDateChange(date: Date | Date[]): void {
    // Date picker always uses single mode, so we can safely cast
    const singleDate = Array.isArray(date) ? (date[0] ?? null) : date;
    this.value.set(singleDate);
    this.onChange(singleDate);
    this.onTouched();
    this.dateChange.emit(singleDate);

    this.popoverDirective().hide();
  }

  protected onPopoverVisibilityChange(visible: boolean): void {
    if (visible) {
      setTimeout(() => {
        if (this.calendar()) {
          this.calendar().resetNavigation();
        }
      });
    }
  }

  private formatDate(date: Date, format: string): string {
    return this.datePipe.transform(date, format) ?? '';
  }

  writeValue(value: Date | null): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
