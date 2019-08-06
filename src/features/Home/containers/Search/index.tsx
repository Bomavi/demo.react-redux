/* npm imports: common */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';

/* root imports: view components */
import { CustomInput } from 'views/elements';

/* root imports: common */
import { State } from 'reducers';
import { searchTasks, fetchTasks } from 'actions/tasks';
import { TaskActionTypes } from 'actions/tasks/types';
import { debounce, debounceTiming } from 'utils/helpers';

/* local imports: common */
import { styles } from './styles';

const mapStateToProps = (state: State) => ({
	isFetching: state.tasks.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch<TaskActionTypes>) =>
	bindActionCreators(
		{
			searchTasks,
			fetchTasks,
		},
		dispatch
	);

interface SearchProps extends WithStyles<typeof styles> {}

interface SearchState {
	searchQuery: string;
}

type Props = ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps> &
	SearchProps;

class SearchComponent extends React.Component<Props, SearchState> {
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

const SearchWithStyles = withStyles(styles)(SearchComponent);
const SearchWithRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchWithStyles);

export const Search = SearchWithRedux;
