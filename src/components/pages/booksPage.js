import React, { Component } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import { withRouter } from 'react-router-dom';

export class BooksPage extends Component {
	gotService = new gotService();

	state = {
		error: false
	}

	onItemSelected = (id) => {
		this.setState({
			selectedBook: id
		})
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	render() {

		if (this.state.error) {
			return <ErrorMessage />
		}

		return (
			<ItemList
				onItemSelected={(itemTd) => {
					this.props.history.push(itemTd);
				}}
				getData={this.gotService.getAllBooks}
				renderItem={({ name }) => name} />
		)
	}
}

export default withRouter(BooksPage);