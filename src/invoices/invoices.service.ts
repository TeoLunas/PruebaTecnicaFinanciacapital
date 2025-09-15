import { PaginationDto } from './../common/dtos/pagination.dto';
import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoicesService {

    private readonly logger = new Logger('InvoicesService');
  
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>
  ){}

  async create(createInvoiceDto: CreateInvoiceDto) {
    try {
      const newInvoice = this.invoiceRepository.create(createInvoiceDto);
      await this.invoiceRepository.save(newInvoice);
      return newInvoice;
    } catch (error) {
        this.handlerDBExceptios(error);
    }
  }

  async findAll( paginationDto: PaginationDto) {
    try {
      const { limit = 10, offset = 0 } = paginationDto;
      const invoices = await this.invoiceRepository.find({
        where:{},
        take: limit,
        skip: offset
      })
      return invoices;
    } catch (error) {
      this.handlerDBExceptios(error);
    }

  }

  async findOne(id: number) {
    
    const invoice = await this.invoiceRepository.findOneBy({id});

    if(!invoice)
      throw new NotFoundException('Factura no encontrada');
    
    return invoice;

  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.invoiceRepository.preload({
      id: id,
      ...updateInvoiceDto
    });

    if(!invoice)
      throw new NotFoundException('Factura a actualizar no encontrada');
    
    try {
      await this.invoiceRepository.save(invoice);
      return invoice;
    } catch (error) {
      this.handlerDBExceptios(error);
    }

  }

  async remove(id: number) {
    const invoice = await this.findOne(id);
    
    if(!invoice)
      throw new NotFoundException('Factura a eliminar no encontrado');

    invoice.active = false;

    this.update(id, invoice);

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
