(function (user) {
    let div_var = document.getElementById('add_div');
    let div_nav =  document.createElement('div');

    let div_info = document.createElement('h4')
    div_info.innerText = user;
    let div_pic = document.createElement('img');
    div_pic.src ='https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
    div_pic.style.width = '25px';
    div_pic.style.height = '25px';

    div_nav.style.marginLeft = '25px';
    div_nav.style.display = 'flex';
    div_info.style.marginRight = '15px'


    div_nav.appendChild(div_info);
    div_nav.appendChild(div_pic);
    div_var.appendChild(div_nav);
})('John')