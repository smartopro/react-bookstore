const createBook = (id, title, author, price, imageURL) => ({ id, title, author, price, imageURL });

export default class BookstoreService {
    #data = [
        createBook(1, "JavaScript. Подробное руководство", "Дэвид Флэнаган", 40, "https://cdn1.ozone.ru/multimedia/1005767303.jpg"),
        createBook(2, "Выразительный JavaScript. Современное веб-программирование", "Хавербеке Марейн", 20, "https://cdn1.ozone.ru/s3/multimedia-t/6000018281.jpg"),
        createBook(3, "Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих", "Бхаргава Адитья", 30,"https://cdn1.ozone.ru/multimedia/1037901676.jpg")
    ]

    async getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    if (Math.random() > 0.85) reject(new Error("Random error."));
                    else resolve(this.#data);
                } catch (error) {
                    reject(error);
                }
            }, 700);
        })
    }
}
