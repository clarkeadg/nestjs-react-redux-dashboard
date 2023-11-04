import { Controller, Get, Param, UseGuards, Req, NotFoundException } from '@nestjs/common';
import { BillsService } from './bills.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(@Req() req) {
    const data = await this.billsService.findAll(req.user.id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Req() req, @Param('id') id: string) {
    const data = await this.billsService.findOne(req.user.id, +id);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

}
