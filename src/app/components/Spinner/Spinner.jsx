import cx from 'classnames';
import css from './Spinner.scss';
import React from 'react';
export default class Spinner extends React.Component {
    render() {
        const props = this.props;

        // clone styles, mutate by adding optional properties, but avoid undefined values
        const styles = {...props.styles};

        // overall size is set as font-size. this is wacky. but right now, it turns out it works.
        if (props.diameter) { styles.fontSize = props.diameter * 0.2; }

        // marker is the border that makes up a quarter of the circle
        if (props.markerBorderRadius) { styles.borderLeftRadius = props.markerBorderRadius; }
        if (props.markerOpacity) { styles.borderLeftOpacity = props.markerOpacity; }
        if (props.markerStrength) { styles.borderLeftStrength = props.markerStrength; }

        return <div className={cx('Spinner', css.Spinner, props.className)} style={styles} />;
    }
}
