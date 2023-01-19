import { Controller, Get, Param } from '@nestjs/common';
import { IndicatorsService } from 'src/indicators/services/indicators.service';
import { IIndicator } from 'src/interfaces/indicators';
import { IResponseIndicator } from 'src/interfaces/response.indicator';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Get('all')
  async getAllIndicator(): Promise<IResponseIndicator> {
    return await this.indicatorsService.getAllIndicators();
  }

  @Get(':id')
  async getIndicatorById(@Param('id') id: string): Promise<IIndicator> {
    return await this.indicatorsService.getIndicatorById(id);
  }
}
