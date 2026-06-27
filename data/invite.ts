export const inviteData = {
  hero: {
    title: "Свадебное приглашение",
    brideName: "Маша",
    groomName: "Вадим",
    coupleNames: "Маша + Вадим",
    names: "Маша + Вадим",
    date: "5 сентября",
    intro:
      "Дорогие и любимые, мы приглашаем вас разделить с нами день нашей свадьбы. Будем счастливы видеть вас рядом.",
    heroImage: "/images/couple-hero.png"
  },
  timeline: [
    {
      time: "10:20",
      title: "Регистрация",
      place: "ЗАГС, Самара, Молодогвардейская 238",
      zagsImage: "/images/zags-cutout.png",
      notes: [
        "После регистрации — водная прогулка на теплоходе для желающих",
        "Сбор у ЗАГСа после регистрации"
      ]
    },
    {
      time: "17:00",
      title: "Банкет",
      place: "Банкетный зал ЛОФТ, Самара, Московское шоссе 41",
      notes: []
    }
  ],
  wishes:
    "Пожалуйста, не дарите нам цветы. Мы будем рады вашим тёплым словам, улыбкам и, если хочется добавить немного азарта, можно заменить букет лотерейным билетом.",
  wishesImage: "/images/couple-wildflowers.png",
  footer: {
    title: "До встречи!",
    note: "Будем ждать вас в этот особенный день."
  }
} as const;

export type InviteData = typeof inviteData;
