/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { IconProps, InputButton } from 'views/elements';

/* root imports: common */
import { removeSpaces } from 'utils/helpers';

/* local imports: common */
import { styles } from './styles';

export interface CustomInputProps extends WithStyles<typeof styles> {
	icon?: IconProps;
	placeholder?: string;
	defaultValue?: string;
	autoFocus?: boolean;
	isFetching?: boolean;
	onClick?: (value: string) => void;
	onChange?: (value: string) => void;
	onCancel?: () => void;
}

interface CustomeInputState {
	inputValue: string;
}

class CustomInputComponent extends React.PureComponent<
	CustomInputProps,
	CustomeInputState
> {
	public static defaultProps = {
		isFetching: false,
		autoFocus: false,
	};

	public state = {
		inputValue: '',
	};

	private get trimedValue(): string {
		return removeSpaces(this.state.inputValue).trim();
	}

	private get isEmpty(): boolean {
		const { defaultValue } = this.props;
		return !this.trimedValue || this.trimedValue === defaultValue;
	}

	private changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		this.setState(
			() => ({
				inputValue: value,
			}),
			() => {
				this.changeCallbackHandler();
			}
		);
	};

	private actionClickHandler = () => {
		const { onClick, onCancel } = this.props;
		if (onClick) onClick(this.trimedValue);
		if (onCancel) onCancel();
		this.clearInputValue();
	};

	private clearHandler = () => {
		this.clearInputValue();
	};

	private clearInputValue = () => {
		this.setState(() => ({ inputValue: '' }), () => this.changeCallbackHandler());
	};

	private keyPressHandler = (e: React.KeyboardEvent) => {
		const { onClick, onCancel } = this.props;

		if (e.key === 'Enter' && onClick) {
			if (this.trimedValue) onClick(this.trimedValue);
			if (onCancel) onCancel();
			if (!onCancel) this.clearInputValue();
		}

		if (e.key === 'Escape' && onCancel) onCancel();
	};

	private changeCallbackHandler = () => {
		const { onChange } = this.props;
		if (onChange) onChange(this.trimedValue);
	};

	public render() {
		const { inputValue } = this.state;
		const {
			classes,
			icon,
			placeholder,
			defaultValue,
			isFetching,
			autoFocus,
			onClick,
			onCancel,
		} = this.props;

		const value = inputValue || defaultValue || inputValue;

		return (
			<div className={classes.root}>
				{icon && (
					<InputButton
						icon={icon}
						isFetching={isFetching}
						color={onClick ? 'primary' : 'inherit'}
						title={icon.title}
						disabled={onClick && this.isEmpty}
						onClick={onClick && this.actionClickHandler}
					/>
				)}
				{icon && <Divider className={classes.divider} />}
				<InputBase
					className={classes.input}
					placeholder={placeholder}
					value={value}
					autoFocus={autoFocus}
					onChange={this.changeHandler}
					onKeyUp={this.keyPressHandler}
				/>
				{(!this.isEmpty || onCancel) && <Divider className={classes.divider} />}
				{!this.isEmpty && !onCancel && (
					<InputButton
						icon={{ name: 'close' }}
						title="Clear"
						onClick={this.clearHandler}
					/>
				)}
				{onCancel && (
					<InputButton
						icon={{ name: 'close' }}
						title="Cancel"
						onClick={onCancel}
					/>
				)}
			</div>
		);
	}
}

const CustomInput = withStyles(styles)(CustomInputComponent);

export { CustomInput };
