SET NAMES UTF8;
DROP DATABASE IF EXISTS pet;
create database pet CHARSET=UTF8;
USE pet;
-- 用户表
DROP TABLE IF EXISTS user;
CREATE TABLE user(
  uid INT PRIMARY KEY auto_increment,
  phone varchar(16),
  upwd varchar(11)
);

-- 商品表
drop table if exists product;
CREATE TABLE product(
  pid int primary key auto_increment,
  pname varchar(16),
  price varchar(8)
);
insert into product values('1','渴望全犬期鸡肉狗粮','52.00');
insert into product values('2','海洋之星猫咪罐头','40.00');