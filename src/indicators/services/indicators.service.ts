import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IResponseIndicator } from 'src/interfaces/response.indicator';

@Injectable()
export class IndicatorsService {
  async getAllIndicators(): Promise<IResponseIndicator> {
    try {
      const { data } = await axios.get<IResponseIndicator>(
        'https://mindicador.cl/api',
      );

      return data;
    } catch (error) {
      console.log('Ocurrió un error: ' + error);
    }
  }

  async getIndicatorById(id: string): Promise<IResponseIndicator> {
    try {
      const { data } = await axios.get<IResponseIndicator>(
        `https://mindicador.cl/api/${id}`,
      );
      return data;
    } catch (error) {
      console.log('Ocurrió un error: ' + error);
    }
  }
}
