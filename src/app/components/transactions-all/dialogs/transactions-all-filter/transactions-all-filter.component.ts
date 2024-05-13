import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-stock-filter',
	templateUrl: './transactions-all-filter.component.html',
	styleUrls: ['./transactions-all-filter.component.css'],
})
export class TransactionsAllFilterComponent {
	// Price range variables
	priceRangeStart: number | null = 20;
	priceRangeEnd: number | null = 80;

	maintenanceMarginStart: number | null = 30;
	maintenanceMarginEnd: number | null = 70;

	formatLabel(value: number): string {
		// if (value >= 1000) {
		// 	return Math.round(value / 1000) + 'k';
		// }

		return `${value}`;
	}

	constructor(
		public dialogRef: MatDialogRef<TransactionsAllFilterComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
	) {}

	applyFilters() {
		// Pass price range filter values back to parent component
		this.dialogRef.close({
			priceRangeStart: this.priceRangeStart,
			priceRangeEnd: this.priceRangeEnd,
			maintenanceMarginStart: this.maintenanceMarginStart,
			maintenanceMarginEnd: this.maintenanceMarginEnd,
		});
	}
}
