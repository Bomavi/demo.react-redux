declare type TasksSearchKeys = 'q';

declare interface TasksSearchType {
	q?: TasksSearchKeys;
	// ? pagination options
	size?: number;
	page?: number;
}

declare type TaskActionInProgress = 'updateInProgress' | 'deleteInProgress';

declare type TaskFetchingState = 'inProgress' | 'isFetching';

declare interface TaskType {
	_id: string;
	description: string;
	completed: boolean;
	createdAt: string;
	updatedAt: string;
}

declare interface TaskUpdateSchema {
	description?: string;
	completed?: boolean;
}
