import React, { Component, Text } from "react";
import {
	Grid,
	Toolbar,
	Column,
	SearchField,
	Button,
	Image,
	WidgetCell
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

	async componentDidMount() {
		await axios.get(`http://localhost:9092/data`).then(res => {
			const todos = res.data;

			this.setState({ todos });
		});

		this.store.add(this.state.todos);
	}

	deleteItem = async () => {


	}

	updateItem() {

	}


	render() {
		return (
			<Grid store={this.store}>
				<Toolbar docked="top">
					<Button
						handler={() => this.getAlert()}
						text="Add new item"
						docked="right"
						style={{ color: "red" }}
					/>
				</Toolbar>
				<Column
					text="Category Name"
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
				<Column text="Delete Item" flex={1} >
					<WidgetCell
					>
						<Button
							ui="round action"
							handler={this.deleteItem}
							text="DELETE"
							style={{ border: '1px solid red', background: "red" }} />/>
					</WidgetCell>
				</Column>
				<Column text="Update Item" flex={1} >
					<WidgetCell >
						<Button
							ui="round action"
							handler={this.updateItem}
							text="UPDATE"
							style={{ border: '1px solid red', background: "red" }} />
					</WidgetCell>
				</Column>
			</Grid>
		);
	}

}
