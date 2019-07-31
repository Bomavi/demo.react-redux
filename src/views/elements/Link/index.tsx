/* npm imports: common */
import React from 'react';
import cx from 'classnames';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: common */
import router from 'config/router';

/* local imports: common */
import { styles } from './styles';

interface LinkProps extends WithStyles<typeof styles> {
	name: string;
	block?: boolean;
	params?: object;
	options?: {
		reload?: boolean;
		refresh?: boolean;
	};
}

class LinkComponent extends React.Component<LinkProps> {
	public static defaultProps = {
		block: false,
		options: {},
		params: {},
	};

	private handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		const { name, params, options } = this.props;
		const comboKey = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;

		if (event.button === 0 && !comboKey) {
			event.preventDefault();
			router.navigate(name, params as any, options as any);
		}
	};

	public render() {
		const { children, classes, name, block, params } = this.props;
		const href = router.buildPath(name, params as any);

		if (href === null) console.error("<Link> Couldn't make URL for", name, params);

		const rootClass = {
			[classes.root]: !block,
			[classes.block]: block,
			[classes.active]: router.isActive(name),
		};

		return (
			<a href={href} className={cx(rootClass)} onClick={this.handleClick}>
				<div className={classes.iconWrapper}>{children}</div>
			</a>
		);
	}
}

const Link = withStyles(styles)(LinkComponent);

export { Link };
