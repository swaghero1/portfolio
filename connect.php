<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pharmacy_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Retrieve form data safely
$fullName = htmlspecialchars($_POST['fullName']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$phoneNumber = htmlspecialchars($_POST['phoneNumber']);
$facebook = htmlspecialchars($_POST['facebook']);
$message = htmlspecialchars($_POST['message']);

// Prepare and bind SQL query (Secure method)
$stmt = $conn->prepare("INSERT INTO users (full_name, email, phone_number, facebook, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $fullName, $email, $phoneNumber, $facebook, $message);

if ($stmt->execute()) {
    echo "<script>alert('Message sent successfully!');</script>";
} else {
    echo "<script>alert('Error submitting form. Please try again.');</script>";
}

// Close connection
$stmt->close();
$conn->close();
?>
