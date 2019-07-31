/* npm imports: material-ui/core */
import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'inline-block',
		},
		block: {
			position: 'absolute',
			top: 0,
			left: 0,
			display: 'flex',
			alignItems: 'center',
			width: '100%',
			height: '100%',
		},
		iconWrapper: {
			width: '100%',
			height: 20,
		},
		active: {
			backgroundColor: 'rgba(0, 0, 0, 0.1)',
			boxShadow:
				'inset 0 5px 10px rgba(0, 0, 0, 0.1), inset 0 -5px 15px rgba(0, 0, 0, 0.05)',

			'& .icon-wrapper': {
				boxShadow: 'inset 4px 0 0 #fff',
			},
		},
	});
