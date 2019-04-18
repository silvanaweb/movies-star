import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import { MovieListItem } from '../../components/Movies/MovieListItem';
import { MovieList } from '../../components/Movies/MovieList';
import { movies } from '../fixtures/movies';

test('should render MovieListItem correctly', () => {
	const props = {
		genres: 'Action,Animation',
		image: 'image.jpg',
		index: 0,
		title: "Howl's moving castle",
	};
	const wrapper = shallow(<MovieListItem {...props} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render MovieList correctly with empty list', () => {
	const wrapper = shallow(<MovieList movies={[]} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render MovieList correctly with movies list', () => {
	const wrapper = shallow(<MovieList movies={movies} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
