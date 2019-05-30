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

export default class Home extends Component {
 
  // store = new Ext.data.Store({
  //   data: [this.state.todos]
  // });
  // async getAlert(data) {
  //   const payload = {
  //     lol: "lol2"
  //   };
  //   await axios.post(`http://localhost:9090/create`, payload).then(res => {
  //     console.log(res);
  //   });
  // }


    constructor() {
        super();
        this.state = {
            // disabled: false,
            categoryName: ''
        };
    }

    createNew = (event) => {
        this.setState({categoryName: event.target.value})
     
        console.log("fdssdassa",this.state.categoryName)
        console.log('NOICE')
    }
    // handleChange(event){
    //     this.setState({
    //         [event.target.type]: event.target.value
    //       });
    //     // this.setState({categoryName: event.target.categoryName})
    // }

    
   

    render() {
        const { categoryName } = this.state
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
                    <FieldSet ref="category" title="Add New Category" defaults={{labelAlign: "placeholder"}}>
                        <TextField label="Category Name" required placeholder="This field is required" value={categoryName} onChange={this.createNew()}/>
                       
                    </FieldSet>
                   
                    <Toolbar shadow={false} docked="bottom" layout={{ type: 'hbox', pack: 'right' }}>
                        <Button text={'Create'} margin="0 10 0 0" handler={this.createNew.bind(this)}/>
                        <Button text="Reset" handler={() => this.form.cmp.reset()}/>
                    </Toolbar>
                </FormPanel>
            </Container>
        );
    }
}