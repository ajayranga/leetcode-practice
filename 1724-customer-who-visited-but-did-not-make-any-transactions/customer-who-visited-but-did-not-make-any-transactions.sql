-- Write your PostgreSQL query statement below
SELECT customer_id, COUNT(visit_id) AS count_no_trans 
FROM VISITS
WHERE VISIT_ID NOT IN (SELECT VISIT_ID FROM TRANSACTIONS)
GROUP BY customer_id;