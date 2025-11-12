<?php
// Database connection settings
$servername = "localhost";
$username = "root"; // default for XAMPP
$password = ""; // default is empty for XAMPP
$database = "portfolio_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $facebook = $_POST['facebook'];
    $message = $_POST['message'];

    // Prepare and bind statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO contact_form (fullName, email, phoneNumber, facebook, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $fullName, $email, $phoneNumber, $facebook, $message);

    // Execute and check
    if ($stmt->execute()) {
        echo "
        <script>
            alert('Message sent successfully!');
            window.location.href = 'index.html'; // redirect back to homepage
        </script>
        ";
    } else {
        echo "
        <script>
            alert('Error: Unable to send message.');
            window.location.href = 'index.html';
        </script>
        ";
    }

    // Close connections
    $stmt->close();
    $conn->close();
}
?>
