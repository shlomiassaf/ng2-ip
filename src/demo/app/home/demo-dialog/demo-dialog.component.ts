import { Component } from '@angular/core';
import { MatButtonToggleChange, MatDialogRef } from '@angular/material';

import { VALIDATION_TYPE, COPY_MODE_TYPE } from 'ngx-ip/src/index';
@Component({
  selector: 'demo-dialog',
  templateUrl: './demo-dialog.component.html',
})
export class DemoDialogComponent {
  inputValidation: VALIDATION_TYPE = 'block';
  disabledBlocks: boolean[] = [];
  highlightInvalidBlocks = true;
  theme: string = 'default';
  mode: string = 'ipv4';
  disabled: boolean;
  readonly: boolean;
  separator: string;
  copyMode: COPY_MODE_TYPE = 'select';

  ip: string;

  constructor(public dialogRef: MatDialogRef<DemoDialogComponent>) {

  }

  onDisableBlockChange($event: MatButtonToggleChange) {
    // we must change the whole array for this to kick CD.
    this.disabledBlocks = this.disabledBlocks.slice();
    const value = parseInt($event.value, 10);
    if (value === -1) {
      this.disabled = $event.source.checked;
    } else {
      this.disabledBlocks[value] = $event.source.checked;
    }
  }
}
