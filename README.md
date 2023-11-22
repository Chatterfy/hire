# Tech stack

- Front-end - React & Next.js
  -  Подойдет стандартный из [create-next-app](https://nextjs.org/docs/pages/api-reference/create-next-app)
  -  Без новомодного Next.js App Router
  -  Желательно c TypeScript + Eslint, но если сильно это затормозит разработку - можно оставить только JS
- Back-end - подойдет стандартный Next.js api

  
# Мотивация

Очень часто при разработке стартапов существует необходимость создавать страницы каталога с "табличным" содержанием. 
Внешний вид таких страницы может быть кастомнымс точки зрения UI дизайна. Порой это даже может быть не таблица, а набор тайлов (grid'ов), но функциональность таких страниц в 90% случаев плюс минус одинаковая. 

Как пример можно представить:
- [Yandex Market](https://market.yandex.ru/catalog--kompiuternaia-tekhnika/54425/list?srnum=2011) - тут в табличном виде, не совсем таблица, но есть строчная структура
- [Rotten Tomatoes](https://www.rottentomatoes.com/browse/movies_in_theaters/) - тут не таблица, а сетка

Было бы круто, если бы в проекте была одна страница со всем полным функционалом, на который бы были решены все основные UX, архитектурные и технические моменты. 
И эту страницы в последствии можно было бы реиспользовать по всему сайту, как для продуктовых страниц (список товаров/услуг/) , так и для технических (админка управления пользователями, список транзакций от пользоваталей).

# Задача

Необходимо вывести список пользователей сайта в табличном виде.

Необходимо что-бы была возможность:
- фильтровать по полям пользователей
- сортировать по цифровым полям
- должен быть полнотекстовый поиск
- необходимо предусмотреть построничность, на случай если данных будет много
- * подумать об инфинити-скролле (задачка со звездочкой*, если останется время)
 
В качестве бекэнда можно скопировать себе эту (моку)[/users.json] и раздать её в /api.

В процессе решения задачи, скорее всего нужно будет:
- выбрать CSS framework и компонентную React обертку для него  (типа react-bootstrap, reactstrap, tailwindui, or ... ) или обосновать отсутсвие выбора
- выбрать библиотеку форм или объяснить почему брать не нужно
- выбрать state менеджер или его отстутствие или объяснить почему брать не нужно
- выбрать библиотеку для запросов (типа react-query?) или объяснить почему брать не нужно
- выбрать библиотеку для таблиц или объяснить почему брать не нужно
