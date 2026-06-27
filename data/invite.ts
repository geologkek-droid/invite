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
  calendar: {
    buttonText: "Добавить в календарь",
    icsPath: "/masha-vadim-wedding.ics",
    googleUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=%D0%A1%D0%B2%D0%B0%D0%B4%D1%8C%D0%B1%D0%B0%20%D0%9C%D0%B0%D1%88%D0%B8%20%D0%B8%20%D0%92%D0%B0%D0%B4%D0%B8%D0%BC%D0%B0&dates=20260905T102000/20260905T230000&ctz=Europe%2FSamara&location=%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%B0&details=10%3A20%20%E2%80%94%20%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%3A%20%D0%97%D0%90%D0%93%D0%A1%2C%20%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%B0%2C%20%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B3%D0%B2%D0%B0%D1%80%D0%B4%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F%20238%0A17%3A00%20%E2%80%94%20%D0%B1%D0%B0%D0%BD%D0%BA%D0%B5%D1%82%3A%20%D0%91%D0%B0%D0%BD%D0%BA%D0%B5%D1%82%D0%BD%D1%8B%D0%B9%20%D0%B7%D0%B0%D0%BB%20%D0%9B%D0%9E%D0%A4%D0%A2%2C%20%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%B0%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2041"
  },
  dressCode: {
    title: "Дресс-код",
    subtitle: "Без строгих правил",
    text:
      "У нас без дресс-кода: приходите в том, в чём вам красиво и удобно. Мы не задаём палитру, для нас главное ваше настроение и присутствие рядом."
  },
  wishes:
    "Пожалуйста, не дарите нам цветы. Мы будем рады вашим тёплым словам, улыбкам и, если хочется добавить немного азарта, можно заменить букет лотерейным билетом.",
  wishesImage: "/images/couple-wildflowers.png",
  footer: {
    title: "До встречи!",
    note: "Будем ждать вас в этот особенный день."
  }
} as const;

export type InviteData = typeof inviteData;
