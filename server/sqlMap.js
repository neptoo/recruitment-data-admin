// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, username, password) values (0, ?, ?)',
        select_name: 'SELECT * from user where username = ?',    //查询 username
        select_password: 'SELECT * from user where password = ?'      //查询 password
    },
    // 招聘
    hire: {
        add: 'insert into hire(hire_id, title, money, degree, exp, site, time, addr) values (0, ?, ?, ?, ?, ?, ?, ?)',
        del: 'delete from hire where hire_id = ?',
        getAll: 'SELECT * from hire',
        search: 'select * from hire where title = ?',
        update: 'update hire set title = ? where hire_id = ?'
    }
}

module.exports = sqlMap;