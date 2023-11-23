import { faker } from "@faker-js/faker";
import { writeFile } from "node:fs/promises";

const userCount = 1000;

function createRandomUser() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({
    firstName,
    lastName,
  });

  const birthdate = faker.date.birthdate();
  const age = Math.floor(
    (new Date().getTime() - birthdate.getTime()) / 1000 / 60 / 60 / 24 / 365
  );

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    age,
    gender: sex,
    subscription: faker.helpers.arrayElement(["free", "basic", "business"]),
    createdAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: userCount,
});

const filename = new URL("../users.json", import.meta.url).pathname;
await writeFile(filename, JSON.stringify(users, null, 2));

console.log("Done!", filename);
