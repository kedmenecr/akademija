import React, { Component } from 'react';

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
} from '@sencha/ext-modern';

Ext.require('Ext.field.InputMask'); // need to require this specifically for inputMask props to work

export default class UpdateItem extends Component {
	constructor() {
		super();

		this.state = {
			disabled: false
		};
	}

	toggleDisabled() {
		this.setState({ disabled: !this.state.disabled });
	}

	render() {
		const { disabled } = this.state;

		return (
			<Container
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
					<FieldSet ref="personal" title="Update/edit the item " defaults={{ labelAlign: "placeholder" }}>
						<TextField label="Name of item" required placeholder="This field is required" disabled={disabled} />
						<SpinnerField label="Quantity" required minValue={0} maxValue={1000} stepValue={1} cycle margin="15 0 0 0" labelAlign="top" disabled={disabled} />
						<SpinnerField label="Price per unit" required minValue={0} maxValue={1000} stepValue={1} cycle margin="15 0 0 0" labelAlign="top" disabled={disabled} />
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
						<RadioField required name="color" disabled={disabled} boxLabel="Food" value="food" />
						<RadioField required name="color" disabled={disabled} boxLabel="Animal" value="animal" />
						<RadioField required name="color" disabled={disabled} boxLabel="Other Category" value="otherCategory" />
					</FieldSet>
					<Toolbar shadow={false} docked="bottom" layout={{ type: 'hbox', pack: 'right' }}>
						<Button text={disabled ? 'Enable All' : 'Disable All'} margin="0 10 0 0" handler={this.toggleDisabled.bind(this)} />
						<Button text="Reset" handler={() => this.form.cmp.reset()} />
					</Toolbar>
				</FormPanel>
			</Container>
		);
	}
}