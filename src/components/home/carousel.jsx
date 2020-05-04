import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

function BookCarousel(props) {
  const tutorialSteps = props.data
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root} className="sp">
      <Paper square elevation={0} className={classes.header} className="sp-title">
        <div className="member-top">
            <div className="member-left">
                <i></i>
                <span>会员专享折扣</span>
            </div>
            <div className="member-right">
                <span>99元/年</span>
                <i></i>
            </div>
        </div>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="content"
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.schedular_id}>
            {Math.abs(activeStep - index) <= 2 ? (
                <div className="book-box">
                    <div className="book-left">
                        <img src={step.pic} alt={step.schedular_name}/>
                    </div>
                    <div className="book-right">
                        <p>
                            {step.schedular_name}
                        </p>
                        <p>
                            <i>
                                {
                                    step.min_discount
                                }
                            </i>
                            <span>折起</span>
                            <span>立即抢购</span>
                        </p>
                    </div>
                </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default BookCarousel;
