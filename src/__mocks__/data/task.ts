const taskFabric = (index: number): TaskType => {
	return {
		_id: index.toString(),
		description: `Description Num ${index}`,
		completed: false,
		createdAt: 'some date',
		updatedAt: 'some date',
	};
};

export const task = taskFabric(1);

export const tasks = [1, 2, 3].map(i => taskFabric(i));
