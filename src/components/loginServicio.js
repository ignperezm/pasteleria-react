export const loginService = {
    ///// usuarios por default
    usuariosSistema: [
        { email: "admin@duoc.cl", password: "admin123" },
        { email: "usuario@duoc.cl", password: "12345" },
        { email: "test@duoc.cl", password: "duoc123" }
    ],

    /////busca credenciales
    verificarCredenciales: (email, password) => {
        ///// extrae usuarios 
        const usuariosCreados = JSON.parse(localStorage.getItem('usuariosCreados') || '[]');

        const todosUsuarios = [...loginService.usuariosSistema, ...usuariosCreados];
        
        ///// verifica
        return todosUsuarios.some(usuario => usuario.email === email && usuario.password === password);
    }
};