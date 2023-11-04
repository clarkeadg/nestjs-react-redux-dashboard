import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client'
import { mockDeep, DeepMockProxy } from 'jest-mock-extended'
import { PrismaService } from '../prisma/prisma.service';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';

describe('BillsController', () => {
  let controller: BillsController;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillsController],
      providers: [BillsService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    controller = module.get<BillsController>(BillsController);
    prisma = module.get(PrismaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
