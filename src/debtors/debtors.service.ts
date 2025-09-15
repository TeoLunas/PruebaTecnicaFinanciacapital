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
        where: { activo: true },
        take: limit,
        skip: offset
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

  async update(id: number, updateDebtorDto: UpdateDebtorDto) {
    
    const debtor = await this.debtorRepository.preload({
      id: id,
      ...updateDebtorDto
    });

    if(!debtor)
      throw new NotFoundException('Deudor a actualizar no encontrado')
    
    try{
      await this.debtorRepository.save(debtor);
      return debtor;
    }
    catch(error){
      this.handlerDBExceptios(error);
    }

  }

  async remove(id: number) {
    const debtor = await this.findOne(id);

    if(!debtor)
      throw new NotFoundException('Deudor a eliminar no encontrado');

    debtor.activo = false;

    this.update(id, debtor);
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
