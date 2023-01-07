export const getAllEmployees = async () => {
	const request = await fetch("http://127.0.0.1:5000/api/employee");
	return await request.json();
};

export const login = async (data) => {
	const request = await fetch("http://127.0.0.1:5000/api/authorization", {
		method: "post",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await request.json();
};

export const getAllComputers = async () => {
	const request = await fetch("http://127.0.0.1:5000/api/сomputer");
	return await request.json();
};
