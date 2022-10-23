import Axios from 'axios';
const API_KEY = '28133601-50b96a0b59b26f277c741bb78';
const API_URL = 'https://pixabay.com/api/';

export default class ImagesApiService {
	constructor() {
   	this.searchQuery = "";
   	this.page = 1;
   	this.per_page = 40;
	};

	async fetchImages() {
   	const options = new URLSearchParams({
      key: API_KEY,
      q: this.query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: this.per_page,
      page: this.page
   });
   	const url = `${API_URL}?${options}`;
   	const response = await Axios.get(url);
   	this.totalHits = response.data.totalHits;
   	return response.data.hits;

	}

	incrementPage() {
   	this.page += 1;
	}
	resetPage() {
   	this.page = 1;
	}

	get query() {
   	return this.searchQuery;
	}
	set query(newQuery) {
   	this.searchQuery = newQuery;
	}
}