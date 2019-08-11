const userFabric = (index: number): UserType => {
	return {
		_id: `u_id_${index}`,
		username: `user_num_${index}`,
		theme: 'light',
		createdAt: 'Sun Aug 1 2019 00:00:00 GMT+0300',
		updatedAt: 'Sun Aug 1 2019 00:00:00 GMT+0300',
	};
};

export const user = userFabric(1);

export const users = [1, 2, 3].map(i => userFabric(i));
