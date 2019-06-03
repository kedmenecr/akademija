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
		await axios.get(`http://localhost:9090/data`).then(res => {
			const todos = res.data;
			this.setState({ todos });
		});

		this.store.add(this.state.todos);

	}

	deleteItem = async () => {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	}


	onConfirm(choice) {
		if (choice === 'yes') {
			console.log("you clicked yes")
		} else {
			console.log("you clicked no")
		}
	}

	updateItem() {
		window.open("./updateItem", "_self")
	}

	addNew() {
		window.open("./addNew", "_self")
	}

	render() {
		return (
			<Grid store={this.store}>
				<Toolbar docked="top">
					<Button
						handler={this.addNew}
						text="Add new item"
						docked="right"
						style={{ color: "green" }}
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
				</Column>
				<Column text="Price" dataIndex="price" flex={2} resizable />
				<Column text="Actions" flex={2} >
					<Column text="Delete" flex={1} align="center">
						<WidgetCell >
							<Button
								iconCls="x-fa fa-trash"
								handler={this.deleteItem}
								style={{ color: 'red' }} />
						</WidgetCell>
					</Column>
					<Column text="Update" flex={1} align="center">
						<WidgetCell >
							<Button
								handler={this.updateItem}
								iconCls="x-fa fa-pencil"
								style={{}} />
						</WidgetCell>
					</Column>

				</Column>

			</Grid>
		);
	}

}
