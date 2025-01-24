import { Module } from '@nestjs/common';

import { HttpModule } from '@nestjs/axios';
import { CrmModule } from './crm.module';
import { CrmController } from './crm.controller';

@Module({
  imports: [HttpModule, CrmModule],
  controllers: [CrmController],
})
export class AppModule {}
