import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared-module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth-module';
//import { PageHeaderComponent } from "./shared/components/page-header/page-header.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule,SharedModule,RouterOutlet,AuthModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class App {
  protected readonly title = signal('LibraryManagementUI');
}
