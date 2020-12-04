create database Navio;

use Navio;

create table usuario(
    username varchar(20) not null,
    password varchar(15) not null,
    is_admin bit not null,
    constraint pk_usuario primary key(username)
);

create table produtos(
    name varchar(44) not null,
    price numeric(6.2) not null,
    description varchar(286),
    image varchar(250),
    constraint pk_produtos primary key(name)
);

create table compras(
    id int not null auto_increment,
    purchase_date date not null,
    quantity int not null,
    constraint pk_compras primary key(id),
    user_name varchar(20) not null,
    item_name varchar(44) not null,
    constraint fk_compras_usuario foreign key(user_name) references usuario(username),
    constraint fk_compras_produtos foreign key(item_name) references produtos(name)
);