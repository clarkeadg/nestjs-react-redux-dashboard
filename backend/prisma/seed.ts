// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { faker } from "@faker-js/faker";
import * as bcrypt from 'bcrypt';

const roundsOfHashing = 10;

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

  const password1 = await bcrypt.hash(process.env.LOGIN_PASSWORD, roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: process.env.LOGIN_EMAIL },
    update: {
      password: password1,
    },
    create: {
      name: "User",
      email: process.env.LOGIN_EMAIL,
      password: password1 
    }
  });

  const makeBills = async (numberItems:number) => {
    for(let i=0;i<numberItems;i++) {
      await prisma.bill.create({
        data: {
          amount: faker.number.float({ precision: 0.01 }),
          due_date: faker.date.future(),
          details: {
            "description": faker.lorem.words()
          },
          user_id: user1.id
        }
      });
    }
  }

  const makeInvoices = async (numberItems:number) => {
    for(let i=0;i<numberItems;i++) {
      await prisma.invoice.create({
        data: {
          amount: faker.number.float({ precision: 0.01 }),
          due_date: faker.date.future(),
          details: {
            "description": faker.lorem.words()
          },
          user_id: user1.id
        }
      });
    }
  }

  await makeBills(11);
  await makeInvoices(11);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
