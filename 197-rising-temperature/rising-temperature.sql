-- Write your PostgreSQL query statement below
SELECT W2.Id FROM WEATHER W1
JOIN WEATHER W2
ON W2.recordDate::DATE - W1.recordDate::DATE = 1 AND
W2.temperature>W1.temperature