<?php
class Database {
    private $host = "mysql";
    private $db_name = "usuarios";
    private $username = "root";
    private $password = "root";
    public $conn;

    public function getConnection() {
        try {
            $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db_name;
            error_log("Attempting to connect to database with DSN: " . $dsn);
            
            $this->conn = new PDO($dsn, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            error_log("Database connection successful");
            return $this->conn;
        } catch(PDOException $e) {
            error_log("Connection Error Details: " . $e->getMessage());
            error_log("Connection Error Code: " . $e->getCode());
            return null;
        }
    }
}
?>