const taskFabric = (index: number): TaskType => {
	return {
		_id: `t_id_${index}`,
		description: `Description Num ${index}`,
		completed: false,
		createdAt: 'Sun Aug 1 2019 00:00:00 GMT+0300',
		updatedAt: 'Sun Aug 1 2019 00:00:00 GMT+0300',
	};
};

export const task = taskFabric(1);

export const tasks = [1, 2, 3].map(i => taskFabric(i));
