import type { ClassValue } from 'clsx';

import { BrnSelectGroupDirective } from '@spartan-ng/ui-select-brain';
import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/ui-core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[hlmSelectGroup], hlm-select-group',
  hostDirectives: [BrnSelectGroupDirective],
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class HlmSelectGroupDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected readonly _computedClass = computed(() => hlm(this.userClass()));
}
