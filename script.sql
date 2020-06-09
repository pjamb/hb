create table users(
id int(5) not null auto_increment,
phone varchar(15) not null,
email varchar(40) not null,
fname varchar(25) not null,
primary key(id),
unique key(email)
);
