import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
//import { TableComponent } from './tabledemo.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TableComponent }
	])],
	exports: [RouterModule]
})
export class TableRoutingModule { }
