import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IIndicator } from 'src/interfaces/indicators';
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

  async getIndicatorById(id: string): Promise<IIndicator> {
    try {
      const { data } = await axios.get<IIndicator>(
        `https://mindicador.cl/api/${id}`,
      );
      return data;
    } catch (error) {
      console.log('Ocurrió un error: ' + error);
    }
  }
}
