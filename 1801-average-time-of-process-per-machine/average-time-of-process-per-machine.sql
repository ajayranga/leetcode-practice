-- Write your PostgreSQL query statement below
-- SELECT *
SELECT DISTINCT(M1.MACHINE_ID),
ROUND(CAST((SUM(M2.TIMESTAMP-M1.TIMESTAMP)/COUNT(M1.MACHINE_ID)) AS NUMERIC),3) AS processing_time
FROM activity M1
JOIN activity M2
ON M1.activity_type='start' and m2.activity_type='end'
and M1.machine_id=M2.machine_id
and M1.process_id=M2.process_id
GROUP BY M1.MACHINE_ID;