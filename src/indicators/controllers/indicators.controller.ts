import { Controller, Get } from '@nestjs/common';
import { IndicatorsService } from 'src/indicators/services/indicators.service';
import { IResponseIndicator } from 'src/interfaces/response.indicator';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Get()
  getAllIndicator(): Promise<IResponseIndicator> {
    return this.indicatorsService.getAllIndicators();
  }
}
