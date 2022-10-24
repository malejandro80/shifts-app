<!-- @format -->

this is a shift management application for nurses.

1. it was made in next with the purpose of having both the back and the front in the same challenge.

2. the back logic is in the backend folder.

3. the endpoint paths are as follows

GET /shifts
GET /nurse
PUT /shifts/${shift_id} => body = {nurseId : 1}

4. the handling of all the routes is done from the pages folder.

5. the JSON files located in backend/data do the database work.
