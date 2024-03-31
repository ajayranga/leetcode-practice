-- Write your PostgreSQL query statement below
-- SELECT customer_id, COUNT(visit_id) AS count_no_trans 
-- FROM VISITS
-- WHERE VISIT_ID NOT IN (SELECT VISIT_ID FROM TRANSACTIONS)
-- GROUP BY customer_id;

SELECT V.customer_id, COUNT(V.visit_id) AS count_no_trans 
FROM VISITS V
LEFT JOIN TRANSACTIONS T
ON T.visit_id = V.visit_id
WHERE T.TRANSACTION_ID IS NULL 
GROUP BY customer_id;