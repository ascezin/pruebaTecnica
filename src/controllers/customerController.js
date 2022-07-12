const controller = {};

controller.list = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM usuarios', (err, Usuarios)=>{
            if(err){
                err.render('customers',{
                    data: Usuarios
                });
            }
            res.render('customers',{
                data: Usuarios
            });
        });
    });
};
controller.save = (req, res)=>{
    const data = req.body;

    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO usuarios set ?', [data], (err, Usuarios)=>{
            console.log('data');
            res.redirect('/');
        });
    })
};

controller.edit = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, customer)=>{
        res.render('customr_edit', {
            data: customer[0]
        });
    });
});
};

controller.update = (req, res)=>{
    const id = req.params.id;
    const newCustomer = req.body; //Datos
    req.getConnection((err, conn)=>{
        conn.query('UPDATE usuarios set ? WHERE id = ?', [newCustomer, id], (err, rows)=>{
            res.redirect('/')
        })
    })
};

controller.delete = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM usuarios WHERE id = ?', [id],(err, rows)=>{
            res.redirect('/');
        });
    });
};

module.exports = controller;