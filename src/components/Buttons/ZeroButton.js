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

function ZeroButton(props) {
  const { classes, symbol } = props;

  return (
    <div>
      <Button variant="contained" className={classes.button} style={{ padding: '20px 40px', fontSize: '25px' }}>
        {symbol}
      </Button>
    </div>
  );
}

ZeroButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ZeroButton);