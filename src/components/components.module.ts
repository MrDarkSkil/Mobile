import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader';
import { LoaderModuleComponent } from './loader-module/loader-module';
@NgModule({
	declarations: [LoaderComponent,
    LoaderModuleComponent],
	imports: [],
	exports: [LoaderComponent,
    LoaderModuleComponent]
})
export class ComponentsModule {}
