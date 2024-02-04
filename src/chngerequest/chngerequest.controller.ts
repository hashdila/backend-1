// src/cat.controller.ts

import { Controller, Get, Post, Put, Delete, Param, Body, Res } from '@nestjs/common';
import { CR } from './chngerequest.entity';
import { CrService } from './chngerequest.service';
import { Response } from 'express';

@Controller('crs')
export class CrController {
  constructor(private readonly crService: CrService) {}

  @Get()
  findAll(): Promise<CR[]> {
    return this.crService.findAll();
  }

  @Post()
  create(@Body() cr: CR): Promise<CR> {
    return this.crService.create(cr);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cr: CR): Promise<CR> {
    return this.crService.update(+id, cr);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.crService.delete(+id);
  }
  
  
}
