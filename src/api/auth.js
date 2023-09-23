import requestService from "../services/requestService";
import config from "../config";

const resourceUrl = config.getApiAuthUrl();

const authorize = params => requestService.create(resourceUrl + '/login', params);
const getAuthUser = () => requestService.get(resourceUrl + '/me');
const registerUser = params => requestService.create(resourceUrl + '/register', params);
const resetPassword = params => requestService.create(resourceUrl + '/reset-password', params);
const logout = params => requestService.get(resourceUrl + '/logout', params);
const getSocialRedirectUrl = params => { return requestService.get(resourceUrl + `/social/${params}/redirect`)};
const socialLogin = params => {

	return requestService.get(resourceUrl + `/social/${params.provider}/callback?code=` + params.code, {}, {  });
};
const confirmEmail = params => requestService.update(resourceUrl + '/confirm-email', params);


export {
	authorize,
	getAuthUser,
	registerUser,
	resetPassword,
	getSocialRedirectUrl,
	socialLogin,
	confirmEmail,
	logout
};
