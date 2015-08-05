import cx from 'classnames';
import css from './SpinnerOverlay.scss';
import React from 'react';
import Spinner from './Spinner';

/**
 * full-size, half-transparent blocker overlay with spinner in the middle.
 * TODO: implement proper fadein fadeout, https://facebook.github.io/react/docs/animation.html
 */
export default class SpinnerOverlay extends React.Component {
    render() {
        const props = this.props;

        return (
            <div className={cx('SpinnerOverlay', css.this, props.className)} styles={props.styles} >
                {props.blocker === false || <div className={cx('overlay', css.Overlay)} styles={props.overlayStyles} />}
                <div className={css.OuterWrap} style={props.outerStyles}>
                    <div className={css.InnerWrap} style={props.innerStyles}>
                        <Spinner className={props.spinnerClass} styles={props.spinnerStyles}/>
                    </div>
                </div>
            </div>
        );
    }
}
