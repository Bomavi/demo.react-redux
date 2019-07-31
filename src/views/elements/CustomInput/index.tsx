/* npm imports: common */
import React from 'react';

/* npm imports: material-ui/core */
import { withStyles, WithStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';

/* root imports: view components */
import { IconProps, InputButton } from 'views/elements';

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

class CustomInputComponent extends React.Component<CustomInputProps, CustomeInputState> {
	public static defaultProps = {
		isFetching: false,
		autoFocus: false,
	};

	public state = {
		inputValue: '',
	};

	private isEmpty() {
		const { inputValue } = this.state;
		const { defaultValue } = this.props;
		return !inputValue || inputValue === defaultValue;
	}

	private changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		this.setState(
			() => ({
				inputValue: value,
			}),
			() => {
				this.changeCallbackHandler(value);
			}
		);
	};

	private actionClickHandler = () => {
		const { onClick, onCancel } = this.props;
		if (onClick) onClick(this.state.inputValue);
		if (onCancel) onCancel();
		this.clearInputValue();
	};

	private clearHandler = () => {
		this.clearInputValue();
		this.changeCallbackHandler(this.state.inputValue);
	};

	private clearInputValue = () => {
		this.setState(() => ({ inputValue: '' }));
	};

	private keyPressHandler = (e: React.KeyboardEvent) => {
		const { inputValue } = this.state;
		const { onClick, onCancel } = this.props;

		if (e.key === 'Enter' && onClick) {
			if (inputValue) onClick(inputValue);
			if (onCancel) onCancel();
			if (!onCancel) this.clearInputValue();
		}
	};

	private changeCallbackHandler = (value: string) => {
		const { onChange } = this.props;
		if (onChange) onChange(value);
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
						disabled={onClick && this.isEmpty()}
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
					onKeyPress={this.keyPressHandler}
				/>
				{(!this.isEmpty || onCancel) && <Divider className={classes.divider} />}
				{!this.isEmpty && !onCancel && (
					<InputButton icon={{ name: 'close' }} onClick={this.clearHandler} />
				)}
				{onCancel && <InputButton icon={{ name: 'close' }} onClick={onCancel} />}
			</div>
		);
	}
}

const CustomInput = withStyles(styles)(CustomInputComponent);

export { CustomInput };
