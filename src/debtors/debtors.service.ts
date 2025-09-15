import { PaginationDto } from './../common/dtos/pagination.dto';
import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
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

  async findAll(paginationDto: PaginationDto) {

    try {
      const { limit = 10, offset = 0 } = paginationDto;

      const debtors = await this.debtorRepository.find({
        where: { active: true },
        skip: limit,
        take: offset
      });
      return debtors;
    } catch (error) {
      this.handlerDBExceptios(error);
    }

  }

  async findOne(id: number) {
    const debtor = await this.debtorRepository.findOneBy({id})

    if (!debtor)
      throw new NotFoundException('Deudor no encontrado');

    return debtor;

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
