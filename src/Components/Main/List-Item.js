import React from 'react';
import { TextField, List, Checkbox, CardActions } from '@material-ui/core';
import { CardContent, Card } from '@material-ui/core';
import styles from './Main-css/List-Item.css';
import * as _ from 'lodash';

const resultItem = ({resultObj}) => {

    const firstName = _.get(resultObj, 'values.firstname', 'No First Name');
    const lastName = _.get(resultObj,  'values.lastname', 'No Last Name');
    const name = firstName + ' ' + lastName;
    const companyName = _.get(resultObj, 'values.companyname', 'No Company Name');
    const address = _.get(resultObj, 'values.address', 'No Address');
    const partner = _.get(resultObj, 'values.partner[0].text', 'No partner');

    return (
        <Card elevation={7} style={styles.Card} key={resultObj.key}> 
            <CardContent >
                <List >
                    <TextField id="name"
                        label="Customer Name"
                        style={styles.TextField}
                        value={`${name}`}
                        multiline
                        rowsMax="50"
                        margin="normal"
                    />
                    <TextField id="name"
                        label="Customer Address"
                        style={styles.TextField}
                        value={`${address}`}
                        multiline
                        rowsMax="50"
                        margin="normal"
                    />
                    <TextField id="name"
                        label="Company Name"
                        style={styles.TextField}
                        value={`${companyName}`}
                        multiline
                        rowsMax="50"
                        margin="normal"
                    />
                     <TextField id="name"
                        label="Partner Name"
                        style={styles.TextField}
                        value={`${partner}`}
                        multiline
                        rowsMax="50"
                        margin="normal"
                    />
                </List>
            </CardContent>
            <CardActions>
                <Checkbox
                    //checked={this.state.checked.indexOf(value) !== -1}
                
                />
            </CardActions>
        </Card>
    )
}
export default resultItem;