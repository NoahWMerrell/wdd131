const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

console.log(articles[1].title);

const container = document.querySelector('#book-info');

articles.forEach(function(item) {
	const book = `
		<section id="book-article">
            <div id="info">
                <p class="release-date">${item.date}</p>
                <p>${item.ages}</p>
                <p>${item.genre}</p>
                <p>${item.stars}</p>
            </div>
            <article id="book">
                <h2>${item.title}</h2>
                <img src="${item.imgSrc}" alt="${item.imgAlt}">
                <p>${item.description}</p>
            </article>
		</section>
	`
	// const space  = <div class="book-article"></div>

	container.innerHTML += book;
}) 