class Auth {
	constructor() {
        this.authenticated = false;
       
	}

	login() {
        if (localStorage.getItem("Token") !== null) {
			this.authenticated = true;
		}
		
	}

	logout(cb) {
		this.authenticated = true;
		cb();
    }
    
    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Auth();