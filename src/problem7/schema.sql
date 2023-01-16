DROP Table if EXISTS balances
create table balances(
	id int primary key,
  	address varchar(20),
  	denom varchar(5),
  	amount BIGINT,
  	block_height int
)

insert into balances(id, address, denom, amount, block_height) values (1, '0xabab', 'usdc', 50000000000000, 733755);
insert into balances values (2, '0x99cc', 'swth', 20000000, 733757);
insert into balances values (3, '0xabab', 'usdc', 50000000000, 733855);

SELECT * FROM balances

create table trades(
	id int PRIMARY key,
	address VARCHAR(20),
	denom VARCHAR(5),
	amount BIGINT,
	block_height int
)

insert into trades(id, address, denom, amount, block_height) values (1, '0xabab', 'swth', 400000000000, 733756);
insert into trades values (2, '0x99cc', 'usdc', 3500000000000, 733757);
insert into trades values (3, '0x67f3', 'swth', 72000000000000, 733758);

select * from trades
select * from balances

SELECT DISTINCT trades.address
FROM trades, balances
WHERE trades.address = balances.address AND 
    trades.block_height > 730000 AND
    balances.amount * (
        CASE
            WHEN balances.denom = 'usdc' THEN 0.000001
            WHEN balances.denom = 'swth' THEN 0.00000005
            WHEN balances.denom = 'tmz' THEN 0.003
            ELSE 0
        END
    ) >= 500