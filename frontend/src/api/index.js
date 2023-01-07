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
export const CreateNewComputer = async (data) => {
	const request = await fetch("http://127.0.0.1:5000/api/сomputer", {
		method: "post",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await request.json();
};

export const CreateCleanRequest = async (data) => {
	const request = await fetch("http://127.0.0.1:5000/api/cleaning", {
		method: "post",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await request.json();
};

export const CreateServiceRequest = async (data) => {
	const request = await fetch("http://127.0.0.1:5000/api/servicerequest", {
		method: "post",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await request.json();
};

export const getAllCleanRequests = async () => {
	const request = await fetch("http://127.0.0.1:5000/api/cleaning");
	return await request.json();
};
