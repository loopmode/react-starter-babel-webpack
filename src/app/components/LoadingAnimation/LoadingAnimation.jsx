import React from 'react';
import cx from 'classnames';
import localStyles from './LoadingAnimation.scss';

export default class LoadingAnimation extends React.Component {
    render() {
        const props = this.props;
        return (
            <div
                className={cx('LoadingAnimation', props.className, localStyles.wrapper)}
                styles={{...props.styles}} >

                {(props.overlay !== false) && <div className={cx('overlay', localStyles.overlay)} />}

                <div className={localStyles.spinnerWrap}>
                    <div className={localStyles.spinnerPosition}>
                        <div className={cx('spinner', localStyles.spinner)} />
                    </div>
                </div>
            </div>
        );
    }
}
