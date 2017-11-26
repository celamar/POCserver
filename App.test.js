import React from 'react';
import App from './App';
import Qualify from './components/qualify';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

describe('form with smiley', function(){

	it('no smiley and no form', function(){
		var qual = renderer.create(<Qualify />).getInstance();
		console.log(qual);
		qual.setState({ comment: '', smiley:-1 });
		expect(qual.isValid()).toBe(false);
	});

	it('smiley but no form', function(){
		var qual = renderer.create(<Qualify />).getInstance();
		qual.setState({ comment: '', smiley: 3 });
		expect(qual.isValid()).toBe(false);
	});

	it('no smiley but form', function(){
		var qual = renderer.create(<Qualify />).getInstance();
		qual.setState({ comment: 'cuouco', smiley: -1 });
		expect(qual.isValid()).toBe(false);
	});

	it('smiley and form', function(){
		var qual = renderer.create(<Qualify />).getInstance();
		qual.setState({ comment: 'cuouco', smiley: 3 });
		expect(qual.isValid()).toBe(true);
	});

	it('smiley false', function(){
		var qual = renderer.create(<Qualify />).getInstance();
		qual.setState({ comment: 'coucou', smiley: 9 });
		expect(qual.isValid()).toBe(false);
	});


}); 
