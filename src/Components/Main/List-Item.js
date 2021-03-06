import React from 'react';
import { TextField, List, Checkbox, CardActions, Grid } from '@material-ui/core';
import { CardContent, Card } from '@material-ui/core';
import styles from './Main-css/List-Item.css';
import * as _ from 'lodash';


const ResultItem = ({resultObj, handleCheckbox, selectedIndex}) => {

    
    const firstName = _.get(resultObj, 'values.firstname');
    const lastName = _.get(resultObj,  'values.lastname');
    const name = firstName + ' ' + lastName;
    const companyName = _.get(resultObj, 'values.companyname');
    const address = _.get(resultObj, 'values.address', 'No Address');
    const partner = _.get(resultObj, 'values.partner[0].text');
    const comments = _.get(resultObj, 'values.comments')
    console.log(typeof selectedIndex, typeof resultObj.key)
    console.log(selectedIndex);
    return (
        <Card elevation={7} onClick={() => handleCheckbox(resultObj.key, resultObj.id)} style={styles.Card} key={resultObj.key}> 
            <CardContent >
                <Grid container>
                    <Grid item lg={1}>
                    </Grid>
                    <Grid item lg={4}>
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
                            <TextField id="name"
                                label="Comments"
                                style={styles.TextField}
                                value={`${comments}`}
                                multiline
                                rowsMax="50"
                                margin="normal"
                            />
                        </List> 
                    </Grid>
                    <Grid item lg={7}>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Checkbox
                    checked={selectedIndex === resultObj.key}
                    
                    onClick={() => handleCheckbox(resultObj.key, resultObj.id)}
                />
            </CardActions>
        </Card>
      
    )
}
export default ResultItem;



// class ResultItem extends Component {
    

//     render() {

//         const firstName = _.get(resultObj, 'values.firstname');
//         const lastName = _.get(resultObj,  'values.lastname');
//         const name = firstName + ' ' + lastName;
//         const companyName = _.get(resultObj, 'values.companyname');
//         const address = _.get(resultObj, 'values.address', 'No Address');
//         const partner = _.get(resultObj, 'values.partner[0].text');
//         const comments = _.get(resultObj, 'values.comments')


//         <Card elevation={7} onClick={handleToggle(resultObj)} style={styles.Card} key={resultObj.key}> 
//             <CardContent >
//                 <List >
//                     <TextField id="name"
//                         label="Customer Name"
//                         style={styles.TextField}
//                         value={`${name}`}
//                         multiline
//                         rowsMax="50"
//                         margin="normal"
//                     />
//                     <TextField id="name"
//                         label="Customer Address"
//                         style={styles.TextField}
//                         value={`${address}`}
//                         multiline
//                         rowsMax="50"
//                         margin="normal"
//                     />
//                     <TextField id="name"
//                         label="Company Name"
//                         style={styles.TextField}
//                         value={`${companyName}`}
//                         multiline
//                         rowsMax="50"
//                         margin="normal"
//                     />
//                      <TextField id="name"
//                         label="Partner Name"
//                         style={styles.TextField}
//                         value={`${partner}`}
//                         multiline
//                         rowsMax="50"
//                         margin="normal"
//                     />
//                     <TextField id="name"
//                         label="Comments"
//                         style={styles.TextField}
//                         value={`${comments}`}
//                         multiline
//                         rowsMax="50"
//                         margin="normal"
//                     />
//                 </List>
//             </CardContent>
//             <CardActions>
//                 <Checkbox
//                     //checked={this.state.checked.indexOf(value) !== -1}
//                     onClick={handleCheckbox(resultObj)}
//                 />
//             </CardActions>
//         </Card>
//     }

// }
// export default ResultItem;



