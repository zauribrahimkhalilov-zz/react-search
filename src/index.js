import React from 'react';
import ReactDOM from 'react-dom';
import Programming from './Programming';

let languages = [

	{ name: 'Java'},
	{ name: 'C/C++'},
	{ name: 'Python'},
	{ name: 'C#'},
	{ name: 'PHP'},
	{ name: 'JavaScript'},
	{ name: 'Ruby'},
	{ name: 'React'},
	{ name: 'Angular 2'},
];

ReactDOM.render(
  <Programming items={languages} />,
  document.getElementById('root')
);
