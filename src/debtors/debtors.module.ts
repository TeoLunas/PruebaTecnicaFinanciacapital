import { Module } from '@nestjs/common';
import { DebtorsService } from './debtors.service';
import { DebtorsController } from './debtors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Debtor } from './entities/debtor.entity';

@Module({
  controllers: [DebtorsController],
  providers: [DebtorsService],
  imports:[ 
    TypeOrmModule.forFeature([Debtor])
  ]
})
export class DebtorsModule {}
