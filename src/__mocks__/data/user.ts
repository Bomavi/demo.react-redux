const userFabric = (index: number): UserType => {
	return {
		_id: index.toString(),
		username: `user_num_${index}`,
		theme: 'light',
		createdAt: 'some date',
		updatedAt: 'some date',
	};
};

export const user = userFabric(1);

export const users = [1, 2, 3].map(i => userFabric(i));
