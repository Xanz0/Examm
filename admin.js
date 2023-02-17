function findElement(element,parent=document){
    return parent.querySelector(element);
  }
  const BASE_URL = "https://63eb88a3fb6b6b7cf7e06faf.mockapi.io";
  const elTodos = findElement(".cards");
  const elTemplate = findElement("#template");
  const elLoader = findElement(".spinner-border");
  const ttl = findElement(".tittlee");
  const logout=findElement(".lgg");
  const elForm=findElement("#form-add");
  let books = [];
  
  const token =localStorage.getItem("token");
  if(!token){
      window.location.href="http://127.0.0.1:5501/login.html";
  }
  
  
  

  
  // if(Bookmarks.length===0){
  //     a.style.display="block";
  // }else{
  //     a.style.display="none";
  // }
  
  if (books.length === 0) {
    elLoader.style.display = "block";
  } else {
    elLoader.style.display = "none";
  }
  
  function generateDate(date) {
    return `${date.getFullYear()}`;
  }
  
  
  
  
  
// add Product
elForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	const name = evt.target.name.value;
	const image = evt.target.image.value;
	const category = evt.target.category.value;
	const count = evt.target.count.value;
	const published = evt.target.published.value;
	const publisher = evt.target.publisher.value;
  const description = evt.target.description.value;
  const authors = evt.target.authors.value;

	const newProduct = {
		name,
		image,
		category,
		count,
		published,
		publisher,
    description,
    authors,
	};


let books = [];

fetch(BASE_URL + 'Books/1', {
	method: 'PUT',
	body: JSON.stringify({
		name: 'test product',
		image: 'https://i.pravatar.cc',
		category: 'electronic',
		count:'50000',
		published:'2023-02-15T06:14:53.126Z',
		publisher:'admin',
    description: 'lorem ipsum set',
    authors:'Davlatali',
		
		
	}),
})
	.then((res) => res.json())
	.then((json) => console.log(json));

function renderProducts(array, parent = elCards) {
	parent.textContent = '';

	const fragment = document.createDocumentFragment();

	array.forEach((product) => {
		const template = template.content.cloneNode(true);

		const  name= findElement('.card-title', template);
		const  published= findElement('.date', template);
		const  image= findElement('.card-img-top', template);
		const  category= findElement('.category', template);
		const  publisher= findElement('.publisher', template);
		const  count= findElement('.count', template);
		const  description= findElement('.description', template);
    const  authors= findElement('#authors', template);
		

		name.textContent = product.name;
		published.textContent = product.published;
		category.textContent = product.category;
		count.textContent = product.count;
		publisher.textContent = product.publisher;
    authors.textContent = product.authors;
		description.textContent = product.description;
		img.src = product.image;

		fragment.appendChild(template);
		// parent.appendChild(template)
	});

	parent.appendChild(fragment);
}

function getData() {
	try {
		async function takeData() {
			const res = await fetch(BASE_URL + '/Books');

			if (res.status === 404) {
				throw new Error('qanaqadir xatolik');
			}
			let data = await res.json();

			books = data;

			renderProducts(books);
		}

		takeData();
	} catch (err) {
		console.log(err);
	}
}

getData();


	fetch(BASE_URL + '/Books', {
		method: 'POST',
		body: JSON.stringify(newProduct),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);

			alert("mahsulot qo'shildi");
			getData();
			elForm.reset();
		})
		.catch((err) => {
			alert("xato topildi qaytadan urinib ko'ring");
		});
});
  

 
      
  
  
  
  async function getData() {
    let res = await fetch(BASE_URL + "/Books");
  
    let data = await res.json();
    console.log(data);
    books = data;
  }
  getData();
  
  fetch("https://63eb88a3fb6b6b7cf7e06faf.mockapi.io/Books ")
    .then((res) => res.json())
    .then((data) => {
      elLoader.style.display = "none";
      books = data;
      renderTodos(books);
    })
    .catch((err) => {
      err.textContent = "Ma'lumot yuklanmadi";
    });
  
  
  
  
  
  
  
  
  
  
  
  
  