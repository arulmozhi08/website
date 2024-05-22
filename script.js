body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #f0f2f5;
}

header {
    text-align: center;
    padding: 20px;
    background: #007bff;
}

.logo {
    max-width: 200px;
    transition: transform 0.3s;
}

.logo:hover {
    transform: scale(1.1);
}

.image-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

.image {
    max-width: 45%;
    height: auto;
    border: 5px solid #007bff;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.image:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.button-container {
    text-align: center;
    padding: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
}

button:hover {
    background: #0056b3;
    transform: scale(1.1);
}

.table-container {
    max-width: 100%;
    overflow-x: auto;
    padding: 20px;
    background: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
    position: sticky;
    top: 0;
    background: #007bff;
    color: white;
}
