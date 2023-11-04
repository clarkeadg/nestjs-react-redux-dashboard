import { Controller, Get, Param, UseGuards, Req, NotFoundException } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Req() req) {
    const data = await  this.invoicesService.findAll(req.user.id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Req() req, @Param('id') id: string) {
    const data = await  this.invoicesService.findOne(req.user.id, +id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }
}
