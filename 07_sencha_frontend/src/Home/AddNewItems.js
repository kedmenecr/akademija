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

export default class AddNewItems extends Component {
	constructor() {
		super();

		this.state = {
			disabled: false
		};
	}

	onChange = (field, value) => {
		this.setState({ productName: value })
		this.setState({ price: value })
	}

	toggleDisabled() {
		this.setState({ disabled: !this.state.disabled });
	}

	state = {}


	postProduct = async () => {
		var productName = this.state.productName
		var price = this.state.price

		await axios.post(`http://localhost:9090/data/products/new`, { productName, price })
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
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
							maxHeight: 500,
							width: 350
						}
					}}
				>
					<FieldSet ref="personal" title="Add new item " defaults={{ labelAlign: "placeholder" }}>
						<TextField label="Name of item" required placeholder="This field is required" disabled={disabled} value={this.state.productName} onChange={this.onChange} />
						<SpinnerField label="Price per unit" required minValue={0} maxValue={1000} stepValue={1} value={this.state.price} cycle margin="15 0 0 0" labelAlign="top" disabled={disabled} onChange={this.onChange} />
					</FieldSet>
					<FieldSet
						title="Choose category"
						layout={{ type: 'vbox', align: 'left' }}
						defaults={{
							labelAlign: "placeholder",
							name: 'color',
							labelAlign: 'right',
							labelWidth: 'auto',
							padding: 0
						}}
					>
						<RadioField required name="color" boxLabel="Food" />
						<RadioField required name="color" boxLabel="Toy" value="toy" />
						<RadioField required name="color" boxLabel="Item" value="item" />
						<RadioField required name="color" boxLabel="Dino" value="dino" />
						<RadioField required name="color" boxLabel="Rims" value="rims" />
					</FieldSet>

					<Toolbar shadow={false} docked="bottom" layout={{ type: 'hbox', pack: 'right' }}>
						<Button text={'Create'} margin="0 10 0 0" handler={this.postProduct} />
						<Button text="Reset" handler={() => this.form.cmp.reset()} />
					</Toolbar>
				</FormPanel>

			</Container>


		);
	}
}