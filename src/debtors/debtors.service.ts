import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateDebtorDto } from './dto/create-debtor.dto';
import { UpdateDebtorDto } from './dto/update-debtor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Debtor } from './entities/debtor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DebtorsService {

  private readonly logger = new Logger('DebtorsService');

  constructor(
    @InjectRepository(Debtor)
    private readonly debtorRepository: Repository<Debtor>
  ) { }

  async create(createDebtorDto: CreateDebtorDto) {
    try {
      const newDebtor = this.debtorRepository.create(createDebtorDto);
      await this.debtorRepository.save(newDebtor);
      return newDebtor;
    } catch (error) {
      this.handlerDBExceptios(error)
    }
  }

  findAll() {
    
  }

  findOne(id: number) {
    return `This action returns a #${id} debtor`;
  }

  update(id: number, updateDebtorDto: UpdateDebtorDto) {
    return `This action updates a #${id} debtor`;
  }

  remove(id: number) {
    return `This action removes a #${id} debtor`;
  }

  private handlerDBExceptios(error: any) {
    if (error.code === '23505') {
      this.logger.error(error.detail);
      throw new BadRequestException(error.detail);
    }

    this.logger.error(error);
    throw new InternalServerErrorException('Unexpected error, check server logs');
  }
}
