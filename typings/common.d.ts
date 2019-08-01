declare interface StringTMap<T = string> {
	[key: string]: T;
}
declare interface NumberTMap<T = string> {
	[key: number]: T;
}

declare type DynamicImportType = () => Promise<{ default: React.ComponentType<any> }>;
declare type LazyComponentType = React.LazyExoticComponent<React.ComponentType<any>>;

declare interface CustomServerError extends Error {
	res: {
		status: number;
	};
}

declare type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

declare type SortKey = 'asc' | 'desc';
