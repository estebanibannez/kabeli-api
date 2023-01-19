import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IResponseIndicator } from 'src/interfaces/response.indicator';

@Injectable()
export class IndicatorsService {
  async getAllIndicators(): Promise<IResponseIndicator> {
    const { data } = await axios.get<IResponseIndicator>(
      'https://mindicador.cl/api',
    );

    return data;
  }
}
