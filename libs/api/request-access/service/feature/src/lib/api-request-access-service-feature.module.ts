import { Module } from '@nestjs/common';
import { RequestAccessService } from './request-access.service';

@Module({
  controllers: [],
  providers: [RequestAccessService],
  exports: [],
})
export class ApiRequestAccessServiceFeatureModule {}
