import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  const courses = [
    {
      title: "IT-Sicherheit",
      modules: [
        {
          title: "Vorlesung WS 2021/22",
          videos: [
            {
              title: "Vorlesung 1 - 13.10.2021",
              url: "https://vircadiavr.cs.upb.de/uploads/videos/WiSe22/ITS/WiSe22-ITS-01-20211013.webm",
            },
            {
              title: "Vorlesung 2 - 20.10.2021",
              url: "https://vircadiavr.cs.upb.de/uploads/videos/WiSe22/ITS/WiSe22-ITS-02-20211020.webm",
            },
            {
              title: "Vorlesung 3 - 27.10.2021",
              url: "https://vircadiavr.cs.upb.de/uploads/videos/WiSe22/ITS/WiSe22-ITS-03-20211027.webm",
            },
          ],
        },
      ],
    },
    {
      title: "Modellierung",
      modules: [
        {
          title: "Vorlesung WS 2022/23",
          videos: [
            {
              title: "Vorlesung 1 - 11.10.2022",
              url: "https://vircadiavr.cs.upb.de/uploads/videos/WiSe22/MOD/WiSe22-MOD-01-20221011.webm",
            },
            {
              title: "Vorlesung 2 - 13.10.2022",
              url: "https://vircadiavr.cs.upb.de/uploads/videos/WiSe22/MOD/WiSe22-MOD-02-20221013.webm",
            },
          ],
        },
      ],
    },
    {
      title: "Berechenbarkeit und Komplexität",
      modules: [
        {
          title: "Vorlesung WS 2022/23",
          videos: [
            {
              title: "Vorlesung 1 - 10.10.2022",
              url: "https://vircadiavr.cs.upb.de/uploads/videos/WiSe22/BUK/WiSe22-BUK-01-221010.webm",
            },
            {
              title: "Vorlesung 2 - 17.10.2022",
              url: "https://vircadiavr.cs.upb.de/uploads/videos/WiSe22/BUK/WiSe22-BUK-02-221017.webm",
            },
          ],
        },
      ],
    },
    {
      title: "Gestaltung von Nutzungsschnittstellen",
      modules: [
        {
          title: "Vorlesung WS 2021/22",
          videos: [
            {
              title: "Einführung in die Gestaltung von Nutzungsschnittstellen",
              url: "https://youtu.be/JALJ78Vc-dg",
            },
            {
              title: "E1 - Was ist Ergonomie?",
              url: "https://youtu.be/BEVQwexGV0o",
            },
          ],
        },
      ],
    },
    {
      title: "Programmierung",
      modules: [
        {
          title: "Vorlesung WS 2019/20",
          videos: [
            {
              title: "Vorlesung 1 - 08.10.2019",
              url: "https://videos.uni-paderborn.de/channel/12/getMedium/cfb0e31c246a7bf729c2478244251767.mp4?1686575911&format=Default",
            },
          ],
        },
      ],
    },
  ];

  await Promise.all(
    courses.map(async (course) => {
      await prisma.course.create({
        data: {
          title: course.title,
          modules: {
            create: course.modules.map((module) => ({
              title: module.title,
              videos: {
                create: module.videos,
              },
            })),
          },
        },
      });
    })
  );

  console.log(`Seeded ${courses.length} courses`);
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
