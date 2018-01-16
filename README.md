# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Задание
Код содержит ошибки разной степени критичности. Некоторых из них стилистические, а некоторые даже не позволят вам запустить приложение. Вам необходимо найти и исправить их.

Пункты для самопроверки:
1. Приложение должно успешно запускаться
2. Должно открываться GraphQL IDE - http://localhost:3000/graphql/
3. Все запросы на получение или изменения данных через graphql должны работать корректно. Все возможные запросы можно посмотреть в вкладке Docs в GraphQL IDE или в схеме (typeDefs.js)
4. Не должно быть лишнего кода
5. Все должно быть в едином codestyle

## Запуск
```
npm i
npm run dev
```

Для сброса данных в базе:
```
npm run reset-db
```

Ошибки:
1. Опечатка graphgl -> graphql (./index.js)
2. new Sequelize() (./models/index.js)
3. - Писать в консоль "it works!" это прекрасно, но не нужно (./public/scripts/test.js)
4. - Проверка, что дата начала собрания < даты конца собрания (./create-mock-data.js)
5. - avatar - не user input (./graphql/typeDefs.js)
6. ? event без комнаты? (./graphql/typeDefs.js)
7. random в args у users / rooms / events (./graphql/resolvers/query.js)
8. addUserToEvent - было не инициализировано
9. return, Карл! Не отображались users и room у events (./graphql/resolvers/index.js)
10. changeEventRoom - вместо roomId указан id (./graphql/resolvers/mutation.js)
11. - Перед удалением проверять объект на существование. И перед добавлением юзера в список на то, нет ли его там. И перед добавлением комнаты/юзера на их существование. 
12. Отсутствующая зависимость body-parser (./package.json)