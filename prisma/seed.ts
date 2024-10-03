import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  const Country_costs: Prisma.Country_costsCreateInput[] = await [
    {
      country_name: "Poland",
      costs_one_person: 520,
      costs_family: 2165,
      hotel_cost_min: 15,
      hotel_cost_max: 150,
      apartment_cost_min: 400,
      apartment_cost_max: 1500,
      dinner_cost: 15,
      car_rent: 30,
    },
    {
      country_name: "Germany",
      costs_one_person: 1850,
      costs_family: 4800,
      hotel_cost_min: 95,
      hotel_cost_max: 220,
      apartment_cost_min: 675,
      apartment_cost_max: 1650,
      dinner_cost: 15,
      car_rent: 55,
    },
    {
      country_name: "United Kingdom",
      costs_one_person: 2300,
      costs_family: 5700,
      hotel_cost_min: 150,
      hotel_cost_max: 250,
      apartment_cost_min: 1300,
      apartment_cost_max: 2000,
      dinner_cost: 30,
      car_rent: 20,
    },
    {
      country_name: "France",
      costs_one_person: 1800,
      costs_family: 5200,
      hotel_cost_min: 85,
      hotel_cost_max: 700,
      apartment_cost_min: 665,
      apartment_cost_max: 1600,
      dinner_cost: 20,
      car_rent: 17,
    },
    {
      country_name: "Spain",
      costs_one_person: 1680,
      costs_family: 4500,
      hotel_cost_min: 85,
      hotel_cost_max: 350,
      apartment_cost_min: 800,
      apartment_cost_max: 1700,
      dinner_cost: 15,
      car_rent: 50,
    },
    {
      country_name: "Russia",
      costs_one_person: 800,
      costs_family: 2300,
      hotel_cost_min: 30,
      hotel_cost_max: 900,
      apartment_cost_min: 265,
      apartment_cost_max: 750,
      dinner_cost: 8,
      car_rent: 20,
    },
    {
      country_name: "Italy",
      costs_one_person: 1700,
      costs_family: 3500,
      hotel_cost_min: 68,
      hotel_cost_max: 500,
      apartment_cost_min: 630,
      apartment_cost_max: 1460,
      dinner_cost: 20,
      car_rent: 15,
    },
    {
      country_name: "Ukraine",
      costs_one_person: 745,
      costs_family: 1970,
      hotel_cost_min: 50,
      hotel_cost_max: 75,
      apartment_cost_min: 235,
      apartment_cost_max: 600,
      dinner_cost: 6,
      car_rent: 21,
    },
    {
      country_name: "Romania",
      costs_one_person: 1050,
      costs_family: 2900,
      hotel_cost_min: 35,
      hotel_cost_max: 85,
      apartment_cost_min: 335,
      apartment_cost_max: 755,
      dinner_cost: 10,
      car_rent: 5,
    },
    {
      country_name: "Netherlands",
      costs_one_person: 2430,
      costs_family: 5800,
      hotel_cost_min: 46,
      hotel_cost_max: 450,
      apartment_cost_min: 1218,
      apartment_cost_max: 2393,
      dinner_cost: 19,
      car_rent: 14,
    },
    {
      country_name: "Belgium",
      costs_one_person: 1880,
      costs_family: 5000,
      hotel_cost_min: 75,
      hotel_cost_max: 500,
      apartment_cost_min: 787,
      apartment_cost_max: 1370,
      dinner_cost: 20,
      car_rent: 23,
    },
  ];

  const Countries: Prisma.CountryCreateInput[] = await [
    {
      name: "China",
      costs: 2500,
      continent: "Asia",
    },
    {
      name: "Japan",
      costs: 4100,
      continent: "Asia",
    },
    {
      name: "Poland",
      costs: 820,
      continent: "Europe",
    },
  ];

  console.log("Seeding countries...");

  Countries.forEach(async (country) => {
    await prisma.country.create({
      data: country,
    });
  });

  Country_costs.forEach(async (country) => {
    await prisma.country_costs.create({
      data: country,
    });
  });

  // const User: Prisma.UserCreateInput = await {
  //   email: "losttape@gmail.com",
  //   password: "123",
  //   userName: "piotr",
  // };

  // await prisma.user.create({
  //   data: User,
  // });

  // console.log(`Created user with id: ${user.id}`);

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
