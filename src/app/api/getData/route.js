import path from "path";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const GET = async (req) => {
  try {
    // Open the database connection
    const db = await open({
      filename: path.resolve(process.cwd(), "data.db"), // Adjust the path as needed
      driver: sqlite3.Database,
    });

    console.log("Hi", db);
    console.log("Resolved path:", path.resolve(process.cwd(), "data.db"));

    // Fetch data from the CameraData table
    const data = await db.all("SELECT * FROM CameraData");
    console.log("Data: ", data);

    // Close the database connection
    await db.close();

    // Format data into an array of objects with keys as column names
    const formattedData = data.map((row) => ({
      CameraID: row.CameraID,
      Object: row.Object,
      Name: row.Name,
      Time: row.Time,
      Date: row.Date,
      Image: row.Image,
    }));

    // Sort the formatted data by date and time in descending order
    formattedData.sort((a, b) => {
      // Combine Date and Time fields and create Date objects for comparison
      const dateTimeA = new Date(`${a.Date}T${a.Time}`);
      const dateTimeB = new Date(`${b.Date}T${b.Time}`);
      return dateTimeB - dateTimeA; // Descending order
    });

    // Send the sorted data as a JSON response
    return new Response(JSON.stringify(formattedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data from database:", error);

    // Return an error response
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
