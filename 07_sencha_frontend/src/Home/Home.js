import React, { Component, Text } from "react";
import {
	Grid,
	Toolbar,
	Column,
	SearchField,
	Button,
	Image,
	WidgetCell,
	treePanel
} from "@sencha/ext-modern";

import axios from "axios";
import { small, medium } from "../responsiveFormulas";

export default class Home extends Component {
	state = {
		all: [],
		todoTitles: [],
		categories: [],
		id: null
	};

	store = new Ext.data.Store({
		data: [this.state.all]
	});

	async componentDidMount() {
		await axios.get(`http://localhost:9090/data/all`).then(res => {
			const all = res.data;
			this.setState({ all });
		});
		this.store.add(this.state.all);
	}



	deleteItem(item, value) {

		console.log(this.store.data.items)

		console.log('item', item)
		console.log('value', value)
		// Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	}


	async onConfirm(choice, col, idx, isChecked) {
		if (choice === 'yes') {
			var panel = Ext.create('Ext.grid.Panel', {
				//enableLocking: true,
				columns: [{
					locked: true
				}]
			})
			console.log('pane', pane)
			//await axios.delete(`http://localhost:9090/data/all/${this.state.all}`).then(res => console.log('object', object))
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

	addNewItems() {
		window.open("./addnewitems", "_self")
	}

	render() {
		return (
			<Grid store={this.store} data={this.state.all}>
				<Toolbar docked="top">
					<Button
						handler={this.addNew}
						text="Add new category"
						docked="right"
						style={{ color: "green" }}
					/>
					<Button
						handler={this.addNewItems}
						text="Add new items"
						docked="right"
						style={{ color: "green" }}
					/>
				</Toolbar>
				<Column
					text="productId"
					dataIndex="productId"
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
						<WidgetCell >{}
							<Button
								iconCls="x-fa fa-trash"
								tabIndex={this.store.productId}
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

			</Grid >
		);
	}

}
