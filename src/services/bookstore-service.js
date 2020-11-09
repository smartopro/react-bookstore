const createBook = (id, caption, author, imageURL) => ({ id, caption, author, imageURL });

export default class BookstoreService {
    getBooks() {
        return [
            createBook(1, "JavaScript. Подробное руководство", "Дэвид Флэнаган", "https://cdn1.ozone.ru/multimedia/1005767303.jpg"),
            createBook(2, "Выразительный JavaScript. Современное веб-программирование", "Хавербеке Марейн", "https://cdn1.ozone.ru/s3/multimedia-t/6000018281.jpg"),
            createBook(3, "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих", "Бхаргава Адитья", "https://cdn1.ozone.ru/multimedia/1037901676.jpg")
        ];
    }
}
