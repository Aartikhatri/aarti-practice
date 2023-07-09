export const option = {
    "name": "Login User",
    "description": "To login club user using email/mobile and password",
    "renders": [
        "application/json",
        "text/html"
    ],
    "parses": [
        "application/json",
        "application/x-www-form-urlencoded",
        "multipart/form-data"
    ],
    "actions": {
        "POST": {
            "username": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Username"
            },
            "password": {
                "type": "string",
                "required": true,
                "read_only": false,
                "label": "Password"
            }
        }
    }
}