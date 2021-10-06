import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CourseRoutingModule, AppMaterialModule],
})
export class CourseModule {}
