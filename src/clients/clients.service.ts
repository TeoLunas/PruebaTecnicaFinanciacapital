import { PaginationDto } from './../common/dtos/pagination.dto';
import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'rxjs';

@Injectable()
export class ClientsService {

  private readonly logger = new Logger('ClientsService');

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>) { }

  async create(createClientDto: CreateClientDto) {
    try {
      const newClient = this.clientRepository.create(createClientDto);
      await this.clientRepository.save(newClient);
      return newClient;
    } catch (error) {
      this.handlerDBExceptios(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 10, offset = 0 } = paginationDto;
      const clients = await this.clientRepository.find({
        where: {activo: true},
        take: limit,
        skip: offset
      });
      return clients;
    } catch (error) {
      this.handlerDBExceptios(error);
    }
  }

  async findOne(id: number) {

    const client = await this.clientRepository.findOneBy({ id });

    if (!client)
      throw new NotFoundException('Cliente no encontrado');

    return client;
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.preload({
      id: id,
      ...updateClientDto 
    });

    if(!client)
      throw new NotFoundException('Cliente a actualizar no encontrado')

    try{
      await this.clientRepository.save(client);
      return client;
    }
    catch(error){
      this.handlerDBExceptios(error);
    }
  }

  async remove(id: number) {
    const client = await this.findOne(id);

    if(!client)
      throw new NotFoundException('Cliente a eliminar no encontrado');

    client.activo = false;

    this.update(id, client);
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
