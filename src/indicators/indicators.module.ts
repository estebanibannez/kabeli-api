import { Module } from '@nestjs/common';
import { IndicatorsService } from 'src/indicators/services/indicators.service';
import { IndicatorsController } from './controllers/indicators.controller';

@Module({
  providers: [IndicatorsService],
  controllers: [IndicatorsController],
})
export class IndicatorsModule {}
