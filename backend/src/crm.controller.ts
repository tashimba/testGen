import { Controller, Get, Post, Query } from '@nestjs/common';
import { CrmService } from './crm.service';

@Controller('crm')
export class CrmController {
  constructor(private readonly CrmService: CrmService) {}

  @Get('auth')
  async fetchAccessToken(): Promise<void> {
    await this.CrmService.fetchAccessToken();
  }

  @Post('items')
  async addItems(@Query('endpoint') endpoint: string): Promise<string> {
    return this.CrmService.addItems(endpoint);
  }
}
