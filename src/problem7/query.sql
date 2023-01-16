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