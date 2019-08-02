/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { searchTasks, fetchTasks } from 'actions/tasks';
import { debounce, debounceTiming } from 'utils/helpers';

/* local imports: common */
import { styles } from './styles';

interface SearchProps extends WithStyles<typeof styles> {
	isFetching: boolean;
	searchTasks: typeof searchTasks;
	fetchTasks: typeof fetchTasks;
}

interface SearchState {
	searchQuery: string;
}

class SearchComponent extends React.Component<SearchProps, SearchState> {
	public state = {
		searchQuery: '',
	};

	public componentWillUnmount() {
		if (this.state.searchQuery.length > 0) {
			this.props.searchTasks('');
			this.props.fetchTasks();
		}
	}

	public changeHandler = debounce((value: string) => {
		this.setState(
			() => ({
				searchQuery: value,
			}),
			() => {
				this.props.searchTasks(value);
				this.props.fetchTasks();
			}
		);
	}, debounceTiming.input);

	public render() {
		const { isFetching } = this.props;

		return (
			<CustomInput
				icon={{
					name: 'magnify',
					svgSize: 'md',
				}}
				isFetching={isFetching}
				placeholder="Type to search..."
				onChange={this.changeHandler}
			/>
		);
	}
}

const Search = withStyles(styles)(SearchComponent);

export { Search };
