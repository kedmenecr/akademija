import React, { Component } from "react";
import {
	FieldSet,
	FormPanel,
	UrlField,
	TextField,
	EmailField,
	RadioField,
	TextAreaField,
	ToggleField,
	SliderField,
	DatePickerField,
	PasswordField,
	SpinnerField,
	CheckBoxField,
	Button,
	SelectField,
	Container,
	Label,
	Toolbar
} from "@sencha/ext-modern";

import axios from "axios";
import { small, medium } from "../responsiveFormulas";

export default class AddNew extends Component {
	constructor() {
		super();

		this.state = {
			disabled: false
		};
	}

	toggleDisabled() {
		this.setState({ disabled: !this.state.disabled });
	}

	state = {}

	createCategory = async () => {
		console.log('this.state.categoryName', this.state.categoryName)


		var categoryName = this.state.categoryName


		await axios.post(`http://localhost:9090/data/category/new`, { categoryName })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
	}

	onChange = (field, value) => {
		this.setState({ categoryName: value })

	}

	render() {
		const { disabled } = this.state;
		return (
			<Container store={this.store}
				platformConfig={{
					phone: {
						layout: 'fit'
					},
					"!phone": {
						layout: 'center',
						padding: 10
					}
				}}
			>
				<FormPanel
					ref={form => this.form = form}
					shadow
					padding="20"
					platformConfig={{
						"!phone": {
							maxHeight: 300,
							width: 350
						}
					}}
				>
					<FieldSet title="Add New Category" defaults={{ labelAlign: "placeholder" }}>
						<TextField
							onChange={this.onChange}
						/>
					</FieldSet>

					<Toolbar shadow={false} docked="bottom" layout={{ type: 'hbox', pack: 'right' }}>
						<Button text={'Create'} margin="0 10 0 0" handler={this.createCategory} />
						<Button text="Reset" handler={() => this.form.cmp.reset()} />
					</Toolbar>
				</FormPanel>

			</Container>


		);
	}
}