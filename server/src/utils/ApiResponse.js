class ApiResponse {
  constructor(status, data, message = "success") {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export { ApiResponse };
