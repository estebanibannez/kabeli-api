import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { IndicatorsModule } from './indicators/indicators.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    IndicatorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
