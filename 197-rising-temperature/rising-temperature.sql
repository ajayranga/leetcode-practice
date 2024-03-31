# Write your MySQL query statement below
SELECT W2.Id FROM WEATHER W1
JOIN WEATHER W2
ON DATEDIFF( W2.recordDate ,W1.recordDate) = 1 AND
W2.temperature>W1.temperature