# Сервис по выбору критериев для покупки недвижимости 🏡🌳🏢🌈

## Приоритеты по MVP
1. Сделать описание критериев (Заголовки + описание) +
2. Добавить и отрефакторить инпуты для основной формы
3. Добавить это в Pinia
4. Генерация PDF - прототип
5. Базовая валидация - light
6. Без адаптива for mobile

![demo](MVP.jpg)

### Список критериев по приоритету (Добавил 12 в текущий момент)
1. Вид жилья и Тип квартиры - ( Новостройка / Дом / Вторичка ). Студия, Однокомнатная, Двухкомнатная, Апартаменты).
2. Сколько м² в недвижимости - Общая площадь, Жилая площадь, Площадь Кухни, Колличество комнат.
3. Транспорт - Автобус, Электричка, Метро, Автомобиль. Дистанция (кол-во минут) от недвижимости до транспорта.
4. Этаж - На каком этаже находится квартира. Первый и последний этаж не особо перспективный вариант.
5. Инфраструктура - Аптеки, Больницы, Детские Сады, Магазины, ДЕЗ, Парки, Парковки, Спортивные площадки, ТРЦ.
6. Экология - ТЭЦ, РЖД пути, Аэропорты, Заводы, Электрические проводные пути, Кладбище.
7. Планировки и Отделка - Какая планировка у недвижимости. Есть ли отделка у застройщика и что в неё входит.
8. Год и Месяц сдачи недвижимости - В каком месяце и году начали строить и окончание постройки, дата вручение ключей и заселение.
9. Акции и Скидки - Какие акции, скидки у застройщика имеются и их условия.
10. Юридическая проверка - Проверяем документы на недвижимость и смотреть как оформлять сделку.
11. Осмотр района - Можно поехать в нужный район и посмотреть физически местность.
12. Ипотечные программы - Господдержка, Ипотека без подтверждения дохода, Семейная ипотека, Ипотека для IT, Ипотека для иностранных граждан, Строительство дома, Ипотека плюс материнский капитал, Кредит под залог недвижимости, Военная ипотека, Новостройка и д.р.
13. Перспективы Недвижимости - Что в дальнейшем может случиться с районом, что построят, поднимится ли цена на недвижимость и другое.
14. Банк - Перечень интересных Банков и их условия на ипотеку.
15. Услуги, снижающие ставку ипотеки (зарплатная карта, страховка и т д см)
16. инфа по получению налогового вычета с недвижимости
17. Лифт, газ, отопление
18. график платежей - ? но это к калькулятору уже

### Можно добавить в дальнейшем функционал
1. Таблица с данными - https://hc200ok.github.io/vue3-easy-data-table-doc/features/alternating.html
2. Посмотреть АПИ для недвижимости в бесплатном доступе https://apipheny.io/free-api/
3. Добавить компонент - пакет timeline путь от поиска квартиры до окончания https://www.npmjs.com/package/vue-next-timeline

### Полезные ссылки
- Добавить валидацию для формы [VueValidate](https://vuelidate-next.netlify.app/#getting-started-1),
  [VeeValidate](https://vee-validate.logaretm.com/v4/guide/composition-api/validation) 
- [Примеры дизайнов недвижимости](https://www.behance.net/search/projects/?search=%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20landing&sort=recommended&time=month)

### Пример характеристик при покупки недвижимости
![image](https://user-images.githubusercontent.com/71700914/185598743-df80c61c-2ba1-4197-8263-e5fb8f534fa2.png)


