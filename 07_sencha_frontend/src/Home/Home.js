import React, { Component } from "react";
import {
	Grid,
	Toolbar,
	Column,
	SearchField,
	Button,
	Image,
	TextField
} from "@sencha/ext-modern";

//import { Panel } from '@sencha/ext-modern';
//import { TextArea } from '@sencha/ext-modern';
import axios from "axios";
import { small, medium } from "../responsiveFormulas";

export default class Home extends Component {
	state = {
		todos: [],
		todoTitles: [],
		todoIDs: [],
		todoStatuss: []
	};


	store = new Ext.data.Store({
		data: [this.state.todos]
	});
	// async getAlert(data) {
	//   const payload = {
	//     lol: "lol2"
	//   };
	//   await axios.post(`http://localhost:9090/create`, payload).then(res => {
	//     console.log(res);
	//   });
	// }

	async componentDidMount() {
		// await axios.get(`https://jsonplaceholder.typicode.com/todos`)
		await axios.get(`http://localhost:9090/data`).then(res => {
			const todos = res.data;

			this.setState({ todos });
		});

		this.store.add(this.state.todos);
	}

	render() {
		return (
			<Grid store={this.store}>
				<Toolbar docked="top">
					<SearchField
						ui="faded"
						ref={field => (this.query = field)}
						placeholder="Search..."
						onChange={this.onSearch.bind(this)}
						responsiveConfig={{
							[small]: {
								flex: 1
							},
							[medium]: {
								flex: undefined
							}
						}}
					/>
					<Button
						handler={() => this.getAlert()}
						text="Add new item"
						docked="right"
						style={{ color: "red" }}
					/>
				</Toolbar>
				<Column
					text="Category"
					dataIndex="categoryName"
					flex={2}
					resizable
					responsiveConfig={{
						[small]: {
							hidden: true
						},
						[medium]: {
							hidden: false
						}
					}}
				/>
				<Column
					text="Product"
					dataIndex="productName"
					flex={2}
					resizable
					responsiveConfig={{
						[small]: {
							hidden: true
						},
						[medium]: {
							hidden: false
						}
					}}
				>
					{this.state.todoTitles}
				</Column>
				<Column text="Price" dataIndex="price" flex={2} resizable />
				<Column text="operations">
					<TextField placeHolder="Enter Name..." label="Name" required />
				</Column>
			</Grid>
		);
	}

  /**
   * Filter the store when the user types in the search box
   */
	onSearch = () => { };
}
