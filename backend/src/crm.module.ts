import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CrmService } from './crm.service';

@Module({
  imports: [HttpModule],
  providers: [CrmService],
  exports: [CrmService],
})
export class CrmModule {}
