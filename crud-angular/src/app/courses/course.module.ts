import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, CourseRoutingModule, MatTableModule],
})
export class CourseModule {}
