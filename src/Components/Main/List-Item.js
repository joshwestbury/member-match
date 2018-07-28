import React from 'react';
import { Typography } from '@material-ui/core';
import { CardContent, Card } from '@material-ui/core';
import styles from './main-css/List-Item.css';
import * as _ from 'lodash';

const resultItem = ({resultObj}) => {
    const firstName = _.get(resultObj, 'values.firstname', 'No first name');
    const lastName = _.get(resultObj,  'values.lastname', 'No last name');
    const name = firstName + ' ' + lastName;
    const address = _.get(resultObj, 'values.billaddress', 'No address');
    const partner = _.get(resultObj, 'values.partner[0].text', 'no partner');

    return (
        <Card elevation={7} style={styles.Card}>
            <CardContent>
                
                <Typography variant='headline'>
                    {name}
                </Typography>
                <Typography variant='headline'>
                    {address}
                </Typography>
                <Typography variant='headline'>
                    {partner}
                </Typography>
                
            
            </CardContent>
            {/* <CardActions style={styles.CheckBox}>
                <Checkbox
                    //checked={this.state.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                />
            </CardActions> */}
        </Card>
    )
}
export default resultItem;