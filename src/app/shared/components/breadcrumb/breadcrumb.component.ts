import { Component, Input } from '@angular/core';
import { Breadcrumb } from '../../models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
	@Input() data: Breadcrumb[];

}
