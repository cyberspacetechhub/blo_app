const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {

        const rolesArray = [...allowedRoles];
        console.log('rolesArray:', rolesArray);
        const result =  rolesArray.includes(req.roles);
        
        if (!result) {
            return res.sendStatus(403); // Forbidden
        }

        next();
    };
};

module.exports = verifyRoles;
