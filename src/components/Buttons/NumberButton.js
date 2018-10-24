import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  // input: {
  //   display: 'none',
  // },
});

function NumberButton(props) {
  const { classes, symbol } = props;

  return (
    <div>
      <Button variant="contained" className={classes.button} style={{ width: '40px', height: '60px', fontSize: '25px' }}>
        {symbol}
      </Button>
    </div>
  );
}

NumberButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NumberButton);