import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleApplicationRegionModule } from './region/region.module';
import { JhipsterSampleApplicationCountryModule } from './country/country.module';
import { JhipsterSampleApplicationLocationModule } from './location/location.module';
import { JhipsterSampleApplicationDepartmentModule } from './department/department.module';
import { JhipsterSampleApplicationTaskModule } from './task/task.module';
import { JhipsterSampleApplicationEmployeeModule } from './employee/employee.module';
import { JhipsterSampleApplicationJobModule } from './job/job.module';
import { JhipsterSampleApplicationJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleApplicationRegionModule,
        JhipsterSampleApplicationCountryModule,
        JhipsterSampleApplicationLocationModule,
        JhipsterSampleApplicationDepartmentModule,
        JhipsterSampleApplicationTaskModule,
        JhipsterSampleApplicationEmployeeModule,
        JhipsterSampleApplicationJobModule,
        JhipsterSampleApplicationJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
